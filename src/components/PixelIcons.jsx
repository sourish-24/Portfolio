import React from 'react';

// Scalable pixel-perfect SVG icons using crispEdges
export function PixelGitHub({ size = 32, color = '#ffffff' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" style={{ shapeRendering: 'crispEdges' }}>
      {/* Pixel Octocat */}
      <rect x="5" y="1" width="6" height="1" fill={color} />
      <rect x="3" y="2" width="10" height="1" fill={color} />
      <rect x="2" y="3" width="12" height="1" fill={color} />
      <rect x="2" y="4" width="2" height="3" fill={color} />
      <rect x="12" y="4" width="2" height="3" fill={color} />
      <rect x="4" y="4" width="8" height="4" fill={color} />
      {/* Ears */}
      <rect x="2" y="1" width="2" height="2" fill={color} />
      <rect x="12" y="1" width="2" height="2" fill={color} />
      {/* Face details */}
      <rect x="5" y="5" width="2" height="2" fill="#14141e" />
      <rect x="9" y="5" width="2" height="2" fill="#14141e" />
      {/* Whiskers */}
      <rect x="1" y="6" width="2" height="1" fill={color} />
      <rect x="13" y="6" width="2" height="1" fill={color} />
      {/* Body */}
      <rect x="3" y="8" width="10" height="2" fill={color} />
      <rect x="4" y="10" width="8" height="3" fill={color} />
      <rect x="3" y="11" width="1" height="3" fill={color} />
      <rect x="12" y="11" width="1" height="3" fill={color} />
      <rect x="5" y="13" width="2" height="2" fill={color} />
      <rect x="9" y="13" width="2" height="2" fill={color} />
    </svg>
  );
}

export function PixelLinkedIn({ size = 32, color = '#0a66c2' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" style={{ shapeRendering: 'crispEdges' }}>
      {/* Blue background square */}
      <rect x="1" y="1" width="14" height="14" fill={color} />
      <rect x="2" y="2" width="12" height="12" fill={color} />
      {/* Pixel 'i' */}
      <rect x="3" y="4" width="2" height="2" fill="#ffffff" />
      <rect x="3" y="7" width="2" height="6" fill="#ffffff" />
      {/* Pixel 'n' */}
      <rect x="7" y="7" width="2" height="6" fill="#ffffff" />
      <rect x="9" y="7" width="3" height="2" fill="#ffffff" />
      <rect x="11" y="8" width="2" height="5" fill="#ffffff" />
    </svg>
  );
}

export function PixelLeetCode({ size = 32 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" style={{ shapeRendering: 'crispEdges' }}>
      {/* LeetCode signature bracket shape */}
      {/* Top curved arm */}
      <rect x="6" y="2" width="6" height="2" fill="#ffa116" />
      <rect x="4" y="3" width="3" height="2" fill="#ffa116" />
      {/* Left loop vertical */}
      <rect x="2" y="5" width="3" height="6" fill="#ffa116" />
      {/* Bottom curved arm */}
      <rect x="4" y="11" width="3" height="2" fill="#ffa116" />
      <rect x="6" y="12" width="6" height="2" fill="#ffa116" />
      {/* Accent inner highlights */}
      <rect x="8" y="3" width="3" height="1" fill="#ffc060" />
      <rect x="8" y="12" width="3" height="1" fill="#d97706" />
      {/* Middle horizontal bar */}
      <rect x="6" y="7" width="7" height="2" fill="#ffffff" />
      <rect x="12" y="7" width="2" height="2" fill="#e2e8f0" />
      {/* Outer subtle shadow */}
      <rect x="2" y="11" width="2" height="1" fill="#b45309" />
    </svg>
  );
}

export function PixelCodeforces({ size = 32 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" style={{ shapeRendering: 'crispEdges' }}>
      {/* Codeforces 3-bar podium logo */}
      {/* Left bar: Yellow (medium height) */}
      <rect x="2" y="6" width="3" height="8" fill="#f59e0b" />
      <rect x="2" y="6" width="3" height="1" fill="#fef08a" />
      <rect x="2" y="13" width="3" height="1" fill="#b45309" />

      {/* Middle bar: Blue (tallest) */}
      <rect x="6" y="2" width="3" height="12" fill="#2563eb" />
      <rect x="6" y="2" width="3" height="1" fill="#93c5fd" />
      <rect x="6" y="13" width="3" height="1" fill="#1e3a8a" />

      {/* Right bar: Red (shortest) */}
      <rect x="10" y="9" width="3" height="5" fill="#ef4444" />
      <rect x="10" y="9" width="3" height="1" fill="#fca5a5" />
      <rect x="10" y="13" width="3" height="1" fill="#991b1b" />

      {/* Base platform */}
      <rect x="1" y="14" width="13" height="1" fill="#1e1e1e" />
    </svg>
  );
}

