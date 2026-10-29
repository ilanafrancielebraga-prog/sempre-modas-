import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'full' | 'compact' | 'footer';
  size?: 'sm' | 'md' | 'lg';
}

/**
 * Componente oficial da Logo Sempre Modas Calçados.
 *
 * Especificações oficiais:
 * - Fundo turquesa (#00B4B6)
 * - Símbolo de salto alto branco
 * - Tipografia preta em caixa alta: "SEMPRE MODAS CALÇADOS"
 * - Sem alterações de proporção, cor ou símbolo.
 */
export const Logo: React.FC<LogoProps> = ({
  className = '',
  variant = 'full',
  size = 'md',
}) => {
  const sizeStyles = {
    sm: {
      badge: 'h-8 px-2.5 gap-2 text-xs',
      iconSize: 'w-4 h-4',
      title: 'text-[11px] font-extrabold tracking-wider',
      sub: 'text-[8px] font-semibold tracking-widest',
    },
    md: {
      badge: 'h-11 px-3.5 gap-2.5 text-sm',
      iconSize: 'w-5 h-5',
      title: 'text-[13px] font-extrabold tracking-wider',
      sub: 'text-[9px] font-semibold tracking-widest',
    },
    lg: {
      badge: 'h-14 px-4.5 gap-3.5 text-base',
      iconSize: 'w-7 h-7',
      title: 'text-base font-extrabold tracking-wider',
      sub: 'text-[10px] font-semibold tracking-widest',
    },
  }[size];

  return (
    <div
      className={`inline-flex items-center select-none ${className}`}
      aria-label="Sempre Modas Calçados - Taquara RS"
    >
      {/* Bloco com o fundo turquesa oficial e proporção preservada */}
      <div
        className={`flex items-center rounded-sm bg-[#00B4B6] text-black shadow-xs transition-transform duration-200 ${sizeStyles.badge}`}
        style={{ backgroundColor: '#00B4B6' }}
      >
        {/* Símbolo do Salto Alto Branco com traçado fiel e gracioso */}
        <div className="flex shrink-0 items-center justify-center text-white">
          <svg
            className={`${sizeStyles.iconSize} drop-shadow-xs`}
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            {/* Silhueta minimalista e precisa de salto alto branco */}
            <path
              d="M4.5 24.5C6.5 24.5 10 24.2 12.8 22.8C16 21.2 18.5 17.5 21 12.5C21.8 10.9 23.5 10 25.3 10H27.5C28 10 28.5 10.4 28.5 11C28.5 13.8 26.5 18.5 24.5 21C22.8 23.1 20 24.5 16.5 24.5H4.5Z"
              fill="#FFFFFF"
            />
            {/* Salto agulha / stiletto em branco */}
            <path
              d="M26.2 11.2V24.5C26.2 24.9 25.9 25.2 25.5 25.2C25.1 25.2 24.8 24.9 24.8 24.5V17L21 21"
              stroke="#FFFFFF"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Base da sola frontal */}
            <path
              d="M4 24.5H12"
              stroke="#FFFFFF"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Nome Oficial: SEMPRE MODAS CALÇADOS em preto com máxima nitidez */}
        <div className="flex flex-col justify-center leading-none text-black">
          <span className={`font-black text-black uppercase ${sizeStyles.title}`}>
            SEMPRE MODAS
          </span>
          <span
            className={`font-bold text-black uppercase tracking-[0.22em] ${sizeStyles.sub}`}
          >
            CALÇADOS
          </span>
        </div>
      </div>
    </div>
  );
};
