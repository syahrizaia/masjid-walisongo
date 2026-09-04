// ============================================================================
// APLIKASI MANAJEMEN MASJID WALI SONGO
// ============================================================================
// Lokasi    : Sakaddu Barat, Desa Bungbaruh, Kec. Kadur, Kab. Pamekasan, Jatim
// Backend   : Google Apps Script (GAS)
// Database  : Google Sheets
// ============================================================================

// TODO: Ganti dengan ID Spreadsheet yang digunakan sebagai database
const SPREADSHEET_ID = "INSERT_YOUR_SPREADSHEET_ID_HERE";

/**
 * Entry Point utama saat URL Web App diakses.
 * Menangani routing sederhana via parameter query 'mode'.
 */
function doGet(e) {
  let mode = "index";
  if (e && e.parameter && e.parameter.mode) {
    mode = e.parameter.mode;
  }

  let template;
  let title = "Sistem Informasi Manajemen Masjid Wali Songo";

  // Evaluasi mode untuk routing
  switch (mode) {
    case 'tv':
      template = HtmlService.createTemplateFromFile('tv');
      title = "Mode TV - Masjid Wali Songo";
      break;
    case 'public':
      template = HtmlService.createTemplateFromFile('public');
      title = "Profil Masjid Wali Songo";
      break;
    default:
      // Default: Halaman internal / SPA
      template = HtmlService.createTemplateFromFile('index');
      title = "SIM Masjid Wali Songo - Login";
      break;
  }

  return template.evaluate()
    .setTitle(title)
    .setSandboxMode(HtmlService.SandboxMode.IFRAME)
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
    .addMetaTag('viewport', 'width=device-width, initial-scale=1');
}

/**
 * Fungsi include file HTML (untuk memisahkan CSS/JS/Komponen HTML).
 * Membantu membuat struktur modular di frontend.
 */
function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

/**
 * Helper: Koneksi ke Spreadsheet
 */
function getSheetByName(sheetName) {
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  return ss.getSheetByName(sheetName);
}

/**
 * Fungsi untuk mengambil template HTML secara dinamis (AJAX/SPA route).
 */
function getHtmlTemplate(filename) {
  try {
    return HtmlService.createHtmlOutputFromFile(filename).getContent();
  } catch(e) {
    return `<div class="p-8 text-center text-red-500 bg-red-50 rounded-lg">Gagal memuat modul ${filename}: ${e.message}</div>`;
  }
}

// ============================================================================
// FUNGSI AUTENTIKASI DASAR
// ============================================================================

/**
 * Memvalidasi login user berdasarkan data di sheet "Users".
 */
function loginUser(username, password) {
  try {
    const sheet = getSheetByName('Users');
    if (!sheet) throw new Error("Sheet 'Users' belum dibuat.");
    
    const data = sheet.getDataRange().getValues();
    
    // Looping data (mulai dari baris 2, index 1)
    for (let i = 1; i < data.length; i++) {
      let idUser = data[i][0];
      let uname = data[i][1];
      let pass = data[i][2]; 
      let name = data[i][3];
      let role = data[i][4];
      let status = data[i][5];

      if (uname === username && pass === password) {
        if (status !== 'Aktif') {
           return { success: false, message: 'Akun Anda dinonaktifkan.' };
        }
        
        // Catat ke Audit Log
        writeAuditLog(uname, 'LOGIN', 'Users', 'Berhasil login ke sistem');
        
        return {
          success: true,
          user: {
            id: idUser,
            username: uname,
            name: name,
            role: role
          },
          message: 'Login Berhasil'
        };
      }
    }
    
    return { success: false, message: 'Username atau Password salah.' };
  } catch (err) {
    return { success: false, message: 'Error Server: ' + err.message };
  }
}

// ============================================================================
// FUNGSI WRAPPER CRUD (CREATE, READ, UPDATE, DELETE) GOOGLE SHEETS
// ============================================================================

/**
 * 1. READ Data (Ambil seluruh data sebagai array of objects)
 */
function readData(sheetName) {
  try {
    const sheet = getSheetByName(sheetName);
    if (!sheet) return [];
    
    const data = sheet.getDataRange().getValues();
    if (data.length <= 1) return []; // Hanya header
    
    const headers = data[0];
    let result = [];
    
    for (let i = 1; i < data.length; i++) {
      let row = data[i];
      let obj = {};
      for (let j = 0; j < headers.length; j++) {
        // Hanya masukkan data yang kolom headernya terdefinisi
        if (headers[j]) {
          obj[headers[j]] = row[j];
        }
      }
      result.push(obj);
    }
    
    return result;
  } catch(e) {
    throw new Error('Gagal membaca data dari tabel ' + sheetName + ': ' + e.message);
  }
}