export function PixelGoogleSheets({ size = 32 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" style={{ shapeRendering: 'crispEdges' }}>
      {/* Green spreadsheet card */}
      <rect x="2" y="1" width="12" height="14" fill="#10b981" />
      <rect x="1" y="2" width="14" height="12" fill="#10b981" />
      <rect x="11" y="1" width="3" height="3" fill="#059669" />
      {/* White table canvas */}
      <rect x="3" y="4" width="10" height="8" fill="#ffffff" />
      {/* Green header row */}
      <rect x="3" y="4" width="10" height="2" fill="#047857" />
      {/* Grid cell lines */}
      <rect x="3" y="8" width="10" height="1" fill="#94a3b8" />
      <rect x="7" y="6" width="1" height="6" fill="#94a3b8" />
      {/* Data cell indicator dots */}
      <rect x="4" y="9" width="2" height="1" fill="#3b82f6" />
      <rect x="9" y="9" width="2" height="1" fill="#10b981" />
      {/* Bottom shadow */}
      <rect x="2" y="14" width="12" height="1" fill="#065f46" />
    </svg>
  );
}

export function PixelMail({ size = 32, color = '#ffb347' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" style={{ shapeRendering: 'crispEdges' }}>
      {/* Envelope body */}
      <rect x="1" y="3" width="14" height="10" fill={color} />
      <rect x="2" y="4" width="12" height="8" fill="#fffdf0" />
      {/* Flap lines */}
      <rect x="2" y="4" width="2" height="1" fill={color} />
      <rect x="12" y="4" width="2" height="1" fill={color} />
      <rect x="4" y="5" width="2" height="1" fill={color} />
      <rect x="10" y="5" width="2" height="1" fill={color} />
      <rect x="6" y="6" width="4" height="1" fill={color} />
      <rect x="7" y="7" width="2" height="1" fill="#e85d04" />
      {/* Bottom fold line */}
      <rect x="3" y="11" width="2" height="1" fill="#d97706" />
      <rect x="11" y="11" width="2" height="1" fill="#d97706" />
      <rect x="5" y="10" width="2" height="1" fill="#d97706" />
      <rect x="9" y="10" width="2" height="1" fill="#d97706" />
    </svg>
  );
}

export function PixelFloppy({ size = 32, color = '#6366f1' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" style={{ shapeRendering: 'crispEdges' }}>
      {/* Floppy casing */}
      <rect x="1" y="1" width="13" height="14" fill={color} />
      <rect x="14" y="3" width="1" height="12" fill={color} />
      {/* Metal shutter top */}
      <rect x="4" y="1" width="8" height="5" fill="#cbd5e1" />
      <rect x="6" y="2" width="2" height="3" fill="#475569" />
      {/* Label area bottom */}
      <rect x="3" y="8" width="10" height="6" fill="#f8fafc" />
      <rect x="4" y="9" width="8" height="1" fill="#ec4899" />
      <rect x="4" y="11" width="6" height="1" fill="#94a3b8" />
    </svg>
  );
}

export function PixelBook({ size = 32, color = '#ef4444' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" style={{ shapeRendering: 'crispEdges' }}>
      {/* Book Cover */}
      <rect x="3" y="2" width="10" height="12" fill={color} />
      <rect x="2" y="3" width="1" height="11" fill="#7f1d1d" />
      {/* Gold embossed rune */}
      <rect x="7" y="5" width="2" height="4" fill="#fbbf24" />
      <rect x="6" y="6" width="4" height="2" fill="#fbbf24" />
      {/* Book pages edge */}
      <rect x="12" y="3" width="2" height="10" fill="#fef08a" />
      <rect x="4" y="13" width="9" height="1" fill="#fef08a" />
      {/* Bookmark ribbon */}
      <rect x="7" y="13" width="2" height="2" fill="#3b82f6" />
    </svg>
  );
}

