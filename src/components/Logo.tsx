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
  textColor = 'text-slate-800', 
  subtitleColor = 'text-slate-500',
  size = 'md' 
}: LogoProps) {
  // Dimensions based on size for complete logo
  const dimensions = {
    sm: { width: 155, height: 50 },
    md: { width: 240, height: 80 },
    lg: { width: 360, height: 120 },
    xl: { width: 480, height: 160 },
  };

  const selectedSize = dimensions[size];

  // Hexagon radius and center positions
  const r = 34; // Radius of hexagons
  const dx = r * 0.866;
  const h = r / 2;

  // Gradients and Bevels helpers
  const renderHexagon3D = (
    cx: number, 
    cy: number, 
    lightId: string, 
    medId: string, 
    darkId: string, 
    rimColor: string
  ) => {
    const pt = (x: number, y: number) => `${cx + x},${cy + y}`;
    return (
      <g className="transition-transform duration-300 hover:scale-[1.03]" style={{ transformOrigin: `${cx}px ${cy}px` }}>
        {/* Outer subtle drop shadow */}
        <polygon 
          points={`${pt(0, -r-1.5)} ${pt(dx+1.5, -h-0.7)} ${pt(dx+1.5, h+0.7)} ${pt(0, r+1.5)} ${pt(-dx-1.5, h+0.7)} ${pt(-dx-1.5, -h-0.7)}`} 
          fill="#000000" 
          opacity="0.1"
        />
        {/* Outer crisp metallic rim */}
        <polygon 
          points={`${pt(0, -r-0.5)} ${pt(dx+0.5, -h-0.25)} ${pt(dx+0.5, h+0.25)} ${pt(0, r+0.5)} ${pt(-dx-0.5, h+0.25)} ${pt(-dx-0.5, -h-0.25)}`} 
          fill={rimColor} 
          opacity="0.85"
        />
        {/* Dark inner divider border */}
        <polygon 
          points={`${pt(0, -r)} ${pt(dx, -h)} ${pt(dx, h)} ${pt(0, r)} ${pt(-dx, h)} ${pt(-dx, -h)}`} 
          fill="#1e293b" 
        />
        
        {/* 3D Isometric Faces meeting in the center */}
        {/* Face 1: Top (v6 -> v1 -> v2 -> Center) */}
        <polygon 
          points={`${pt(0, 0)} ${pt(-dx+0.5, -h+0.25)} ${pt(0, -r+0.5)} ${pt(dx-0.5, -h+0.25)}`} 
          fill={`url(#${lightId})`} 
        />
        {/* Face 2: Right (v2 -> v3 -> v4 -> Center) */}
        <polygon 
          points={`${pt(0, 0)} ${pt(dx-0.5, -h+0.5)} ${pt(dx-0.5, h-0.5)} ${pt(0, r-0.5)}`} 
          fill={`url(#${medId})`} 
        />
        {/* Face 3: Left (v4 -> v5 -> v6 -> Center) */}
        <polygon 
          points={`${pt(0, 0)} ${pt(0, r-0.5)} ${pt(-dx+0.5, h-0.5)} ${pt(-dx+0.5, -h+0.5)}`} 
          fill={`url(#${darkId})`} 
        />
        
        {/* Radial highlight for sheen */}
        <circle cx={cx - 5} cy={cy - 10} r={r * 0.4} fill="url(#sheenGrad)" opacity="0.45" pointerEvents="none" />
        <circle cx={cx} cy={cy} r={1.5} fill="#ffffff" opacity="0.75" pointerEvents="none" />
      </g>
    );
  };

  if (!showText) {
    // Return ONLY the clustered ascending hexagons, tight viewBox for immediate scaling in nav/footer
    return (
      <svg
        className={className}
        width={36}
        height={36}
        viewBox="30 25 210 245"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Gradients */}
          {/* Sheen */}
          <radialGradient id="sheenGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </radialGradient>

          {/* Teal Hexagon */}
          <linearGradient id="tealLight" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#81e6d9" />
            <stop offset="100%" stopColor="#2ca5ab" />
          </linearGradient>
          <linearGradient id="tealMedium" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2ca5ab" />
            <stop offset="100%" stopColor="#1c7c82" />
          </linearGradient>
          <linearGradient id="tealDark" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1c7c82" />
            <stop offset="100%" stopColor="#0d3f42" />
          </linearGradient>

          {/* Green Hexagon */}
          <linearGradient id="greenLight" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a3e635" />
            <stop offset="100%" stopColor="#4da32a" />
          </linearGradient>
          <linearGradient id="greenMedium" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4da32a" />
            <stop offset="100%" stopColor="#2f6e1a" />
          </linearGradient>
          <linearGradient id="greenDark" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2f6e1a" />
            <stop offset="100%" stopColor="#15360a" />
          </linearGradient>

          {/* Bronze Hexagon */}
          <linearGradient id="bronzeLight" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f97316" />
            <stop offset="100%" stopColor="#b44b15" />
          </linearGradient>
          <linearGradient id="bronzeMedium" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#b44b15" />
            <stop offset="100%" stopColor="#87350d" />
          </linearGradient>
          <linearGradient id="bronzeDark" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#87350d" />
            <stop offset="100%" stopColor="#421a05" />
          </linearGradient>

          {/* Gold Hexagon */}
          <linearGradient id="goldLight" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fef08a" />
            <stop offset="100%" stopColor="#ca8a04" />
          </linearGradient>
          <linearGradient id="goldMedium" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ca8a04" />
            <stop offset="100%" stopColor="#915f02" />
          </linearGradient>
          <linearGradient id="goldDark" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#915f02" />
            <stop offset="100%" stopColor="#442c01" />
          </linearGradient>
        </defs>

        {/* Diagonal ascending connections */}
        <path d="M 80,185 L 140,135 M 140,135 L 200,85" stroke="#94a3b8" strokeWidth="2.5" strokeDasharray="3 3" opacity="0.3" strokeLinecap="round" />
        <path d="M 80,185 A 35 35 0 0 1 140,225" stroke="#f97316" strokeWidth="1.5" fill="none" opacity="0.25" />

        {/* 4 Brand Metallic Hexagons */}
        {/* Bronze (Bottom-Left) */}
        {renderHexagon3D(80, 185, 'bronzeLight', 'bronzeMedium', 'bronzeDark', '#ea580c')}
        
        {/* Gold (Bottom-Middle-Right) */}
        {renderHexagon3D(140, 225, 'goldLight', 'goldMedium', 'goldDark', '#eab308')}

        {/* Green (Middle-Left) */}
        {renderHexagon3D(140, 135, 'greenLight', 'greenMedium', 'greenDark', '#84cc16')}

        {/* Teal (Top-Right) */}
        {renderHexagon3D(200, 85, 'tealLight', 'tealMedium', 'tealDark', '#06b6d4')}
      </svg>
    );
  }

  return (
    <div className={`flex items-center ${className}`} style={{ width: '100%', maxWidth: selectedSize.width }}>
      {/* Complete Horizontal Logo featuring left Hexagons cluster and right clean font brand text */}
      <svg
        width="100%"
        style={{ height: 'auto', maxHeight: selectedSize.height, aspectRatio: '340/130' }}
        viewBox="30 25 340 130"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Glow/Filters */}
          <filter id="glow-logo" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>

          <radialGradient id="sheenGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </radialGradient>

          {/* Underline Fading Gradient */}
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#475569" stopOpacity="0" />
            <stop offset="35%" stopColor="#1e293b" stopOpacity="0.85" />
            <stop offset="85%" stopColor="#94a3b8" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#cbd5e1" stopOpacity="0" />
          </linearGradient>

          {/* Teal Gradients */}
          <linearGradient id="tealLight" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a5f3fc" />
            <stop offset="100%" stopColor="#0e7490" />
          </linearGradient>
          <linearGradient id="tealMedium" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0e7490" />
            <stop offset="100%" stopColor="#083344" />
          </linearGradient>
          <linearGradient id="tealDark" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#083344" />
            <stop offset="100%" stopColor="#020617" />
          </linearGradient>

          {/* Green Gradients */}
          <linearGradient id="greenLight" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#bbf7d0" />
            <stop offset="100%" stopColor="#15803d" />
          </linearGradient>
          <linearGradient id="greenMedium" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#15803d" />
            <stop offset="100%" stopColor="#14532d" />
          </linearGradient>
          <linearGradient id="greenDark" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#14532d" />
            <stop offset="100%" stopColor="#051c0c" />
          </linearGradient>

          {/* Bronze Gradients */}
          <linearGradient id="bronzeLight" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffedd5" />
            <stop offset="100%" stopColor="#c2410c" />
          </linearGradient>
          <linearGradient id="bronzeMedium" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#c2410c" />
            <stop offset="100%" stopColor="#7c2d12" />
          </linearGradient>
          <linearGradient id="bronzeDark" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7c2d12" />
            <stop offset="100%" stopColor="#2a0800" />
          </linearGradient>

          {/* Gold Gradients */}
          <linearGradient id="goldLight" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fef9c3" />
            <stop offset="100%" stopColor="#a16207" />
          </linearGradient>
          <linearGradient id="goldMedium" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a16207" />
            <stop offset="100%" stopColor="#713f12" />
          </linearGradient>
          <linearGradient id="goldDark" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#713f12" />
            <stop offset="100%" stopColor="#1c0d02" />
          </linearGradient>
        </defs>

        {/* LEFT COMPACT HEXAGONS CLUSTER */}
        <g transform="translate(-10, -5)">
          {/* Subtle connecting lines */}
          <path d="M 60,103 L 95,75 M 95,75 L 130,47" stroke="#cbd5e1" strokeWidth="1.5" opacity="0.35" />
          
          {/* Bronze (Bottom-Left) */}
          {renderHexagon3D(60, 103, 'bronzeLight', 'bronzeMedium', 'bronzeDark', '#c2410c')}
          
          {/* Gold (Bottom-Middle-Right) */}
          {renderHexagon3D(95, 126, 'goldLight', 'goldMedium', 'goldDark', '#a16207')}

          {/* Green (Middle-Left) */}
          {renderHexagon3D(95, 75, 'greenLight', 'greenMedium', 'greenDark', '#15803d')}

          {/* Teal (Top-Right) */}
          {renderHexagon3D(130, 47, 'tealLight', 'tealMedium', 'tealDark', '#0e7490')}
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
          COMERCIO E PRESTAÇÃO DE SERVIÇOS LDA
        </text>

        {/* Reflection Gradient Underline */}
        <rect x="151" y="110" width="220" height="1.8" fill="url(#lineGrad)" rx="1" />
      </svg>
    </div>
  );
}
