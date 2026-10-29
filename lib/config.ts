/**
 * CONFIGURAÇÃO CENTRALIZADA — SEMPRE MODAS CALÇADOS
 * 
 * Cidade: Taquara, Rio Grande do Sul, Brasil
 * Segmento: Calçados Femininos, Masculinos e Infantis
 * 
 * Todas as informações de contato, mensagens pré-codificadas, redes sociais,
 * endereços e mix de marcas estão centralizadas aqui.
 */

export interface StoreLocation {
  id: string;
  name: string;
  type: 'Matriz' | 'Filial';
  address: string;
  city: string;
  state: string;
  neighborhood: string;
  googleMapsQuery: string;
  googleMapsUrl: string;
}

export interface Brand {
  name: string;
  categoryHint?: string;
}

export interface CatalogProduct {
  id: string;
  name: string;
  brand: 'Beira Rio' | 'Modare' | 'Piccadilly' | 'Pegada' | 'Ferracini' | 'Moleka';
  category: 'feminino' | 'masculino' | 'infantil';
  image: string;
  isIllustrative: boolean;
  description: string;
  color?: string;
  availableSizes?: string;
}

/**
 * CONFIGURAÇÃO DO WHATSAPP
 * 
 * Número informado: 51 3541-7010
 * Formato internacional oficial: 555135417010
 */
export const WHATSAPP_NUMBER = '555135417010';
export const STORE_PHONE_DISPLAY = '(51) 3541-7010';
export const STORE_PHONE_LOCAL = '3541-7010';
export const STORE_DDD = '51';
export const STORE_CITY = 'Taquara';
export const STORE_STATE = 'RS';

/**
 * CONFIGURAÇÃO DO INSTAGRAM
 * 
 * Perfil oficial confirmado pela empresa:
 * https://www.instagram.com/sempremodas.store/
 */
export const INSTAGRAM_HANDLE = '@sempremodas.store';
export const INSTAGRAM_URL =
  process.env.NEXT_PUBLIC_INSTAGRAM_URL || 'https://www.instagram.com/sempremodas.store/';

/**
 * Função utilitária para gerar links do WhatsApp com mensagens pré-preenchidas e codificadas corretamente.
 */
