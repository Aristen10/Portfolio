"use client";
import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({
  children,
  isOpen,
  onClose,
  title,
}) => {
  if (!isOpen) return null;

  return (
   
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-5  xs:p-10 "
    >
    
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-3xl max-h-4/5 h-full overflow-hidden rounded-2xl shadow-2xl bg-[#14121F] animate-fade-in"
      >
      
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
          <h3 className="text-xl font-bold text-white">
            {title}
          </h3>

          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition"
            aria-label="Close modal"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

     
        <div className="p-6 overflow-y-auto max-h-[85vh]">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
