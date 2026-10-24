"use client";

import React, { useEffect, useRef } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
}

export function Modal({ isOpen, onClose, title, children, footer }: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  // Handle escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  // Handle outside click
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-md"
          onClick={handleBackdropClick}
          aria-modal="true"
          role="dialog"
          aria-labelledby={title ? "modal-title" : undefined}
        >
          <motion.div 
            ref={modalRef}
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="liquid-bento-card bg-emerald-950/85 backdrop-blur-3xl border border-white/20 text-white shadow-2xl w-full max-w-md md:max-w-lg lg:max-w-xl overflow-hidden flex flex-col max-h-[90vh]"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-emerald-900/90 via-emerald-800/80 to-emerald-900/90 border-b border-white/10 px-7 py-5 flex justify-between items-center text-white">
              {title && (
                <h3 id="modal-title" className="font-bold text-xl tracking-wide flex items-center gap-2 text-yellow-300">
                  {title}
                </h3>
              )}
              <button
                onClick={onClose}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-emerald-100 hover:text-white transition-all flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-yellow-400 ml-auto"
                aria-label="Tutup jendela modal"
              >
                <X size={18} />
              </button>
            </div>
            
            {/* Body */}
            <div className="p-7 overflow-y-auto space-y-4">
              {children}
            </div>
            
            {/* Footer */}
            {footer && (
              <div className="px-7 py-5 bg-black/30 border-t border-white/10 flex justify-end gap-3 rounded-b-3xl">
                {footer}
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
