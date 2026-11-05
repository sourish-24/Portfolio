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

// ============================================================
// PIXEL TECH LOGOS FOR WHITEBOARD TIER LIST (14x14)
// ============================================================

export function PixelReactIcon({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none" style={{ shapeRendering: 'crispEdges' }}>
      <rect x="6" y="6" width="2" height="2" fill="#00d8ff" />
      {/* Atom orbit pixels */}
      <rect x="5" y="2" width="4" height="1" fill="#00d8ff" />
      <rect x="5" y="11" width="4" height="1" fill="#00d8ff" />
      <rect x="2" y="5" width="1" height="4" fill="#00d8ff" />
      <rect x="11" y="5" width="1" height="4" fill="#00d8ff" />
      <rect x="3" y="3" width="2" height="1" fill="#00d8ff" />
      <rect x="9" y="3" width="2" height="1" fill="#00d8ff" />
      <rect x="3" y="10" width="2" height="1" fill="#00d8ff" />
      <rect x="9" y="10" width="2" height="1" fill="#00d8ff" />
    </svg>
  );
}

export function PixelJSIcon({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none" style={{ shapeRendering: 'crispEdges' }}>
      <rect x="1" y="1" width="12" height="12" fill="#f7df1e" />
      {/* J */}
      <rect x="4" y="7" width="1" height="3" fill="#000000" />
      <rect x="5" y="9" width="2" height="1" fill="#000000" />
      <rect x="6" y="5" width="1" height="5" fill="#000000" />
      {/* S */}
      <rect x="8" y="5" width="3" height="1" fill="#000000" />
      <rect x="8" y="6" width="1" height="1" fill="#000000" />
      <rect x="8" y="7" width="3" height="1" fill="#000000" />
      <rect x="10" y="8" width="1" height="1" fill="#000000" />
      <rect x="8" y="9" width="3" height="1" fill="#000000" />
    </svg>
  );
}

export function PixelTSIcon({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none" style={{ shapeRendering: 'crispEdges' }}>
      <rect x="1" y="1" width="12" height="12" fill="#3178c6" />
      {/* T */}
      <rect x="3" y="5" width="4" height="1" fill="#ffffff" />
      <rect x="4" y="6" width="2" height="4" fill="#ffffff" />
      {/* S */}
      <rect x="8" y="5" width="3" height="1" fill="#ffffff" />
      <rect x="8" y="6" width="1" height="1" fill="#ffffff" />
      <rect x="8" y="7" width="3" height="1" fill="#ffffff" />
      <rect x="10" y="8" width="1" height="1" fill="#ffffff" />
      <rect x="8" y="9" width="3" height="1" fill="#ffffff" />
    </svg>
  );
}

export function PixelNodeIcon({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none" style={{ shapeRendering: 'crispEdges' }}>
      {/* Green Hexagon */}
      <rect x="4" y="1" width="6" height="1" fill="#339933" />
      <rect x="2" y="2" width="10" height="10" fill="#339933" />
      <rect x="4" y="12" width="6" height="1" fill="#339933" />
      {/* N letter */}
      <rect x="4" y="4" width="2" height="6" fill="#ffffff" />
      <rect x="8" y="4" width="2" height="6" fill="#ffffff" />
      <rect x="6" y="6" width="2" height="2" fill="#ffffff" />
    </svg>
  );
}

export function PixelPythonIcon({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none" style={{ shapeRendering: 'crispEdges' }}>
      {/* Blue top snake */}
      <rect x="3" y="2" width="5" height="5" fill="#387eb8" />
      <rect x="8" y="4" width="3" height="3" fill="#387eb8" />
      <rect x="4" y="3" width="1" height="1" fill="#ffffff" />
      {/* Yellow bottom snake */}
      <rect x="6" y="7" width="5" height="5" fill="#ffe052" />
      <rect x="3" y="7" width="3" height="3" fill="#ffe052" />
      <rect x="9" y="10" width="1" height="1" fill="#000000" />
    </svg>
  );
}

