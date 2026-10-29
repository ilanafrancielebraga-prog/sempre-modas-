'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Logo } from './Logo';
import { buildWhatsAppUrl, WHATSAPP_MESSAGES, STORE_CITY, STORE_PHONE_LOCAL } from '@/lib/config';
import { Menu, X, MessageCircle, MapPin, Phone } from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Início', href: '#inicio' },
    { label: 'Feminino', href: '#feminino' },
    { label: 'Masculino', href: '#masculino' },
    { label: 'Infantil', href: '#infantil' },
    { label: 'Marcas', href: '#marcas' },
    { label: 'Nossas lojas', href: '#nossas-lojas' },
    { label: 'Contato', href: '#contato' },
  ];

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const whatsappHeroUrl = buildWhatsAppUrl(WHATSAPP_MESSAGES.general);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-200">
      {/* Faixa Superior Turquesa Institucional */}
      <div className="bg-[#00B4B6] text-black text-[11px] sm:text-xs font-bold py-1.5 px-4 shadow-xs border-b border-[#009da0]">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 truncate">
            <span className="w-1.5 h-1.5 rounded-full bg-black shrink-0" />
            <span className="truncate">
              {STORE_CITY}/RS · Duas lojas no Centro: Matriz e Filial
            </span>
          </div>
          <div className="hidden md:flex items-center gap-4 shrink-0 text-black">
            <a
              href="#nossas-lojas"
              onClick={(e) => handleNavClick(e, '#nossas-lojas')}
              className="hover:underline flex items-center gap-1"
            >
              <MapPin className="w-3 h-3 text-black" />
              <span>Ver endereços</span>
            </a>
            <span className="text-black/40">|</span>
            <a
              href={whatsappHeroUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline flex items-center gap-1"
            >
              <Phone className="w-3 h-3 text-black" />
              <span>WhatsApp: (51) {STORE_PHONE_LOCAL}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Barra de Navegação Principal */}
      <div
        className={`transition-all duration-200 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-xs border-b-2 border-[#00B4B6] py-2'
            : 'bg-white/95 backdrop-blur-xs border-b border-[#00B4B6]/30 py-3'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-6">
            {/* ZONA 1: Logo Oficial com Fundo Turquesa */}
            <Link
              href="#inicio"
              onClick={(e) => handleNavClick(e, '#inicio')}
              className="flex items-center gap-2 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#00B4B6]"
              aria-label="Página inicial Sempre Modas Calçados"
            >
              <Logo size="md" />
            </Link>

            {/* ZONA 2: Menu Desktop */}
            <nav
              className="hidden lg:flex items-center gap-7 text-sm font-semibold text-neutral-800"
              aria-label="Navegação principal"
            >
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="whitespace-nowrap transition-colors hover:text-[#00898b] relative py-1 hover:border-b-2 hover:border-[#00B4B6]"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* ZONA 3: Botão de Ação WhatsApp em Turquesa Oficial */}
            <div className="flex items-center gap-3">
              <a
                href={whatsappHeroUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-black tracking-wider uppercase text-black bg-[#00B4B6] hover:bg-[#009da0] active:scale-[0.98] rounded-md transition-all shadow-xs whitespace-nowrap border border-[#00898b]/40"
                aria-label="Falar com a Sempre Modas Calçados no WhatsApp"
              >
                <MessageCircle className="w-4 h-4 fill-black text-[#00B4B6]" />
                <span>WHATSAPP</span>
              </a>

              {/* Botão Mobile */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-neutral-800 hover:text-[#00898b] hover:bg-[#00B4B6]/10 rounded-md transition-colors"
                aria-expanded={mobileMenuOpen}
                aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Menu Mobile */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b-2 border-[#00B4B6] px-5 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-2 duration-150">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="py-2.5 text-base font-bold text-neutral-900 hover:text-[#00898b] border-b border-neutral-100 last:border-none transition-colors"
              >
                {item.label}
              </a>
            ))}

            <div className="pt-3 flex flex-col gap-2.5">
              <a
                href={whatsappHeroUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 text-sm font-black uppercase text-black bg-[#00B4B6] hover:bg-[#009da0] rounded-md shadow-xs transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-black text-[#00B4B6]" />
                <span>Atendimento WhatsApp</span>
              </a>

              <a
                href="#nossas-lojas"
                onClick={(e) => handleNavClick(e, '#nossas-lojas')}
                className="flex items-center justify-center gap-2 w-full py-2.5 text-xs font-bold text-neutral-800 bg-[#00B4B6]/10 hover:bg-[#00B4B6]/20 border border-[#00B4B6]/30 rounded-md transition-colors"
              >
                <MapPin className="w-4 h-4 text-[#00898b]" />
                <span>Ver Lojas em Taquara/RS</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