export function PixelController({ size = 32, color = '#10b981' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" style={{ shapeRendering: 'crispEdges' }}>
      {/* Console casing */}
      <rect x="2" y="4" width="12" height="9" fill={color} />
      {/* Screen */}
      <rect x="4" y="5" width="8" height="4" fill="#064e3b" />
      <rect x="5" y="6" width="6" height="2" fill="#34d399" />
      {/* D-Pad */}
      <rect x="4" y="10" width="3" height="1" fill="#064e3b" />
      <rect x="5" y="9" width="1" height="3" fill="#064e3b" />
      {/* Action buttons */}
      <rect x="10" y="10" width="1" height="1" fill="#f43f5e" />
      <rect x="11" y="11" width="1" height="1" fill="#fbbf24" />
    </svg>
  );
}

export function PixelPlant({ size = 32 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" style={{ shapeRendering: 'crispEdges' }}>
      {/* Cactus stems */}
      <rect x="7" y="2" width="2" height="8" fill="#15803d" />
      <rect x="4" y="5" width="2" height="4" fill="#22c55e" />
      <rect x="5" y="7" width="2" height="2" fill="#22c55e" />
      <rect x="10" y="4" width="2" height="4" fill="#22c55e" />
      <rect x="9" y="6" width="2" height="2" fill="#22c55e" />
      {/* Flower pink dot */}
      <rect x="7" y="1" width="2" height="1" fill="#f43f5e" />
      {/* Terracotta Pot */}
      <rect x="4" y="10" width="8" height="1" fill="#c2410c" />
      <rect x="5" y="11" width="6" height="4" fill="#ea580c" />
      <rect x="6" y="14" width="4" height="1" fill="#9a3412" />
    </svg>
  );
}

export function PixelLavaLamp({ size = 32, isDark = true }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" style={{ shapeRendering: 'crispEdges' }}>
      {/* Metal cap */}
      <rect x="6" y="1" width="4" height="2" fill="#64748b" />
      {/* Glass chamber */}
      <rect x="5" y="3" width="6" height="9" fill={isDark ? '#31103f' : '#fae8ff'} />
      {/* Lava blobs */}
      <rect x="7" y="4" width="2" height="2" fill="#ff007f" />
      <rect x="6" y="7" width="3" height="3" fill="#ff4d00" />
      <rect x="7" y="11" width="2" height="1" fill="#ff007f" />
      {/* Metal base */}
      <rect x="5" y="12" width="6" height="2" fill="#64748b" />
      <rect x="4" y="14" width="8" height="1" fill="#475569" />
    </svg>
  );
}

export function PixelFolder({ size = 36 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" style={{ shapeRendering: 'crispEdges' }}>
      {/* Folder back tab */}
      <rect x="2" y="2" width="5" height="2" fill="#d97706" />
      <rect x="2" y="2" width="4" height="1" fill="#f59e0b" />
      {/* Paper sticking out */}
      <rect x="5" y="3" width="7" height="4" fill="#ffffff" />
      <rect x="7" y="4" width="4" height="1" fill="#94a3b8" />
      <rect x="6" y="6" width="5" height="1" fill="#cbd5e1" />
      {/* Folder front body */}
      <rect x="1" y="5" width="14" height="9" fill="#f59e0b" />
      <rect x="2" y="6" width="12" height="7" fill="#fbbf24" />
      {/* White label on folder front */}
      <rect x="4" y="8" width="8" height="3" fill="#fef08a" />
      <rect x="5" y="9" width="6" height="1" fill="#b45309" />
      {/* Folder bottom shadow */}
      <rect x="1" y="14" width="14" height="1" fill="#b45309" />
    </svg>
  );
}

