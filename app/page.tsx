'use client';

import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { CategoriesSection } from '@/components/CategoriesSection';
import { BrandsSection } from '@/components/BrandsSection';
import { ProductShowcase } from '@/components/ProductShowcase';
import { ShoppingExperience } from '@/components/ShoppingExperience';
import { StoresSection } from '@/components/StoresSection';
import { WhatsAppCtaSection } from '@/components/WhatsAppCtaSection';
import { Footer } from '@/components/Footer';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState<
    'todos' | 'feminino' | 'masculino' | 'infantil'
  >('todos');

  const handleCategorySelection = (
    category: 'feminino' | 'masculino' | 'infantil'
  ) => {
    setSelectedCategory(category);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white text-neutral-900">
      {/* SEÇÃO 1: Cabeçalho com Logo, Navegação e WhatsApp */}
      <Header />

      <main className="flex-grow">
        {/* SEÇÃO 2: Hero Principal */}
        <Hero />

        {/* SEÇÃO 3: Categorias de Calçados (Feminino, Masculino, Infantil) */}
        <CategoriesSection onSelectCategory={handleCategorySelection} />

        {/* SEÇÃO 4: Marcas que Você Encontra Aqui */}
        <BrandsSection />

        {/* SEÇÃO 5: Vitrine de Produtos com Filtros e Consulta WhatsApp */}
        <ProductShowcase
          activeCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        {/* SEÇÃO 6: Experiência de Compra (Variedade, Marcas, Atendimento) */}
        <ShoppingExperience />

        {/* SEÇÃO 7: Nossas Lojas (Matriz e Filial em Taquara/RS) */}
        <StoresSection />

        {/* SEÇÃO 8: Chamada Final para o WhatsApp */}
        <WhatsAppCtaSection />
      </main>

      {/* SEÇÃO 9: Rodapé Institucional */}
      <Footer />

      {/* Botão Flutuante Permanente de WhatsApp */}
      <FloatingWhatsApp />
    </div>
  );
}
