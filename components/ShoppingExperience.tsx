'use client';

import React from 'react';
import { Layers, Tag, Headphones } from 'lucide-react';

export const ShoppingExperience: React.FC = () => {
  const differentials = [
    {
      icon: Layers,
      title: 'VARIEDADE',
      description: 'Calçados femininos, masculinos e infantis em um só lugar.',
    },
    {
      icon: Tag,
      title: 'MARCAS',
      description: 'Conheça as marcas presentes em nosso mix de produtos.',
    },
    {
      icon: Headphones,
      title: 'ATENDIMENTO',
      description:
        'Entre em contato para consultar modelos, numerações e disponibilidade.',
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-white via-[#f0fcfc] to-[#e6fafb] border-b border-[#00B4B6]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título Mandatório */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-black bg-[#00B4B6] px-3 py-1 rounded-sm shadow-xs border border-[#009da0] mb-3">
            Experiência Sempre Modas
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-neutral-900 tracking-tight">
            Seu próximo par está mais perto do que você imagina.
          </h2>
        </div>

        {/* Três Diferenciais com Foco em Turquesa */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {differentials.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.title}
                className="bg-white p-7 sm:p-8 rounded-lg border-2 border-[#00B4B6]/40 hover:border-[#00B4B6] hover:shadow-md transition-all duration-200 flex flex-col items-start"
              >
                {/* Ícone com Fundo Turquesa Vibrante */}
                <div className="w-13 h-13 rounded-md bg-[#00B4B6] text-black flex items-center justify-center mb-5 shrink-0 shadow-xs border border-[#009da0]">
                  <IconComponent className="w-6 h-6 stroke-[2.2]" />
                </div>

                <div className="text-xs font-black text-[#00898b] uppercase tracking-widest mb-1">
                  0{idx + 1} · Diferencial
                </div>

                <h3 className="text-lg font-extrabold text-neutral-900 tracking-tight">
                  {item.title}
                </h3>

                <p className="mt-2.5 text-sm text-neutral-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
