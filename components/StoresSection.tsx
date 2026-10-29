'use client';

import React, { useState } from 'react';
import { STORE_LOCATIONS, buildWhatsAppUrl, WHATSAPP_MESSAGES } from '@/lib/config';
import { MapPin, Navigation, ExternalLink, MessageCircle } from 'lucide-react';

export const StoresSection: React.FC = () => {
  const [activeStoreTab, setActiveStoreTab] = useState<'matriz' | 'filial'>('matriz');

  const selectedStore =
    STORE_LOCATIONS.find((s) => s.id === activeStoreTab) || STORE_LOCATIONS[0];

  const embedMapUrl = `https://maps.google.com/maps?q=${encodeURIComponent(
    selectedStore.address + ', Taquara, RS, Brasil'
  )}&t=&z=16&ie=UTF8&iwloc=&output=embed`;

  return (
    <section id="nossas-lojas" className="py-16 md:py-24 bg-white border-b border-[#00B4B6]/25">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título e Subtítulo Obrigatórios */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-black bg-[#00B4B6] px-3 py-1 rounded-sm shadow-xs border border-[#009da0] mb-3">
            Lojas Físicas
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-neutral-900 tracking-tight">
            Estamos em Taquara. Venha nos visitar.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-600">
            Escolha a loja mais conveniente para você.
          </p>
        </div>

        {/* Grade com os Dois Cartões Independentes (Matriz e Filial) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {STORE_LOCATIONS.map((store) => {
            const isSelected = activeStoreTab === store.id;

            return (
              <div
                key={store.id}
                className={`flex flex-col justify-between p-7 sm:p-8 rounded-lg border-2 transition-all duration-200 ${
                  isSelected
                    ? 'border-[#00B4B6] bg-[#f0fcfc] shadow-md ring-2 ring-[#00B4B6]/30'
                    : 'border-neutral-200 bg-white hover:border-[#00B4B6]/60'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-black bg-[#00B4B6] px-3 py-1 rounded-sm shadow-2xs border border-[#009da0]">
                      <MapPin className="w-3.5 h-3.5" />
                      {store.type}
                    </span>

                    <button
                      type="button"
                      onClick={() => setActiveStoreTab(store.id as 'matriz' | 'filial')}
                      className={`text-xs font-bold px-3 py-1 rounded-sm transition-colors ${
                        isSelected
                          ? 'text-black bg-[#00B4B6] border border-[#009da0]'
                          : 'text-neutral-600 hover:text-black bg-neutral-100'
                      }`}
                    >
                      {isSelected ? '✓ Selecionada no mapa' : 'Exibir no mapa'}
                    </button>
                  </div>

                  <h3 className="text-xl font-extrabold text-neutral-900 tracking-tight">
                    {store.name}
                  </h3>

                  <div className="mt-3 text-sm text-neutral-700 leading-relaxed">
                    <p className="font-bold text-neutral-900">{store.address}</p>
                    <p className="text-neutral-500 font-medium">{store.neighborhood} — {store.city}/{store.state}</p>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-neutral-200/80 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  {/* Botão Obrigatório COMO CHEGAR em Turquesa Oficial */}
                  <a
                    href={store.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 py-3 px-5 text-xs font-black tracking-wider uppercase text-black bg-[#00B4B6] hover:bg-[#009da0] active:scale-[0.98] rounded-md transition-all shadow-xs border border-[#00898b]"
                    aria-label={`Como chegar na ${store.name} pelo Google Maps`}
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>COMO CHEGAR</span>
                  </a>

                  <a
                    href={buildWhatsAppUrl(WHATSAPP_MESSAGES.storeVisit(store.type))}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-bold tracking-wider uppercase text-neutral-900 bg-white hover:bg-[#00B4B6]/20 border border-[#00B4B6]/40 rounded-md transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-[#00898b]" />
                    <span>Dúvidas pelo WhatsApp</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mapa Incorporado com Moldura Turquesa */}
        <div className="rounded-lg overflow-hidden border-2 border-[#00B4B6] bg-neutral-100 shadow-md">
          <div className="px-5 py-3.5 bg-[#00B4B6] text-black border-b border-[#009da0] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div className="flex items-center gap-2 text-xs font-black">
              <MapPin className="w-4 h-4 fill-black text-[#00B4B6]" />
              <span>Unidade em Taquara/RS: <strong className="underline underline-offset-2">{selectedStore.name}</strong></span>
            </div>
            <a
              href={selectedStore.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-black text-black hover:text-white transition-colors"
            >
              <span>Abrir no aplicativo Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="relative w-full h-72 sm:h-80 md:h-96">
            <iframe
              title={`Mapa de localização - ${selectedStore.name}`}
              src={embedMapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
