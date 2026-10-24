import { PublicNavbar } from "@/components/public/Navbar";
import { HeroSection } from "@/components/public/HeroSection";
import { BentoGridInfo } from "@/components/public/BentoGridInfo";
import { ProfilSection } from "@/components/public/ProfilSection";
import { KegiatanSection } from "@/components/public/KegiatanSection";
import { TransparansiSection } from "@/components/public/TransparansiSection";
import { GaleriSection } from "@/components/public/GaleriSection";
import { FooterSection } from "@/components/public/FooterSection";

export default function HomePage() {
  return (
    <div className="min-h-screen mesh-ambient-bg text-slate-100 font-sans selection:bg-yellow-400 selection:text-emerald-950">
      <PublicNavbar />
      
      <main>
        <HeroSection />
        <BentoGridInfo />
        <ProfilSection />
        <KegiatanSection />
        <TransparansiSection />
        <GaleriSection />
      </main>

      <FooterSection />
    </div>
  );
}
