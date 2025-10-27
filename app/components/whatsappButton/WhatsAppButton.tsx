"use client";

import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const Whatsapp = FaWhatsapp as React.FC<React.SVGProps<SVGSVGElement>>;

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/7073437393"
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed 
        bottom-10 
        right-6 
        z-[9999] 
        flex 
        items-center 
        justify-center 
        w-16 h-16 
        rounded-full 
        bg-[#25D366] 
        hover:scale-105 
        transition-transform 
        duration-300 
        shadow-[0_8px_20px_rgba(0,0,0,0.5)]
        whatsapp-float       
      "
    >
      <div className="relative w-12 h-12 flex items-center justify-center rounded-full bg-[#25D366]">
        <Whatsapp className="w-8 h-8 text-white whatsapp-pulse" />
        <span className="absolute w-full h-full rounded-full bg-[#25D366] opacity-30 animate-ping"></span>
      </div>
    </a>
  );
}
