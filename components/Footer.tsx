'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Logo } from './Logo';
import {
  STORE_LOCATIONS,
  buildWhatsAppUrl,
  WHATSAPP_MESSAGES,
  STORE_CITY,
  STORE_STATE,
  INSTAGRAM_URL,
  INSTAGRAM_HANDLE,
  STORE_PHONE_DISPLAY,
} from '@/lib/config';
import { MessageCircle, MapPin, Navigation, ShieldCheck, X, Instagram, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);
  const [cookiesModalOpen, setCookiesModalOpen] = useState(false);

  const currentYear = new Date().getFullYear();
  const whatsappUrl = buildWhatsAppUrl(WHATSAPP_MESSAGES.general);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#052123] text-neutral-200 pt-16 pb-12 border-t-4 border-[#00B4B6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-[#00B4B6]/25">
          {/* Coluna 1: Logo & Apresentação Institucional */}
          <div className="lg:col-span-4 flex flex-col items-start space-y-4">
            <Link
              href="#inicio"
              onClick={(e) => handleNavClick(e, '#inicio')}
              className="inline-block"
              aria-label="Voltar ao início"
            >
              <Logo size="md" />
            </Link>

            <p className="text-sm text-neutral-300 leading-relaxed pr-4">
              Comércio varejista de calçados femininos, masculinos e infantis. Variedade, estilo e conforto para toda a família em {STORE_CITY}, {STORE_STATE}.
            </p>

            {/* Canais Oficiais de Contato & Redes Sociais */}
            <div className="pt-2 flex flex-col gap-3 w-full sm:w-auto">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-black tracking-wider uppercase text-black bg-[#00B4B6] hover:bg-[#009da0] rounded-md transition-colors shadow-sm"
              >
                <MessageCircle className="w-4 h-4 fill-black text-[#00B4B6]" />
                <span>WhatsApp: {STORE_PHONE_DISPLAY}</span>
              </a>

              {/* Área de Redes Sociais Dedicada: Instagram Oficial */}
              <div className="p-3 bg-[#0a3134] rounded-md border border-[#00B4B6]/40 flex flex-col gap-1.5">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#00B4B6]">
                  Rede Social Oficial
                </span>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-white hover:text-[#00B4B6] transition-colors group"
                  aria-label="Abrir Instagram oficial @sempremodas.store em nova aba"
                  title="Acessar https://www.instagram.com/sempremodas.store/"
                >
                  <div className="w-6 h-6 rounded-sm bg-[#00B4B6] text-black flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Instagram className="w-4 h-4 stroke-[2]" />
                  </div>
                  <span className="font-extrabold">{INSTAGRAM_HANDLE}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-neutral-400 group-hover:text-[#00B4B6] transition-colors ml-auto" />
                </a>
              </div>
            </div>
          </div>

          {/* Coluna 2: Navegação & Categorias */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-black text-[#00B4B6] uppercase tracking-wider mb-4">
              Navegação
            </h4>
            <ul className="space-y-2.5 text-sm font-medium text-neutral-300">
              <li>
                <a
                  href="#feminino"
                  onClick={(e) => handleNavClick(e, '#feminino')}
                  className="hover:text-[#00B4B6] transition-colors"
                >
                  Calçados Femininos
                </a>
              </li>
              <li>
                <a
                  href="#masculino"
                  onClick={(e) => handleNavClick(e, '#masculino')}
                  className="hover:text-[#00B4B6] transition-colors"
                >
                  Calçados Masculinos
                </a>
              </li>
              <li>
                <a
                  href="#infantil"
                  onClick={(e) => handleNavClick(e, '#infantil')}
                  className="hover:text-[#00B4B6] transition-colors"
                >
                  Calçados Infantis
                </a>
              </li>
              <li>
                <a
                  href="#marcas"
                  onClick={(e) => handleNavClick(e, '#marcas')}
                  className="hover:text-[#00B4B6] transition-colors"
                >
                  Marcas
                </a>
              </li>
              <li>
                <a
                  href="#vitrine-produtos"
                  onClick={(e) => handleNavClick(e, '#vitrine-produtos')}
                  className="hover:text-[#00B4B6] transition-colors"
                >
                  Catálogo Consultivo
                </a>
              </li>
              <li>
                <a
                  href="#instagram"
                  onClick={(e) => handleNavClick(e, '#instagram')}
                  className="hover:text-[#00B4B6] transition-colors flex items-center gap-1.5"
                >
                  <Instagram className="w-3.5 h-3.5 text-[#00B4B6]" />
                  <span>Siga no Instagram</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Nossas Lojas (Matriz e Filial) */}
          <div className="lg:col-span-6">
            <h4 className="text-xs font-black text-[#00B4B6] uppercase tracking-wider mb-4">
              Nossas Unidades em {STORE_CITY}/{STORE_STATE}
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {STORE_LOCATIONS.map((store) => (
                <div
                  key={store.id}
                  className="p-4 rounded-md bg-[#0a3134] border border-[#00B4B6]/40 text-xs flex flex-col justify-between shadow-2xs"
                >
                  <div>
                    <div className="flex items-center gap-1.5 font-bold text-white mb-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#00B4B6]" />
                      <span className="text-[#00B4B6] font-extrabold">{store.name}</span>
                    </div>
                    <p className="text-neutral-200 font-medium">{store.address}</p>
                    <p className="text-neutral-400">{store.neighborhood} · {store.city}/{store.state}</p>
                  </div>

                  <div className="mt-3 pt-2.5 border-t border-[#00B4B6]/25">
                    <a
                      href={store.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] font-bold text-[#00B4B6] hover:text-white transition-colors"
                    >
                      <Navigation className="w-3 h-3" />
                      <span>Ver rota no Google Maps</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Linha Inferior com Copyright e Políticas */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <div>
            © {currentYear} Sempre Modas Calçados. Todos os direitos reservados.
          </div>

          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={() => setPrivacyModalOpen(true)}
              className="hover:text-[#00B4B6] transition-colors underline-offset-4 hover:underline"
            >
              Política de Privacidade
            </button>
            <button
              type="button"
              onClick={() => setCookiesModalOpen(true)}
              className="hover:text-[#00B4B6] transition-colors underline-offset-4 hover:underline"
            >
              Aviso de Cookies
            </button>
          </div>
        </div>
      </div>

      {/* Modal de Política de Privacidade (LGPD) */}
      {privacyModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs">
          <div className="bg-white text-neutral-900 rounded-lg max-w-lg w-full p-6 shadow-2xl relative border-2 border-[#00B4B6]">
            <button
              type="button"
              onClick={() => setPrivacyModalOpen(false)}
              className="absolute top-4 right-4 text-neutral-500 hover:text-black p-1"
              aria-label="Fechar"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-3 text-[#00898b]">
              <ShieldCheck className="w-5 h-5 text-[#00B4B6]" />
              <h3 className="text-lg font-bold text-neutral-900">
                Política de Privacidade & LGPD
              </h3>
            </div>

            <div className="text-xs sm:text-sm text-neutral-600 space-y-2.5 max-h-[60vh] overflow-y-auto pr-2">
              <p>
                A <strong>Sempre Modas Calçados</strong> respeita a privacidade de seus visitantes e atua em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 - LGPD).
              </p>
              <p>
                Este website possui caráter institucional e catálogo consultivo. Não realizamos coleta de dados pessoais sem sua solicitação prévia e voluntária. O contato via WhatsApp e o acesso ao Instagram ocorrem diretamente em plataformas operadas pela Meta, regidos por seus próprios termos de serviço.
              </p>
              <p>
                Qualquer dado eventualmente fornecido pelo cliente durante o atendimento é utilizado exclusivamente para responder às consultas sobre produtos e numerações de calçados nas lojas de Taquara/RS.
              </p>
            </div>

            <div className="mt-5 pt-3 border-t border-neutral-100 flex justify-end">
              <button
                type="button"
                onClick={() => setPrivacyModalOpen(false)}
                className="px-4 py-2 text-xs font-bold uppercase text-black bg-[#00B4B6] hover:bg-[#009da0] rounded-md transition-colors"
              >
                Compreendi
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal de Aviso de Cookies */}
      {cookiesModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs">
          <div className="bg-white text-neutral-900 rounded-lg max-w-lg w-full p-6 shadow-2xl relative border-2 border-[#00B4B6]">
            <button
              type="button"
              onClick={() => setCookiesModalOpen(false)}
              className="absolute top-4 right-4 text-neutral-500 hover:text-black p-1"
              aria-label="Fechar"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-lg font-bold text-neutral-900 mb-3">
              Aviso sobre Cookies e Navegação
            </h3>

            <div className="text-xs sm:text-sm text-neutral-600 space-y-2.5 max-h-[60vh] overflow-y-auto pr-2">
              <p>
                Utilizamos apenas recursos estritamente necessários para o funcionamento técnico adequado do site, como memorização de preferências de navegação e carregamento otimizado de componentes visuais.
              </p>
              <p>
                Não utilizamos cookies invasivos de rastreamento de terceiros sem o devido consentimento. Ao navegar no site, você concorda com o uso de recursos técnicos essenciais para a melhor experiência.
              </p>
            </div>

            <div className="mt-5 pt-3 border-t border-neutral-100 flex justify-end">
              <button
                type="button"
                onClick={() => setCookiesModalOpen(false)}
                className="px-4 py-2 text-xs font-bold uppercase text-black bg-[#00B4B6] hover:bg-[#009da0] rounded-md transition-colors"
              >
                Entendido
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
