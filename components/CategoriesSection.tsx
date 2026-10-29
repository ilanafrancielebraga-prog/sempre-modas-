'use client';

import React from 'react';
import Image from 'next/image';
import { buildWhatsAppUrl, WHATSAPP_MESSAGES } from '@/lib/config';
import { ArrowRight, MessageCircle } from 'lucide-react';

interface CategoriesSectionProps {
  onSelectCategory: (category: 'feminino' | 'masculino' | 'infantil') => void;
}

export const CategoriesSection: React.FC<CategoriesSectionProps> = ({
  onSelectCategory,
}) => {
  const categories = [
    {
      id: 'feminino' as const,
      anchorId: 'feminino',
      title: 'Calçados femininos',
      description:
        'Opções para acompanhar seu estilo em diferentes momentos do dia.',
      image: '/images/cat_feminino_footwear_1793313978261.jpg',
      alt: 'Coleção de calçados femininos na Sempre Modas Calçados (Foto ilustrativa)',
      buttonText: 'VER LINHA FEMININA',
      whatsappUrl: buildWhatsAppUrl(WHATSAPP_MESSAGES.feminino),
      whatsappText: 'Consultar femininos no WhatsApp',
    },
    {
      id: 'masculino' as const,
      anchorId: 'masculino',
      title: 'Calçados masculinos',
      description:
        'Modelos casuais e sociais para diferentes estilos e ocasiões.',
      image: '/images/cat_masculino_footwear_1793313979038.jpg',
      alt: 'Coleção de calçados masculinos na Sempre Modas Calçados (Foto ilustrativa)',
      buttonText: 'VER LINHA MASCULINA',
      whatsappUrl: buildWhatsAppUrl(WHATSAPP_MESSAGES.masculino),
      whatsappText: 'Consultar masculinos no WhatsApp',
    },
    {
      id: 'infantil' as const,
      anchorId: 'infantil',
      title: 'Calçados infantis',
      description:
        'Opções para acompanhar os pequenos em suas descobertas.',
      image: '/images/cat_infantil_footwear_1793313979340.jpg',
      alt: 'Coleção de calçados infantis na Sempre Modas Calçados (Foto ilustrativa)',
      buttonText: 'VER LINHA INFANTIL',
      whatsappUrl: buildWhatsAppUrl(WHATSAPP_MESSAGES.infantil),
      whatsappText: 'Consultar infantis no WhatsApp',
    },
  ];

  const handleCategoryClick = (
    categoryId: 'feminino' | 'masculino' | 'infantil'
  ) => {
    onSelectCategory(categoryId);
    const vitrineEl = document.getElementById('vitrine-produtos');
    if (vitrineEl) {
      vitrineEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="categorias" className="py-16 md:py-24 bg-[#f2fcfc] border-b border-[#00B4B6]/25">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho da Seção */}
        <div className="max-w-2xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-black bg-[#00B4B6] px-3 py-1 rounded-sm shadow-xs border border-[#009da0] mb-3">
            Linhas Principais
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-neutral-900 tracking-tight">
            Categorias de Calçados
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-600">
            Encontre o modelo perfeito com a variedade e a dedicação que só a Sempre Modas Calçados oferece em Taquara.
          </p>
        </div>

        {/* Grade com os 3 Cartões Visuais */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat) => (
            <div
              key={cat.id}
              id={cat.anchorId}
              className="group flex flex-col bg-white rounded-lg overflow-hidden border-2 border-[#00B4B6]/40 hover:border-[#00B4B6] transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              {/* Fotografia Ilustrativa */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-200">
                <Image
                  src={cat.image}
                  alt={cat.alt}
                  fill
                  referrerPolicy="no-referrer"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-90 group-hover:opacity-75 transition-opacity" />

                {/* Badge Oficial */}
                <div className="absolute bottom-3 left-4 text-black text-xs font-black tracking-wide uppercase bg-[#00B4B6] px-3 py-1.5 rounded-sm shadow-md border border-[#009da0]">
                  {cat.title}
                </div>

                <div className="absolute top-3 right-3 bg-black/75 text-white backdrop-blur-xs px-2 py-0.5 rounded-sm text-[10px] font-medium tracking-wide">
                  Ilustrativo
                </div>
              </div>

              {/* Informações Textuais e Botões */}
              <div className="p-6 flex flex-col flex-grow justify-between bg-white">
                <div>
                  <h3 className="text-xl font-extrabold text-neutral-900 group-hover:text-[#00898b] transition-colors">
                    {cat.title}
                  </h3>
                  <p className="mt-2 text-sm text-neutral-600 leading-relaxed min-h-[44px]">
                    {cat.description}
                  </p>
                </div>

                <div className="pt-6 space-y-2.5">
                  {/* Botão de Ver no Catálogo */}
                  <button
                    type="button"
                    onClick={() => handleCategoryClick(cat.id)}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-black tracking-wider uppercase text-black bg-[#00B4B6] hover:bg-[#009da0] active:scale-[0.98] rounded-md transition-all duration-200 shadow-xs border border-[#00898b]/40"
                    aria-label={`${cat.buttonText} - Ver produtos no catálogo`}
                  >
                    <span>{cat.buttonText}</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>

                  {/* Consulta Direta pelo WhatsApp com mensagem exata */}
                  <a
                    href={cat.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 text-[11px] font-bold text-neutral-700 hover:text-black bg-neutral-100 hover:bg-[#00B4B6]/20 rounded-md transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-[#00898b]" />
                    <span>{cat.whatsappText}</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