export function PixelCppIcon({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none" style={{ shapeRendering: 'crispEdges' }}>
      <rect x="1" y="1" width="12" height="12" fill="#00599c" />
      {/* C */}
      <rect x="3" y="4" width="3" height="1" fill="#ffffff" />
      <rect x="3" y="5" width="1" height="4" fill="#ffffff" />
      <rect x="3" y="9" width="3" height="1" fill="#ffffff" />
      {/* ++ */}
      <rect x="7" y="6" width="3" height="1" fill="#659ad2" />
      <rect x="8" y="5" width="1" height="3" fill="#659ad2" />
      <rect x="10" y="6" width="3" height="1" fill="#659ad2" />
      <rect x="11" y="5" width="1" height="3" fill="#659ad2" />
    </svg>
  );
}

export function PixelGoIcon({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none" style={{ shapeRendering: 'crispEdges' }}>
      <rect x="1" y="1" width="12" height="12" fill="#00add8" />
      {/* G */}
      <rect x="3" y="4" width="3" height="1" fill="#ffffff" />
      <rect x="3" y="5" width="1" height="4" fill="#ffffff" />
      <rect x="3" y="9" width="4" height="1" fill="#ffffff" />
      <rect x="6" y="7" width="1" height="2" fill="#ffffff" />
      <rect x="5" y="7" width="1" height="1" fill="#ffffff" />
      {/* O */}
      <rect x="8" y="4" width="3" height="6" fill="#ffffff" />
      <rect x="9" y="5" width="1" height="4" fill="#00add8" />
    </svg>
  );
}

export function PixelMongoIcon({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none" style={{ shapeRendering: 'crispEdges' }}>
      {/* Leaf shape */}
      <rect x="6" y="1" width="2" height="2" fill="#47a248" />
      <rect x="5" y="3" width="4" height="4" fill="#47a248" />
      <rect x="4" y="6" width="6" height="5" fill="#47a248" />
      <rect x="6" y="11" width="2" height="2" fill="#3fa037" />
      {/* Leaf center vein */}
      <rect x="6" y="3" width="1" height="8" fill="#ffffff" />
    </svg>
  );
}

export function PixelPostgresIcon({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none" style={{ shapeRendering: 'crispEdges' }}>
      <rect x="1" y="1" width="12" height="12" fill="#336791" />
      <rect x="3" y="4" width="6" height="6" fill="#ffffff" />
      <rect x="4" y="5" width="1" height="1" fill="#336791" />
      <rect x="7" y="6" width="4" height="4" fill="#ffffff" />
      <rect x="9" y="8" width="1" height="3" fill="#ffffff" />
    </svg>
  );
}

export function PixelDockerIcon({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none" style={{ shapeRendering: 'crispEdges' }}>
      <rect x="1" y="1" width="12" height="12" fill="#0db7ed" />
      {/* Containers */}
      <rect x="3" y="4" width="2" height="2" fill="#ffffff" />
      <rect x="6" y="4" width="2" height="2" fill="#ffffff" />
      <rect x="4" y="6" width="2" height="2" fill="#ffffff" />
      <rect x="7" y="6" width="2" height="2" fill="#ffffff" />
      {/* Whale body */}
      <rect x="2" y="8" width="8" height="3" fill="#ffffff" />
      <rect x="10" y="7" width="2" height="3" fill="#ffffff" />
    </svg>
  );
}

export function PixelAWSIcon({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none" style={{ shapeRendering: 'crispEdges' }}>
      <rect x="1" y="1" width="12" height="12" fill="#232f3e" />
      {/* Letters */}
      <rect x="3" y="4" width="3" height="3" fill="#ff9900" />
      <rect x="7" y="4" width="4" height="3" fill="#ff9900" />
      {/* Orange smile curve */}
      <rect x="3" y="9" width="8" height="1" fill="#ff9900" />
      <rect x="9" y="8" width="2" height="1" fill="#ff9900" />
    </svg>
  );
}

export function PixelGitIcon({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none" style={{ shapeRendering: 'crispEdges' }}>
      <rect x="1" y="1" width="12" height="12" fill="#f05032" />
      {/* Branch nodes */}
      <rect x="4" y="4" width="2" height="2" fill="#ffffff" />
      <rect x="4" y="9" width="2" height="2" fill="#ffffff" />
      <rect x="9" y="6" width="2" height="2" fill="#ffffff" />
      {/* Branch lines */}
      <rect x="4" y="6" width="1" height="3" fill="#ffffff" />
      <rect x="5" y="7" width="4" height="1" fill="#ffffff" />
    </svg>
  );
}
