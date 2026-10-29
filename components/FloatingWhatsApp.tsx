'use client';

import React from 'react';
import { buildWhatsAppUrl, WHATSAPP_MESSAGES } from '@/lib/config';
import { MessageCircle } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const whatsappUrl = buildWhatsAppUrl(WHATSAPP_MESSAGES.general);

  return (
    <aside
      aria-label="Atendimento rápido pelo WhatsApp"
      className="fixed bottom-5 right-5 z-40 group"
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2.5 px-4 py-3.5 bg-[#00B4B6] hover:bg-[#009da0] text-black font-black text-xs uppercase tracking-wider rounded-full shadow-2xl hover:shadow-[#00B4B6]/50 transition-all duration-200 active:scale-95 border-2 border-black/80 ring-4 ring-[#00B4B6]/30"
        aria-label="Abrir WhatsApp da Sempre Modas Calçados"
      >
        <div className="w-6 h-6 flex items-center justify-center text-black">
          <MessageCircle className="w-6 h-6 fill-black stroke-black" />
        </div>
        <span className="hidden sm:inline font-black text-black pr-1">
          Atendimento WhatsApp
        </span>
      </a>
    </aside>
  );
};
