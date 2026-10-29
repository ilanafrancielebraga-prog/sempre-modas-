'use client';

import React from 'react';
import Image from 'next/image';
import { INSTAGRAM_URL, INSTAGRAM_HANDLE } from '@/lib/config';
import { Instagram, ArrowUpRight, Sparkles } from 'lucide-react';

export const InstagramSection: React.FC = () => {
  // Composição visual elegante com fotografias das três linhas (feminino, masculino e infantil)
  const visualCards = [
    {
      id: 'insta-fem',
      title: 'Linha Feminina',
      tag: 'Inspirações & Tendências',
      image: '/images/cat_feminino_footwear_1793313978261.jpg',
      alt: 'Calçados femininos Sempre Modas Calçados no Instagram',
    },
    {
      id: 'insta-fam',
      title: 'Coleção para a Família',
      tag: 'Novidades da Semana',
      image: '/images/hero_footwear_collection_1793313965763.jpg',
      alt: 'Novidades de calçados para toda a família no Instagram',
    },
    {
      id: 'insta-masc',
      title: 'Linha Masculina',
      tag: 'Casual & Social',
      image: '/images/cat_masculino_footwear_1793313979038.jpg',
      alt: 'Calçados masculinos Sempre Modas Calçados no Instagram',
    },
    {
      id: 'insta-inf',
      title: 'Linha Infantil',
      tag: 'Conforto & Alegria',
      image: '/images/cat_infantil_footwear_1793313979340.jpg',
      alt: 'Calçados infantis Sempre Modas Calçados no Instagram',
    },
  ];

  return (
    <section
      id="instagram"
      className="py-16 md:py-24 bg-gradient-to-b from-[#f2fcfc] via-white to-[#eefafb] border-b border-[#00B4B6]/25 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Cabeçalho da Seção com Especificações Oficiais */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          {/* Badge do Instagram com o @ oficial */}
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-black bg-[#00B4B6] hover:bg-[#009da0] px-4 py-1.5 rounded-full shadow-xs border border-[#009da0] mb-4 transition-transform active:scale-95"
            title="Acessar perfil no Instagram"
          >
            <Instagram className="w-3.5 h-3.5 stroke-[2.5]" />
            <span>{INSTAGRAM_HANDLE}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Título Principal Mandatório */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-neutral-900 tracking-tight">
            Fique por dentro das novidades!
          </h2>

          {/* Subtítulo Mandatório */}
          <p className="mt-3.5 text-base sm:text-lg text-neutral-700 leading-relaxed max-w-2xl mx-auto">
            Acompanhe a Sempre Modas Calçados no Instagram e descubra inspirações, novidades e modelos para toda a família.
          </p>
        </div>

        {/* Galeria Visual Editorial das Coleções */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-12">
          {visualCards.map((card) => (
            <a
              key={card.id}
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-lg overflow-hidden border-2 border-[#00B4B6]/30 hover:border-[#00B4B6] bg-neutral-100 aspect-square shadow-xs hover:shadow-md transition-all duration-300"
              aria-label={`Ver ${card.title} no Instagram da Sempre Modas Calçados`}
            >
              <Image
                src={card.image}
                alt={card.alt}
                fill
                referrerPolicy="no-referrer"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent opacity-85 group-hover:opacity-90 transition-opacity" />

              {/* Informações sobrepostas sem simular falsos comentários/likes */}
              <div className="absolute inset-0 p-4 flex flex-col justify-between text-white">
                <div className="self-end opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="w-8 h-8 rounded-full bg-[#00B4B6] text-black flex items-center justify-center shadow-md">
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>

                <div>
                  <span className="text-[10px] font-bold tracking-wider uppercase text-[#00B4B6] bg-black/70 px-2 py-0.5 rounded-xs inline-block mb-1">
                    {card.tag}
                  </span>
                  <h3 className="text-xs sm:text-sm font-extrabold text-white leading-tight">
                    {card.title}
                  </h3>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Bloco de Destaque com o Botão Oficial de Ação */}
        <div className="max-w-2xl mx-auto text-center bg-white p-6 sm:p-8 rounded-xl border-2 border-[#00B4B6] shadow-sm">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#00B4B6] text-black mb-4 shadow-xs">
            <Instagram className="w-6 h-6 stroke-[2]" />
          </div>

          <h3 className="text-lg sm:text-xl font-bold text-neutral-900">
            Acompanhe nosso perfil oficial
          </h3>
          <p className="mt-1.5 text-xs sm:text-sm text-neutral-600">
            Fotos de lançamentos, dicas de calçados confortáveis e atendimento diário para clientes de Taquara e região.
          </p>

          <div className="mt-6">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 text-xs sm:text-sm font-black tracking-wider uppercase text-black bg-[#00B4B6] hover:bg-[#009da0] active:scale-[0.98] rounded-md transition-all shadow-md border border-[#00898b]"
              aria-label="Seguir a Sempre Modas Calçados no Instagram"
            >
              <Instagram className="w-4 h-4 stroke-[2.2]" />
              <span>SIGA NOSSO INSTAGRAM</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          <p className="mt-3 text-xs font-semibold text-neutral-500">
            {INSTAGRAM_HANDLE} · Conteúdo oficial Sempre Modas Calçados
          </p>
        </div>
      </div>
    </section>
  );
};
