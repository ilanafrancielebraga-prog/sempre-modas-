'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  CatalogProduct,
  SAMPLE_PRODUCTS,
  STORE_BRANDS,
  buildWhatsAppUrl,
  WHATSAPP_MESSAGES,
} from '@/lib/config';
import { MessageCircle, Info, Sparkles, SlidersHorizontal, RotateCcw } from 'lucide-react';

interface ProductShowcaseProps {
  activeCategory: 'todos' | 'feminino' | 'masculino' | 'infantil';
  onCategoryChange: (
    category: 'todos' | 'feminino' | 'masculino' | 'infantil'
  ) => void;
}

export const ProductShowcase: React.FC<ProductShowcaseProps> = ({
  activeCategory,
  onCategoryChange,
}) => {
  const [selectedBrand, setSelectedBrand] = useState<string>('todas');

  const categoryTabs = [
    { id: 'todos', label: 'Todas as Categorias' },
    { id: 'feminino', label: 'Feminino' },
    { id: 'masculino', label: 'Masculino' },
    { id: 'infantil', label: 'Infantil' },
  ] as const;

  // Filtro simultâneo por Categoria e Marca
  const filteredProducts = SAMPLE_PRODUCTS.filter((prod) => {
    const matchCategory =
      activeCategory === 'todos' || prod.category === activeCategory;
    const matchBrand =
      selectedBrand === 'todas' ||
      prod.brand.toLowerCase() === selectedBrand.toLowerCase();
    return matchCategory && matchBrand;
  });

  const resetFilters = () => {
    onCategoryChange('todos');
    setSelectedBrand('todas');
  };

  return (
    <section
      id="vitrine-produtos"
      className="py-16 md:py-24 bg-white border-b border-[#00B4B6]/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho da Seção */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-black bg-[#00B4B6] px-3 py-1 rounded-sm shadow-xs border border-[#009da0] mb-3">
            Catálogo Consultivo
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-neutral-900 tracking-tight">
            Encontre seu próximo par.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-600">
            Explore as categorias e consulte as opções disponíveis em nossas lojas em Taquara/RS.
          </p>
        </div>

        {/* Barra de Filtros Duplos: Categoria e Marca */}
        <div className="bg-[#f0fcfc] p-4 sm:p-5 rounded-lg border-2 border-[#00B4B6]/30 mb-8 space-y-4">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            {/* Filtro por Categoria */}
            <div className="flex flex-wrap items-center gap-1.5" role="tablist">
              <span className="text-xs font-bold text-neutral-700 mr-2 flex items-center gap-1">
                <SlidersHorizontal className="w-3.5 h-3.5 text-[#00898b]" />
                Categoria:
              </span>
              {categoryTabs.map((tab) => {
                const isActive = activeCategory === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => onCategoryChange(tab.id)}
                    className={`px-3.5 py-1.5 text-xs font-extrabold rounded-md transition-all ${
                      isActive
                        ? 'bg-[#00B4B6] text-black shadow-xs border border-[#00898b]'
                        : 'bg-white text-neutral-700 hover:text-black hover:bg-neutral-100 border border-neutral-200'
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {/* Filtro por Marca */}
            <div className="flex items-center gap-2 w-full md:w-auto">
              <label htmlFor="brand-filter" className="text-xs font-bold text-neutral-700 whitespace-nowrap">
                Marca:
              </label>
              <select
                id="brand-filter"
                value={selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.value)}
                className="w-full md:w-auto text-xs font-bold bg-white text-neutral-900 border border-[#00B4B6]/50 rounded-md py-1.5 px-3 focus:outline-hidden focus:ring-2 focus:ring-[#00B4B6]"
              >
                <option value="todas">Todas as Marcas ({STORE_BRANDS.length})</option>
                {STORE_BRANDS.map((b) => (
                  <option key={b.name} value={b.name}>
                    {b.name}
                  </option>
                ))}
              </select>

              {(activeCategory !== 'todos' || selectedBrand !== 'todas') && (
                <button
                  type="button"
                  onClick={resetFilters}
                  className="p-1.5 text-neutral-500 hover:text-neutral-900 rounded-md hover:bg-white text-xs flex items-center gap-1 shrink-0"
                  title="Limpar filtros"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Limpar</span>
                </button>
              )}
            </div>
          </div>

          <div className="pt-2 border-t border-[#00B4B6]/20 flex items-center justify-between text-xs text-neutral-600">
            <span>
              Exibindo <strong className="text-black font-extrabold">{filteredProducts.length}</strong> modelo(s) no catálogo consultivo
            </span>
            <span className="text-neutral-500 text-[11px]">
              Sem carrinho ou pagamentos online · Atendimento exclusivo via WhatsApp e lojas
            </span>
          </div>
        </div>

        {/* Aviso de Imagens Ilustrativas Conforme Instrução Oficial */}
        <div className="mb-10 p-4 sm:p-5 bg-[#eaf8f8] rounded-lg border-2 border-[#00B4B6]/40 flex items-start gap-3.5 shadow-2xs">
          <Info className="w-5 h-5 text-[#00898b] shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-neutral-800 leading-relaxed">
            <strong className="font-bold text-neutral-900">
              Imagens e Modelos Ilustrativos:
            </strong>{' '}
            As fotografias apresentadas são imagens ilustrativas de referência para representar o mix de marcas e categorias comercializadas pela Sempre Modas Calçados. A disponibilidade de numerações, cores e modelos do estoque atual é confirmada diretamente pelas nossas atendentes nas lojas físicas de Taquara ou pelo WhatsApp.
          </div>
        </div>

        {/* Grade de Produtos Consultiva */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-12 bg-neutral-50 rounded-lg border border-neutral-200">
            <p className="text-base font-bold text-neutral-700">
              Nenhum modelo ilustrativo encontrado para esta combinação de filtros.
            </p>
            <p className="mt-1 text-xs text-neutral-500">
              Consulte nosso time diretamente pelo WhatsApp para verificar modelos desta marca.
            </p>
            <button
              type="button"
              onClick={resetFilters}
              className="mt-4 px-4 py-2 text-xs font-bold text-black bg-[#00B4B6] hover:bg-[#009da0] rounded-md transition-colors"
            >
              Ver todos os calçados
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProducts.map((product) => {
              const productWhatsAppUrl = buildWhatsAppUrl(
                WHATSAPP_MESSAGES.product(product.name)
              );

              return (
                <div
                  key={product.id}
                  className="group flex flex-col bg-white rounded-lg border-2 border-neutral-200 hover:border-[#00B4B6] hover:shadow-lg transition-all duration-300 overflow-hidden"
                >
                  {/* Fotografia Ilustrativa com identificação transparente */}
                  <div className="relative aspect-[4/3] bg-neutral-100 overflow-hidden">
                    <Image
                      src={product.image}
                      alt={`${product.name} - ${product.brand} (Foto ilustrativa)`}
                      fill
                      referrerPolicy="no-referrer"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />

                    {/* Marca em Destaque */}
                    <div className="absolute top-3 left-3 bg-[#00B4B6] text-black px-2.5 py-1 rounded-sm text-[11px] font-black tracking-wider uppercase border border-[#009da0] shadow-xs">
                      {product.brand}
                    </div>

                    {/* Identificador Interno/Visual Ilustrativo Obrigatório */}
                    <div className="absolute top-3 right-3 bg-black/75 text-white backdrop-blur-xs px-2 py-0.5 rounded-sm text-[10px] font-medium tracking-wide">
                      Ilustrativo
                    </div>
                  </div>

                  {/* Informações do Produto Consultivo */}
                  <div className="p-5 flex flex-col flex-grow justify-between">
                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-wider text-[#00898b]">
                        Linha {product.category}
                      </div>

                      <h3 className="mt-1 text-base font-bold text-neutral-900 group-hover:text-[#00898b] transition-colors line-clamp-2">
                        {product.name}
                      </h3>

                      <p className="mt-2 text-xs text-neutral-600 leading-relaxed line-clamp-2">
                        {product.description}
                      </p>

                      {/* Dados cadastrados: Cores e Numeração */}
                      <div className="mt-3.5 pt-3 border-t border-neutral-100 text-xs text-neutral-600 space-y-1">
                        {product.color && (
                          <div>
                            <span className="font-semibold text-neutral-800">Cores de referência:</span>{' '}
                            {product.color}
                          </div>
                        )}
                        {product.availableSizes && (
                          <div>
                            <span className="font-semibold text-neutral-800">Numeração:</span>{' '}
                            {product.availableSizes}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Botão Oficial: Consultar pelo WhatsApp (Sem carrinho de compras) */}
                    <div className="pt-5">
                      <a
                        href={productWhatsAppUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 text-xs font-black tracking-wider uppercase text-black bg-[#00B4B6] hover:bg-[#009da0] rounded-md transition-all active:scale-[0.98] shadow-xs border border-[#00898b]/40"
                        aria-label={`Consultar ${product.name} pelo WhatsApp`}
                      >
                        <MessageCircle className="w-4 h-4 fill-black text-[#00B4B6]" />
                        <span>Consultar pelo WhatsApp</span>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Chamada para consulta geral com mensagem padrão oficial */}
        <div className="mt-12 text-center bg-[#eefafb] p-8 rounded-lg border-2 border-[#00B4B6]/40 shadow-xs">
          <p className="text-base font-bold text-neutral-900">
            Deseja consultar outro modelo ou marca não exibido aqui?
          </p>
          <p className="mt-1.5 text-xs sm:text-sm text-neutral-600">
            Temos atendimento ágil pelo WhatsApp para ambas as lojas no Centro de Taquara/RS.
          </p>
          <div className="mt-5">
            <a
              href={buildWhatsAppUrl(WHATSAPP_MESSAGES.general)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 text-xs sm:text-sm font-black tracking-wider uppercase text-black bg-[#00B4B6] hover:bg-[#009da0] rounded-md transition-all shadow-md border border-[#00898b]"
            >
              <MessageCircle className="w-4 h-4 fill-black text-[#00B4B6]" />
              <span>CONSULTAR MODELOS DISPONÍVEIS NO WHATSAPP</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