export function PixelStudyResources({ size = 36 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" style={{ shapeRendering: 'crispEdges' }}>
      {/* Pixel Stack of Study Textbooks / Knowledge Tome */}
      {/* Top book: Blue / Cyan cover */}
      <rect x="3" y="2" width="9" height="3" fill="#2563eb" />
      <rect x="4" y="3" width="7" height="1" fill="#60a5fa" />
      <rect x="12" y="2" width="2" height="3" fill="#fef08a" />
      {/* Middle book: Purple cover with ribbon */}
      <rect x="2" y="6" width="11" height="3" fill="#7c3aed" />
      <rect x="3" y="7" width="9" height="1" fill="#a78bfa" />
      <rect x="13" y="6" width="2" height="3" fill="#fef08a" />
      {/* Red bookmark ribbon dropping down */}
      <rect x="7" y="7" width="2" height="6" fill="#ef4444" />
      <rect x="6" y="13" width="2" height="2" fill="#b91c1c" />
      {/* Bottom book: Gold / Emerald tome */}
      <rect x="1" y="10" width="13" height="4" fill="#047857" />
      <rect x="2" y="11" width="11" height="2" fill="#10b981" />
      <rect x="14" y="10" width="1" height="4" fill="#fef08a" />
      {/* Golden star badge / glow on top */}
      <rect x="7" y="1" width="2" height="1" fill="#fbbf24" />
    </svg>
  );
}

export function PixelGoldenTrophy({ size = 36 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" style={{ shapeRendering: 'crispEdges' }}>
      {/* Sparkles around trophy */}
      <rect x="2" y="2" width="1" height="2" fill="#fef08a" />
      <rect x="1" y="3" width="3" height="1" fill="#fef08a" />
      <rect x="17" y="1" width="1" height="2" fill="#fef08a" />
      <rect x="16" y="2" width="3" height="1" fill="#fef08a" />

      {/* Trophy Handles */}
      <rect x="3" y="4" width="2" height="1" fill="#b45309" />
      <rect x="2" y="5" width="2" height="4" fill="#f59e0b" />
      <rect x="2" y="5" width="1" height="3" fill="#fde047" />
      <rect x="3" y="8" width="2" height="1" fill="#b45309" />

      <rect x="15" y="4" width="2" height="1" fill="#b45309" />
      <rect x="16" y="5" width="2" height="4" fill="#f59e0b" />
      <rect x="17" y="5" width="1" height="3" fill="#b45309" />
      <rect x="15" y="8" width="2" height="1" fill="#b45309" />

      {/* Trophy Cup Rim */}
      <rect x="5" y="3" width="10" height="2" fill="#eab308" />
      <rect x="6" y="3" width="8" height="1" fill="#fef08a" />
      <rect x="5" y="4" width="10" height="1" fill="#ca8a04" />

      {/* Trophy Bowl */}
      <rect x="5" y="5" width="10" height="4" fill="#eab308" />
      <rect x="6" y="5" width="3" height="4" fill="#fef08a" />
      <rect x="13" y="5" width="2" height="4" fill="#a16207" />
      <rect x="6" y="9" width="8" height="2" fill="#ca8a04" />
      <rect x="7" y="11" width="6" height="2" fill="#a16207" />

      {/* Star emblem on cup */}
      <rect x="9" y="6" width="2" height="3" fill="#ffffff" />
      <rect x="8" y="7" width="4" height="1" fill="#ffffff" />

      {/* Stem */}
      <rect x="9" y="13" width="2" height="2" fill="#854d0e" />
      <rect x="8" y="14" width="4" height="1" fill="#ca8a04" />

      {/* Wooden Pedestal Base */}
      <rect x="6" y="15" width="8" height="2" fill="#2e1005" />
      <rect x="5" y="17" width="10" height="2" fill="#170802" />
      {/* Gold plaque on pedestal */}
      <rect x="7" y="16" width="6" height="2" fill="#fbbf24" />
      <rect x="8" y="16" width="4" height="1" fill="#fef08a" />
    </svg>
  );
}