/**
 * 2. CREATE Data (Menambah baris baru)
 */
function createData(sheetName, dataObject, userAction) {
  try {
    const sheet = getSheetByName(sheetName);
    if (!sheet) throw new Error("Sheet '" + sheetName + "' tidak ditemukan.");
    
    const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
    let newRow = [];
    
    for (let i = 0; i < headers.length; i++) {
      // Gunakan null/string kosong jika field tidak ada di dataObject
      newRow.push(dataObject[headers[i]] !== undefined ? dataObject[headers[i]] : "");
    }
    
    sheet.appendRow(newRow);
    writeAuditLog(userAction, 'INSERT', sheetName, 'Menambahkan data baru');
    
    return { success: true, message: 'Data berhasil ditambahkan.' };
  } catch (e) {
    return { success: false, message: 'Gagal menambah data: ' + e.message };
  }
}

/**
 * 3. UPDATE Data (Mengubah data berdasarkan Primary Key)
 */
function updateData(sheetName, primaryKeyCol, primaryKeyValue, updateObject, userAction) {
  try {
    const sheet = getSheetByName(sheetName);
    if (!sheet) throw new Error("Sheet '" + sheetName + "' tidak ditemukan.");
    
    const data = sheet.getDataRange().getValues();
    const headers = data[0];
    const pkIndex = headers.indexOf(primaryKeyCol);
    
    if (pkIndex === -1) throw new Error('Kolom Primary key (' + primaryKeyCol + ') tidak ditemukan.');

    let updated = false;
    for (let i = 1; i < data.length; i++) {
      if (data[i][pkIndex] == primaryKeyValue) {
        // Baris ditemukan, lakukan update kolom per kolom
        for (let key in updateObject) {
          let colIndex = headers.indexOf(key);
          if (colIndex !== -1) {
             sheet.getRange(i + 1, colIndex + 1).setValue(updateObject[key]);
          }
        }
        updated = true;
        break;
      }
    }
    
    if (updated) {
      writeAuditLog(userAction, 'UPDATE', sheetName, 'Update data dengan PK ' + primaryKeyCol + ': ' + primaryKeyValue);
      return { success: true, message: 'Data berhasil diubah.' };
    } else {
      return { success: false, message: 'Data dengan ID tersebut tidak ditemukan.' };
    }
  } catch (e) {
    return { success: false, message: 'Gagal update data: ' + e.message };
  }
}

/**
 * 4. DELETE Data (Menghapus baris berdasarkan Primary Key)
 */
function deleteData(sheetName, primaryKeyCol, primaryKeyValue, userAction) {
  try {
    const sheet = getSheetByName(sheetName);
    if (!sheet) throw new Error("Sheet '" + sheetName + "' tidak ditemukan.");
    
    const data = sheet.getDataRange().getValues();
    const headers = data[0];
    const pkIndex = headers.indexOf(primaryKeyCol);
    
    if (pkIndex === -1) throw new Error('Kolom Primary key (' + primaryKeyCol + ') tidak ditemukan.');

    for (let i = 1; i < data.length; i++) {
      if (data[i][pkIndex] == primaryKeyValue) {
        sheet.deleteRow(i + 1);
        writeAuditLog(userAction, 'DELETE', sheetName, 'Hapus data dengan PK ' + primaryKeyCol + ': ' + primaryKeyValue);
        return { success: true, message: 'Data berhasil dihapus.' };
      }
    }
    return { success: false, message: 'Data dengan ID tersebut tidak ditemukan.' };
  } catch (e) {
    return { success: false, message: 'Gagal hapus data: ' + e.message };
  }
}

// ============================================================================
// FUNGSI HELPER LAINNYA
// ============================================================================

/**
 * Mencatat segala perubahan (INSERT, UPDATE, DELETE, LOGIN) ke sheet AuditLog
 */
function writeAuditLog(user, action, table, remarks) {
  try {
    const sheet = getSheetByName('AuditLog');
    if (sheet) {
      // Utilities.getUuid() valid di GAS, menghasilkan UUID random
      const idLog = Utilities.getUuid();
      const timestamp = new Date();
      // Asumsi urutan kolom: ID_Log, Timestamp, ID_User, Aksi, Tabel_Terkait, Keterangan_Aksi
      sheet.appendRow([idLog, timestamp, user || 'System', action, table, remarks]);
    }
  } catch(e) {
    // Abaikan error jika gagal log agar tidak mengganggu proses utama
    console.log("Error writing AuditLog: " + e.message);
  }
}
