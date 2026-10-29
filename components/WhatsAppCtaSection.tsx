'use client';

import React from 'react';
import { buildWhatsAppUrl, WHATSAPP_MESSAGES } from '@/lib/config';
import { MessageCircle, ArrowRight } from 'lucide-react';

export const WhatsAppCtaSection: React.FC = () => {
  // Mensagem oficial exigida:
  // "Olá! Conheci a Sempre Modas Calçados pelo site e gostaria de conhecer os modelos disponíveis."
  const whatsappActionUrl = buildWhatsAppUrl(WHATSAPP_MESSAGES.general);

  return (
    <section
      id="contato"
      className="py-16 md:py-24 bg-[#00B4B6] text-black relative overflow-hidden border-t-2 border-b-2 border-[#009da0]"
      style={{ backgroundColor: '#00B4B6' }}
    >
      {/* Detalhe de iluminação sutil */}
      <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-white/20 pointer-events-none blur-2xl" />
      <div className="absolute -left-20 -top-20 w-80 h-80 rounded-full bg-black/10 pointer-events-none blur-2xl" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Ícone com Alto Contraste */}
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-black text-[#00B4B6] shadow-lg mb-6 ring-4 ring-white/30">
          <MessageCircle className="w-8 h-8 fill-[#00B4B6]" />
        </div>

        {/* Título Obrigatório */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-black tracking-tight leading-tight">
          Já sabe qual é o seu próximo par?
        </h2>

        {/* Subtítulo Obrigatório */}
        <p className="mt-4 text-base sm:text-lg md:text-xl font-bold text-neutral-900 max-w-2xl mx-auto leading-relaxed">
          Fale com a Sempre Modas Calçados e consulte as opções disponíveis.
        </p>

        {/* Botão Principal Obrigatório em Preto de Alto Contraste com Ícone Turquesa */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={whatsappActionUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 text-sm sm:text-base font-black tracking-wider uppercase text-white bg-black hover:bg-neutral-900 active:scale-[0.98] rounded-md shadow-xl transition-all duration-200 border-2 border-black"
            aria-label="Chamar a Sempre Modas Calçados no WhatsApp"
          >
            <MessageCircle className="w-5 h-5 text-[#00B4B6] fill-[#00B4B6]" />
            <span>CHAMAR NO WHATSAPP</span>
            <ArrowRight className="w-4 h-4 text-[#00B4B6]" />
          </a>
        </div>

        <p className="mt-5 text-xs font-black text-black/80 uppercase tracking-wider">
          Atendimento para Taquara e Vale do Paranhana · Resposta ágil de nossa equipe
        </p>
      </div>
    </section>
  );
};
