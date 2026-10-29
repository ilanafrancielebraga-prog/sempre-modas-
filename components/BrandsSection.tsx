'use client';

import React from 'react';
import { STORE_BRANDS, buildWhatsAppUrl, WHATSAPP_MESSAGES } from '@/lib/config';
import { MessageCircle } from 'lucide-react';

export const BrandsSection: React.FC = () => {
  // Mensagem oficial exigida:
  // "Olá! Gostaria de consultar os modelos disponíveis das marcas que vocês trabalham."
  const whatsappBrandsUrl = buildWhatsAppUrl(WHATSAPP_MESSAGES.brandsMix);

  return (
    <section id="marcas" className="py-16 md:py-20 bg-gradient-to-b from-[#e8f7f7] to-[#f4fcfc] border-b border-[#00B4B6]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título e Subtítulo Obrigatórios */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-black bg-[#00B4B6] px-3 py-1 rounded-sm shadow-xs border border-[#009da0] mb-3">
            Mix de Calçados
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-neutral-900 tracking-tight">
            Marcas que combinam com você.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-700">
            Conheça algumas das marcas presentes em nosso mix de calçados em Taquara/RS.
          </p>
        </div>

        {/* Grade de Marcas Oficiais */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 mb-12">
          {STORE_BRANDS.map((brand) => {
            const brandWhatsappUrl = buildWhatsAppUrl(
              WHATSAPP_MESSAGES.brandSpecific(brand.name)
            );

            return (
              <a
                key={brand.name}
                href={brandWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-5 sm:p-6 bg-white rounded-lg border-2 border-[#00B4B6]/30 hover:border-[#00B4B6] hover:shadow-md transition-all duration-200 flex flex-col items-center justify-center text-center focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#00B4B6]"
                title={`Consultar modelos da marca ${brand.name}`}
              >
                {/* Nome da Marca em tipografia neutra contemporânea */}
                <span className="text-base sm:text-lg font-black tracking-widest text-neutral-900 group-hover:text-[#00898b] transition-colors">
                  {brand.name}
                </span>

                <span className="mt-2 text-[11px] font-semibold text-[#00898b] group-hover:underline transition-colors">
                  Consultar modelos →
                </span>
              </a>
            );
          })}
        </div>

        {/* Nota Institucional Transparente */}
        <div className="max-w-2xl mx-auto text-center text-xs text-neutral-600 mb-8">
          <p>
            As marcas indicadas compõem nosso sortimento de produtos em Taquara. A disponibilidade específica de modelos e numerações varia conforme o estoque das unidades.
          </p>
        </div>

        {/* Botão de Ação Obrigatório */}
        <div className="flex justify-center">
          <a
            href={whatsappBrandsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-4 text-xs sm:text-sm font-black tracking-wider uppercase text-black bg-[#00B4B6] hover:bg-[#009da0] active:scale-[0.98] rounded-md transition-all shadow-md border border-[#00898b]"
          >
            <MessageCircle className="w-5 h-5 fill-black text-[#00B4B6]" />
            <span>CONSULTE OS MODELOS DISPONÍVEIS</span>
          </a>
        </div>
      </div>
    </section>
  );
};
