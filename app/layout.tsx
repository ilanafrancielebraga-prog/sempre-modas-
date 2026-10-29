import type { Metadata } from 'next';
import './globals.css';
import { STORE_LOCATIONS, WHATSAPP_NUMBER } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Sempre Modas Calçados | Loja de Calçados em Taquara, RS',
  description:
    'Loja de calçados femininos, masculinos e infantis em Taquara/RS. Variedade, marcas de destaque e atendimento ágil pelo WhatsApp. Visite nossas lojas no Centro.',
  keywords: [
    'Sempre Modas Calçados',
    'Calçados em Taquara RS',
    'Calçados femininos em Taquara',
    'Calçados masculinos em Taquara',
    'Calçados infantis em Taquara',
    'Lojas de calçados em Taquara',
    'Pegada Taquara',
    'Beira Rio Taquara',
    'Moleka Taquara',
    'Modare Taquara',
    'Piccadilly Taquara',
    'Ferracini Taquara',
  ],
  authors: [{ name: 'Sempre Modas Calçados' }],
  creator: 'Sempre Modas Calçados',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://sempremodascalcados.com.br',
    siteName: 'Sempre Modas Calçados',
    title: 'Sempre Modas Calçados | Sempre tem um calçado para você',
    description:
      'Estilo, conforto e variedade para toda a família em Taquara/RS. Consulte modelos e numerações pelo WhatsApp.',
    images: [
      {
        url: '/images/hero_footwear_collection_1793313965763.jpg',
        width: 1200,
        height: 630,
        alt: 'Sempre Modas Calçados em Taquara RS',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sempre Modas Calçados | Loja de Calçados em Taquara, RS',
    description:
      'Calçados femininos, masculinos e infantis em Taquara/RS. Atendimento via WhatsApp.',
    images: ['/images/hero_footwear_collection_1793313965763.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Schema.org Structured Data (JSON-LD) para LocalBusiness / ShoeStore em Taquara RS
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ShoeStore',
    name: 'Sempre Modas Calçados',
    description:
      'Comércio varejista de calçados femininos, masculinos e infantis com duas lojas no Centro de Taquara, Rio Grande do Sul.',
    telephone: '+555135417010',
    sameAs: ['https://www.instagram.com/sempremodas.store/'],
    areaServed: {
      '@type': 'City',
      name: 'Taquara',
      containedInPlace: {
        '@type': 'State',
        name: 'Rio Grande do Sul',
      },
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: STORE_LOCATIONS[0].address,
      addressLocality: 'Taquara',
      addressRegion: 'RS',
      addressCountry: 'BR',
    },
    subOrganization: [
      {
        '@type': 'ShoeStore',
        name: 'Sempre Modas Calçados — Matriz',
        address: {
          '@type': 'PostalAddress',
          streetAddress: STORE_LOCATIONS[0].address,
          addressLocality: 'Taquara',
          addressRegion: 'RS',
          addressCountry: 'BR',
        },
      },
      {
        '@type': 'ShoeStore',
        name: 'Sempre Modas Calçados — Filial',
        address: {
          '@type': 'PostalAddress',
          streetAddress: STORE_LOCATIONS[1].address,
          addressLocality: 'Taquara',
          addressRegion: 'RS',
          addressCountry: 'BR',
        },
      },
    ],
  };

  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="min-h-screen bg-white text-neutral-900 antialiased font-sans selection:bg-[#00B4B6]/30 selection:text-neutral-900">
        {children}
      </body>
    </html>
  );
}
