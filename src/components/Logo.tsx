import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
  textColor?: string;
  subtitleColor?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  currentLang?: 'pt' | 'en';
}

export default function Logo({ 
  className = '', 
  showText = true, 
  textColor = 'text-slate-800', 
  subtitleColor = 'text-slate-500',
  size = 'md',
  currentLang = 'en'
}: LogoProps) {
  // Dimensions based on size for complete logo
  const dimensions = {
    sm: { width: 155, height: 50 },
    md: { width: 240, height: 80 },
    lg: { width: 360, height: 120 },
    xl: { width: 480, height: 160 },
  };

  const selectedSize = dimensions[size];

  // Helper to render a flat rounded-corner hexagon with exact aspect and colors from the uploaded logo image
  const renderFlatHexagon = (cx: number, cy: number, r: number, color: string) => {
    const h = r * 0.866025; // height offset
    const points = [
      [cx - r/2, cy - h],
      [cx + r/2, cy - h],
      [cx + r, cy],
      [cx + r/2, cy + h],
      [cx - r/2, cy + h],
      [cx - r, cy],
    ].map(p => p.join(',')).join(' ');

    return (
      <polygon
        points={points}
        fill={color}
        stroke={color}
        strokeWidth={Math.max(4, r * 0.16)} // Creates the organic rounded corners match
        strokeLinejoin="round"
        className="transition-transform duration-300 hover:scale-[1.05]"
        style={{ transformOrigin: `${cx}px ${cy}px` }}
      />
    );
  };

  if (!showText) {
    // Return ONLY the clustered ascending hexagons from the uploaded brand image, beautifully centered and scaled
    return (
      <svg
        className={className}
        width={36}
        height={36}
        viewBox="10 15 185 185"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Connection accents behind are fully clean and minimal now */}
        {renderFlatHexagon(42, 131, 25, '#f58e24')}   {/* Orange (Bottom-Left) */}
        {renderFlatHexagon(92, 161, 25, '#fbb825')}   {/* Yellow (Bottom-Right) */}
        {renderFlatHexagon(92, 101, 25, '#8ec043')}   {/* Green (Middle) */}
        {renderFlatHexagon(142, 60, 36, '#29cbd3')}   {/* Teal (Top-Right - Bold & Large) */}
      </svg>
    );
  }

  return (
    <div className={`flex items-center ${className}`} style={{ width: '100%', maxWidth: selectedSize.width }}>
      {/* Complete Horizontal Logo featuring left modern Hexagons cluster and right clean brand wordmark */}
      <svg
        width="100%"
        style={{ height: 'auto', maxHeight: selectedSize.height, aspectRatio: '340/130' }}
        viewBox="30 25 340 130"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Underline Fading Gradient */}
          <linearGradient id="logoLineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#475569" stopOpacity="0" />
            <stop offset="35%" stopColor="#1e293b" stopOpacity="0.85" />
            <stop offset="85%" stopColor="#94a3b8" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#cbd5e1" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* LEFT COMPACT HEXAGONS CLUSTER - Calibrated perfectly to clear text at x=150 */}
        <g>
          {renderFlatHexagon(47, 99, 17, '#f58e24')}    {/* Orange (Bottom-Left) */}
          {renderFlatHexagon(81, 119, 17, '#fbb825')}   {/* Yellow (Bottom-Right) */}
          {renderFlatHexagon(81, 79, 17, '#8ec043')}    {/* Green (Middle) */}
          {renderFlatHexagon(115, 52, 24, '#29cbd3')}   {/* Teal (Top-Right - Bold & Large) */}
        </g>

        {/* RIGHT BRAND TEXTS "CAHOTA" & "COMERCIO E PRESTAÇÃO..."" */}
        {/* Main Title Wordmark */}
        <text
          x="150"
          y="78"
          fill="currentColor"
          className={textColor}
          style={{
            fontFamily: '"Inter", "Montserrat", system-ui, sans-serif',
            fontSize: '34px',
            fontWeight: '900',
            letterSpacing: '2px',
          }}
        >
          CAHOTA
        </text>

        {/* Subtitle wording */}
        <text
          x="151"
          y="102"
          fill="currentColor"
          className={subtitleColor}
          style={{
            fontFamily: '"Inter", system-ui, sans-serif',
            fontSize: '7.8px',
            fontWeight: '600',
            letterSpacing: '1px',
          }}
        >
          {currentLang === 'pt' ? 'COMERCIO E PRESTAÇÃO DE SERVIÇOS LDA' : 'COMMERCE AND SERVICE PROVISION LTD'}
        </text>

        {/* Reflection Gradient Underline */}
        <rect x="151" y="110" width="220" height="1.8" fill="url(#logoLineGrad)" rx="1" />
      </svg>
    </div>
  );
}
