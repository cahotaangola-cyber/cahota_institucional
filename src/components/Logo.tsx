import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
  textColor?: string;
  subtitleColor?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export default function Logo({ 
  className = '', 
  showText = true, 
  textColor = 'text-white', 
  subtitleColor = 'text-slate-400',
  size = 'md' 
}: LogoProps) {
  // Dimensions based on size
  const dimensions = {
    sm: { width: 140, height: 90, iconHeight: 50 },
    md: { width: 220, height: 145, iconHeight: 75 },
    lg: { width: 320, height: 210, iconHeight: 110 },
    xl: { width: 440, height: 290, iconHeight: 150 },
  };

  const selectedSize = dimensions[size];

  // Raw logo shape colors
  const tealColor = '#27B5B5';
  const greenColor = '#10B981';
  const amberColor = '#F59E0B';

  if (!showText) {
    // Only return the chevron icon
    return (
      <svg
        className={className}
        width={selectedSize.iconHeight * 1.5}
        height={selectedSize.iconHeight}
        viewBox="0 0 300 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* UPPER CHEVRONS (pointing UP) */}
        {/* Left Teal Upper */}
        <path
          d="M30 75L75 30L120 75L100 75L75 50L50 75H30Z"
          fill={tealColor}
        />
        {/* Middle Green Upper */}
        <path
          d="M105 75L150 30L195 75L175 75L150 50L125 75H105Z"
          fill={greenColor}
        />
        {/* Right Amber Upper */}
        <path
          d="M180 75L225 30L270 75L250 75L225 50L200 75H180Z"
          fill={amberColor}
        />

        {/* LOWER CHEVRONS (pointing DOWN) */}
        {/* Left Teal Lower */}
        <path
          d="M30 115L75 160L120 115L100 115L75 140L50 115H30Z"
          fill={tealColor}
        />
        {/* Middle Green Lower */}
        <path
          d="M105 115L150 160L195 115L175 115L150 140L125 115H105Z"
          fill={greenColor}
        />
        {/* Right Amber Lower */}
        <path
          d="M180 115L225 160L270 115L250 115L225 140L200 115H180Z"
          fill={amberColor}
        />
      </svg>
    );
  }

  return (
    <div className={`flex flex-col items-center ${className}`}>
      {/* Complete Logo with Brand text */}
      <svg
        width="100%"
        className="max-w-full transition-all duration-300"
        style={{ height: 'auto', maxHeight: selectedSize.height, aspectRatio: '220/145' }}
        viewBox="0 0 300 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* UPPER CHEVRONS */}
        {/* Left Teal Upper */}
        <path
          d="M30 70L75 25L120 70L100 70L75 45L50 70H30Z"
          fill={tealColor}
        />
        {/* Middle Green Upper */}
        <path
          d="M105 70L150 25L195 70L175 70L150 45L125 70H105Z"
          fill={greenColor}
        />
        {/* Right Amber Upper */}
        <path
          d="M180 70L225 25L270 70L250 70L225 45L200 70H180Z"
          fill={amberColor}
        />

        {/* MIDDLE TEXT "CAHOTA" */}
        <text
          x="150"
          y="110"
          textAnchor="middle"
          fill="currentColor"
          className={textColor}
          style={{
            fontFamily: '"Inter", sans-serif',
            fontSize: '34px',
            fontWeight: '300',
            letterSpacing: '5px',
          }}
        >
          CAHOTA
        </text>

        {/* LOWER CHEVRONS */}
        {/* Left Teal Lower */}
        <path
          d="M30 120L75 165L120 120L100 120L75 145L50 120H30Z"
          fill={tealColor}
        />
        {/* Middle Green Lower */}
        <path
          d="M105 120L150 165L195 120L175 120L150 145L125 120H105Z"
          fill={greenColor}
        />
        {/* Right Amber Lower */}
        <path
          d="M180 120L225 165L270 120L250 120L225 145L200 120H180Z"
          fill={amberColor}
        />

        {/* SUBTITLE */}
        <text
          x="150"
          y="190"
          textAnchor="middle"
          fill="currentColor"
          className={subtitleColor}
          style={{
            fontFamily: '"Inter", sans-serif',
            fontSize: '11px',
            fontWeight: '600',
            letterSpacing: '1px',
          }}
        >
          COMÉRCIO & PRESTAÇÃO DE SERVIÇOS
        </text>
      </svg>
    </div>
  );
}
