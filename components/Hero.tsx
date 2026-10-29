'use client';

import React from 'react';
import Image from 'next/image';
import { buildWhatsAppUrl, WHATSAPP_MESSAGES } from '@/lib/config';
import { MessageCircle, ArrowDown } from 'lucide-react';

export const Hero: React.FC = () => {
  const whatsappUrl = buildWhatsAppUrl(WHATSAPP_MESSAGES.general);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="inicio"
      className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-[#e3f8f9] via-[#f0fcfc] to-white overflow-hidden border-b border-[#00B4B6]/20"
    >
      {/* Elementos visuais turquesa sutis de fundo */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#00B4B6]/15 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#00B4B6]/10 rounded-full blur-2xl pointer-events-none -ml-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Coluna de Texto e Chamadas */}
          <div className="lg:col-span-6 flex flex-col items-start space-y-6">
            {/* Indicador de presença local com selo turquesa */}
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-black bg-[#00B4B6] px-3 py-1.5 rounded-sm shadow-xs border border-[#009da0]">
              <span className="w-2 h-2 rounded-full bg-white" />
              <span>Taquara · Rio Grande do Sul</span>
            </div>

            {/* Título Principal Mandatório */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-black text-neutral-900 tracking-tight leading-[1.12] text-balance">
              SEMPRE TEM UM CALÇADO PARA VOCÊ.
            </h1>

            {/* Subtítulo Mandatório */}
            <p className="text-base sm:text-lg text-neutral-700 leading-relaxed max-w-xl font-normal">
              Estilo, conforto e variedade para toda a família. Encontre seu
              próximo par na Sempre Modas Calçados.
            </p>

            {/* Três pilares de categoria em destaque turquesa */}
            <div className="pt-2 flex flex-wrap items-center gap-2 text-xs font-bold">
              <span className="inline-flex items-center gap-1.5 bg-white text-neutral-900 border border-[#00B4B6]/40 px-3 py-1 rounded-sm shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-[#00B4B6]" />
                Linha Feminina
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white text-neutral-900 border border-[#00B4B6]/40 px-3 py-1 rounded-sm shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-[#00B4B6]" />
                Linha Masculina
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white text-neutral-900 border border-[#00B4B6]/40 px-3 py-1 rounded-sm shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-[#00B4B6]" />
                Linha Infantil
              </span>
            </div>

            {/* Botões Mandatórios com forte presença turquesa */}
            <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto">
              <button
                type="button"
                onClick={() => scrollToSection('categorias')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-black tracking-wider uppercase text-black bg-[#00B4B6] hover:bg-[#009da0] active:scale-[0.98] rounded-md transition-all shadow-sm border border-[#00898b]"
              >
                <span>ENCONTRE SEU PRÓXIMO PAR</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-black tracking-wider uppercase text-white bg-black hover:bg-neutral-800 active:scale-[0.98] rounded-md transition-all shadow-sm"
              >
                <MessageCircle className="w-4 h-4 text-[#00B4B6]" />
                <span>FALE CONOSCO</span>
              </a>
            </div>

            {/* Informação Institucional Taquara */}
            <div className="pt-2 text-xs font-medium text-neutral-600 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00B4B6]" />
              <span>Duas lojas no Centro de Taquara/RS: Matriz e Filial</span>
            </div>
          </div>

          {/* Coluna da Imagem Editorial com moldura turquesa */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-lg overflow-hidden border-2 border-[#00B4B6] shadow-xl bg-neutral-100 aspect-[16/10] sm:aspect-[16/9] lg:aspect-[4/3] ring-4 ring-[#00B4B6]/20">
              <Image
                src="/images/hero_footwear_collection_1793313965763.jpg"
                alt="Coleção de calçados femininos, masculinos e infantis na Sempre Modas Calçados"
                fill
                priority
                referrerPolicy="no-referrer"
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

              {/* Tag com Fundo Turquesa */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-black text-xs font-black">
                <span className="bg-[#00B4B6] px-3 py-1.5 rounded-sm shadow-md">
                  Variedade para Toda a Família
                </span>
                <span className="bg-black text-white px-2.5 py-1 rounded-sm shadow-md text-[11px]">
                  Taquara / RS
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