export function PixelSilverTrophy({ size = 36 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" style={{ shapeRendering: 'crispEdges' }}>
      {/* Sparkles around trophy */}
      <rect x="2" y="2" width="1" height="2" fill="#ffffff" />
      <rect x="1" y="3" width="3" height="1" fill="#ffffff" />
      <rect x="17" y="1" width="1" height="2" fill="#ffffff" />
      <rect x="16" y="2" width="3" height="1" fill="#ffffff" />

      {/* Trophy Handles */}
      <rect x="3" y="4" width="2" height="1" fill="#475569" />
      <rect x="2" y="5" width="2" height="4" fill="#94a3b8" />
      <rect x="2" y="5" width="1" height="3" fill="#f1f5f9" />
      <rect x="3" y="8" width="2" height="1" fill="#475569" />

      <rect x="15" y="4" width="2" height="1" fill="#475569" />
      <rect x="16" y="5" width="2" height="4" fill="#94a3b8" />
      <rect x="17" y="5" width="1" height="3" fill="#475569" />
      <rect x="15" y="8" width="2" height="1" fill="#475569" />

      {/* Trophy Cup Rim */}
      <rect x="5" y="3" width="10" height="2" fill="#cbd5e1" />
      <rect x="6" y="3" width="8" height="1" fill="#ffffff" />
      <rect x="5" y="4" width="10" height="1" fill="#94a3b8" />

      {/* Trophy Bowl */}
      <rect x="5" y="5" width="10" height="4" fill="#cbd5e1" />
      <rect x="6" y="5" width="3" height="4" fill="#f8fafc" />
      <rect x="13" y="5" width="2" height="4" fill="#64748b" />
      <rect x="6" y="9" width="8" height="2" fill="#94a3b8" />
      <rect x="7" y="11" width="6" height="2" fill="#64748b" />

      {/* LeetCode bracket emblem '< >' in cyan/silver */}
      <rect x="8" y="6" width="1" height="3" fill="#38bdf8" />
      <rect x="11" y="6" width="1" height="3" fill="#38bdf8" />
      <rect x="9" y="7" width="2" height="1" fill="#ffffff" />

      {/* Stem */}
      <rect x="9" y="13" width="2" height="2" fill="#334155" />
      <rect x="8" y="14" width="4" height="1" fill="#94a3b8" />

      {/* Sleek Slate Pedestal Base */}
      <rect x="6" y="15" width="8" height="2" fill="#0f172a" />
      <rect x="5" y="17" width="10" height="2" fill="#020617" />
      {/* Silver plaque on pedestal */}
      <rect x="7" y="16" width="6" height="2" fill="#e2e8f0" />
      <rect x="8" y="16" width="4" height="1" fill="#ffffff" />
    </svg>
  );
}

export function PixelWisprFlow({ size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Sleek black-and-white rounded squircle badge */}
      <rect x="1.5" y="1.5" width="29" height="29" rx="8" fill="#000000" stroke="#ffffff" strokeWidth="2" />
      {/* Official Wispr Flow 5-bar soundwave icon in pure white */}
      <g transform="translate(6.55, 6.625) scale(0.15)">
        <path d="M8.98429 0C4.02176 0 0 4.01378 0 8.96647V115.286C0 120.239 4.02176 124.252 8.98429 124.252C13.9468 124.252 17.9686 120.239 17.9686 115.286V8.96647C17.9686 4.01378 13.9468 0 8.98429 0Z" fill="#FFFFFF"/>
        <path d="M35.976 56.9092C31.0135 56.9092 26.9917 60.923 26.9917 65.8756V102.832C26.9917 107.785 31.0135 111.799 35.976 111.799C40.9385 111.799 44.9603 107.785 44.9603 102.832V65.8756C44.9603 60.923 40.9385 56.9092 35.976 56.9092Z" fill="#FFFFFF"/>
        <path d="M62.9645 20.3242C58.002 20.3242 53.9802 24.338 53.9802 29.2907V94.1185C53.9802 99.0712 58.002 103.085 62.9645 103.085C67.9271 103.085 71.9488 99.0712 71.9488 94.1185V29.2907C71.9488 24.338 67.9271 20.3242 62.9645 20.3242Z" fill="#FFFFFF"/>
        <path d="M89.9546 56.9092C84.9921 56.9092 80.9703 60.923 80.9703 65.8756V102.832C80.9703 107.785 84.9921 111.799 89.9546 111.799C94.9172 111.799 98.9389 107.785 98.9389 102.832V65.8756C98.9389 60.923 94.9172 56.9092 89.9546 56.9092Z" fill="#FFFFFF"/>
        <path d="M116.943 0C111.981 0 107.959 4.01378 107.959 8.96647V115.286C107.959 120.239 111.981 124.252 116.943 124.252C121.906 124.252 125.928 120.239 125.928 115.286V8.96647C125.928 4.01378 121.906 0 116.943 0Z" fill="#FFFFFF"/>
      </g>
    </svg>
  );
}