export function buildWhatsAppUrl(message: string): string {
  const cleanNumber = WHATSAPP_NUMBER.replace(/\D/g, '');
  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message.trim())}`;
}

/**
 * Mensagens pré-configuradas exatamente conforme especificações oficiais
 */
export const WHATSAPP_MESSAGES = {
  // Mensagem geral
  general:
    'Olá! Conheci a Sempre Modas Calçados pelo site e gostaria de conhecer os modelos disponíveis.',
  // Mensagem feminina
  feminino:
    'Olá! Gostaria de consultar os modelos de calçados femininos disponíveis.',
  // Mensagem masculina
  masculino:
    'Olá! Gostaria de consultar os modelos de calçados masculinos disponíveis.',
  // Mensagem infantil
  infantil:
    'Olá! Gostaria de consultar os modelos de calçados infantis disponíveis.',
  // Mensagem sobre marcas
  brandsMix:
    'Olá! Gostaria de consultar os modelos disponíveis das marcas que vocês trabalham.',
  // Mensagem sobre marca específica
  brandSpecific: (brandName: string) =>
    `Olá! Gostaria de consultar os modelos disponíveis da marca ${brandName} na Sempre Modas Calçados.`,
  // Mensagem sobre produto específico
  product: (productName: string) =>
    `Olá! Gostaria de saber mais sobre este calçado: ${productName}.`,
  // Dúvidas sobre unidade
  storeVisit: (storeType: string) =>
    `Olá! Gostaria de tirar uma dúvida sobre a loja Sempre Modas Calçados (${storeType}) em Taquara/RS.`,
};

/**
 * Marcas oficiais confirmadas
 */
export const STORE_BRANDS: Brand[] = [
  { name: 'Beira Rio', categoryHint: 'Feminino e Casual' },
  { name: 'Modare', categoryHint: 'Conforto e Ultraconforto Feminino' },
  { name: 'Piccadilly', categoryHint: 'Design e Conforto Feminino' },
  { name: 'Pegada', categoryHint: 'Casual e Conforto Masculino' },
  { name: 'Ferracini', categoryHint: 'Social e Sofisticação Masculina' },
  { name: 'Moleka', categoryHint: 'Jovem e Contemporâneo' },
];

/**
 * Endereços reais e verificados das duas unidades em Taquara/RS
 */
export const STORE_LOCATIONS: StoreLocation[] = [
  {
    id: 'matriz',
    name: 'Sempre Modas Calçados — Matriz',
    type: 'Matriz',
    address: 'Rua Coronel João Pinto, 2547',
    neighborhood: 'Centro',
    city: 'Taquara',
    state: 'RS',
    googleMapsQuery: 'Rua Coronel João Pinto, 2547 - Centro, Taquara - RS',
    googleMapsUrl:
      'https://www.google.com/maps/search/?api=1&query=' +
      encodeURIComponent('Rua Coronel João Pinto, 2547 - Centro, Taquara - RS, Brasil'),
  },
  {
    id: 'filial',
    name: 'Sempre Modas Calçados — Filial',
    type: 'Filial',
    address: 'Rua Guilherme Lahm, 1383',
    neighborhood: 'Centro',
    city: 'Taquara',
    state: 'RS',
    googleMapsQuery: 'Rua Guilherme Lahm, 1383 - Centro, Taquara - RS',
    googleMapsUrl:
      'https://www.google.com/maps/search/?api=1&query=' +
      encodeURIComponent('Rua Guilherme Lahm, 1383 - Centro, Taquara - RS, Brasil'),
  },
];

/**
 * CATÁLOGO CONSULTIVO — MODELOS DE DEMONSTRAÇÃO
 * 
 * Marcados internamente com isIllustrative: true.
 * Não inventa preços ou estoque definitivo.
 * Estruturado para substituição direta por fotografias e itens reais.
 */
export const SAMPLE_PRODUCTS: CatalogProduct[] = [
  // Linha Feminina
  {
    id: 'fem-01',
    name: 'Sandália Salto Bloco Conforto',
    brand: 'Beira Rio',
    category: 'feminino',
    image: '/images/cat_feminino_footwear_1793313978261.jpg',
    isIllustrative: true,
    description: 'Design contemporâneo para rotina ou eventos com palmilha acolchoada.',
    color: 'Caramelo, Nude e Preto',
    availableSizes: 'Consulte disponibilidade: 34 ao 39',
  },
  {
    id: 'fem-02',
    name: 'Mocassim Feminino Clássico com Detalhe Metálico',
    brand: 'Moleka',
    category: 'feminino',
    image: '/images/cat_feminino_footwear_1793313978261.jpg',
    isIllustrative: true,
    description: 'Elegância prática que transita com naturalidade do trabalho ao lazer.',
    color: 'Preto, Off-White e Caramelo',
    availableSizes: 'Consulte disponibilidade: 34 ao 40',
  },
  {
    id: 'fem-03',
    name: 'Scarpin Salto Médio Ultraconforto',
    brand: 'Modare',
    category: 'feminino',
    image: '/images/cat_feminino_footwear_1793313978261.jpg',
    isIllustrative: true,
    description: 'Tecnologia de amortecimento no calcanhar e acabamento macio.',
    color: 'Nude Suave e Preto',
    availableSizes: 'Consulte disponibilidade: 35 ao 39',
  },
  {
    id: 'fem-04',
    name: 'Sapatilha Flex Confort Bico Arredondado',
    brand: 'Piccadilly',
    category: 'feminino',
    image: '/images/cat_feminino_footwear_1793313978261.jpg',
    isIllustrative: true,
    description: 'Leveza e anatomia suave para os pés ao longo de todo o dia.',
    color: 'Nude e Preto',
    availableSizes: 'Consulte disponibilidade: 34 ao 40',
  },

  // Linha Masculina
  {
    id: 'masc-01',
    name: 'Sapato Social em Couro Nobre',
    brand: 'Ferracini',
    category: 'masculino',
    image: '/images/cat_masculino_footwear_1793313979038.jpg',
    isIllustrative: true,
    description: 'Visual requintado para eventos sociais, reuniões e ocasiões formais.',
    color: 'Café e Preto',
    availableSizes: 'Consulte disponibilidade: 38 ao 44',
  },
  {
    id: 'masc-02',
    name: 'Mocassim Driver Casual com Amortecimento',
    brand: 'Pegada',
    category: 'masculino',
    image: '/images/cat_masculino_footwear_1793313979038.jpg',
    isIllustrative: true,
    description: 'Costura reforçada, solado flexível e calce macio para o dia a dia.',
    color: 'Caramelo, Marrom e Areia',
    availableSizes: 'Consulte disponibilidade: 39 ao 43',
  },
  {
    id: 'masc-03',
    name: 'Tênis Casual em Couro Macio',
    brand: 'Pegada',
    category: 'masculino',
    image: '/images/cat_masculino_footwear_1793313979038.jpg',
    isIllustrative: true,
    description: 'Estilo despojado e versátil para usar com calça ou bermuda.',
    color: 'Branco, Marrom e Preto',
    availableSizes: 'Consulte disponibilidade: 38 ao 44',
  },

  // Linha Infantil
  {
    id: 'inf-01',
    name: 'Tênis Infantil Esportivo com Fechamento Fácil',
    brand: 'Moleka',
    category: 'infantil',
    image: '/images/cat_infantil_footwear_1793313979340.jpg',
    isIllustrative: true,
    description: 'Conforto e segurança antiderrapante para a escola e momentos de brincadeira.',
    color: 'Azul com Laranja, Rosa e Grafite',
    availableSizes: 'Consulte disponibilidade: 25 ao 34',
  },
  {
    id: 'inf-02',
    name: 'Sandália Infantil Confort de Passeio',
    brand: 'Beira Rio',
    category: 'infantil',
    image: '/images/cat_infantil_footwear_1793313979340.jpg',
    isIllustrative: true,
    description: 'Tiras anatômicas e macias para passeios em dias quentes.',
    color: 'Caramelo, Turquesa e Rosa',
    availableSizes: 'Consulte disponibilidade: 22 ao 32',
  },
  {
    id: 'inf-03',
    name: 'Slip-on Infantil Estampado',
    brand: 'Moleka',
    category: 'infantil',
    image: '/images/cat_infantil_footwear_1793313979340.jpg',
    isIllustrative: true,
    description: 'Calce prático sem cadarço e tecido suave e respirável.',
    color: 'Estampado e Multicolorido',
    availableSizes: 'Consulte disponibilidade: 24 ao 33',
  },
];
