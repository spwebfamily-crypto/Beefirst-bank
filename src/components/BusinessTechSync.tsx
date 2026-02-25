
import React from 'react';
import { BeeFirstLogo } from './BeeFirstLogo';

export const BusinessTechSync: React.FC<React.SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 800 450"
    className={className}
    fill="none"
    {...props}
  >
    <defs>
      {/* --- GRADIENTS FOR MATERIALS --- */}

      {/* Anthracite Metal Body */}
      <linearGradient id="grad-metal-body" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#2B3035" />
        <stop offset="50%" stopColor="#3E444A" />
        <stop offset="100%" stopColor="#212529" />
      </linearGradient>

      {/* Metal Top Surface (Lighter) */}
      <linearGradient id="grad-metal-top" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#495057" />
        <stop offset="100%" stopColor="#343A40" />
      </linearGradient>

      {/* Screen Glass */}
      <linearGradient id="grad-screen" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#1a1d20" />
        <stop offset="100%" stopColor="#000000" />
      </linearGradient>

      {/* Yellow Energy (Strategy) */}
      <linearGradient id="grad-yellow" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#FACC00" />
        <stop offset="100%" stopColor="#D4AD00" />
      </linearGradient>

      {/* Blue Energy (Tech) */}
      <linearGradient id="grad-blue" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#0505E3" />
        <stop offset="100%" stopColor="#0404B5" />
      </linearGradient>

      {/* Floor Platform */}
      <radialGradient id="grad-platform" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
        <stop offset="0%" stopColor="#E9ECEF" />
        <stop offset="100%" stopColor="#DEE2E6" />
      </radialGradient>

      {/* --- FILTERS --- */}
      <filter id="drop-shadow-3d" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur in="SourceAlpha" stdDeviation="4" />
        <feOffset dx="0" dy="8" result="offsetblur" />
        <feComponentTransfer>
          <feFuncA type="linear" slope="0.3" />
        </feComponentTransfer>
        <feMerge>
          <feMergeNode />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>

      <filter id="glow-blue">
        <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
        <feMerge>
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>

    {/* --- BACKGROUND GRID --- */}
    <rect width="100%" height="100%" fill="#F8F9FA" />
    <path d="M0 400 L800 400" stroke="#EAEAEA" strokeWidth="2" />
    <path d="M0 350 L800 350" stroke="#EAEAEA" strokeWidth="1" opacity="0.5" />
    <path d="M0 300 L800 300" stroke="#EAEAEA" strokeWidth="1" opacity="0.3" />


    {/* --- MAIN PLATFORM (Base) --- */}
    <g transform="translate(400, 360)">
      {/* Shadow */}
      <ellipse cx="0" cy="20" rx="360" ry="60" fill="black" opacity="0.1" filter="url(#drop-shadow-3d)" />
      {/* Top Surface */}
      <ellipse cx="0" cy="0" rx="350" ry="50" fill="url(#grad-platform)" stroke="#CED4DA" strokeWidth="2" />
      {/* Thickness */}
      <path d="M-350 0 A350 50 0 0 0 350 0 V15 A350 50 0 0 1 -350 15 Z" fill="#ADB5BD" />
    </g>


    {/* --- CABLES (Connecting Units to Center) --- */}
    <g transform="translate(0,0)" filter="url(#drop-shadow-3d)">
      {/* Left Cable (Strategy -> Core) */}
      <path d="M 230 280 C 260 280, 280 340, 340 340" stroke="#212529" strokeWidth="14" fill="none" />
      <path d="M 230 280 C 260 280, 280 340, 340 340" stroke="#FACC00" strokeWidth="4" strokeDasharray="10 5" fill="none">
        <animate attributeName="stroke-dashoffset" from="100" to="0" dur="2s" repeatCount="indefinite" />
      </path>

      {/* Right Cable (Tech -> Core) */}
      <path d="M 570 280 C 540 280, 520 340, 460 340" stroke="#212529" strokeWidth="14" fill="none" />
      <path d="M 570 280 C 540 280, 520 340, 460 340" stroke="#0505E3" strokeWidth="4" strokeDasharray="10 5" fill="none">
        <animate attributeName="stroke-dashoffset" from="0" to="100" dur="2s" repeatCount="indefinite" />
      </path>
    </g>


    {/* --- LEFT UNIT: STRATEGY CONSOLE (3D Perspective) --- */}
    <g transform="translate(100, 140)">
      {/* Base Stand Shadow */}
      <ellipse cx="80" cy="180" rx="60" ry="15" fill="black" opacity="0.2" />

      {/* Main Console Body (Front Face) */}
      <path d="M20 40 H140 L130 180 H30 Z" fill="url(#grad-metal-body)" stroke="#212529" strokeWidth="1" />
      {/* Side Face (Left - for 3D depth) */}
      <path d="M20 40 L30 180 L20 170 L10 50 Z" fill="#181B1E" />

      {/* Screen Bezel */}
      <rect x="25" y="50" width="110" height="80" rx="4" fill="#111" stroke="#343A40" strokeWidth="2" />

      {/* Screen Glass */}
      <rect x="30" y="55" width="100" height="70" fill="url(#grad-screen)" />

      {/* Data Visualization on Screen - UPDATED: Removed Line */}
      <g opacity="0.9">
        <rect x="35" y="100" width="10" height="20" fill="#FACC00" />
        <rect x="50" y="85" width="10" height="35" fill="#FACC00" />
        <rect x="65" y="70" width="10" height="50" fill="#FACC00" />
        <rect x="80" y="90" width="10" height="30" fill="#6C757D" />
      </g>

      {/* Console Desk (Keyboard area) */}
      <path d="M15 130 H145 L155 160 H5 Z" fill="url(#grad-metal-top)" />
      <rect x="40" y="135" width="80" height="15" fill="#212529" rx="2" /> {/* Keyboard */}

      {/* Top Label */}
      <path d="M40 20 H120 V40 H40 Z" fill="#212529" />
      <text x="80" y="34" textAnchor="middle" fill="white" fontSize="10" fontFamily="sans-serif" fontWeight="bold" letterSpacing="1">STRATEGY</text>
    </g>


    {/* --- RIGHT UNIT: TECHNOLOGY SERVER (3D Perspective) --- */}
    <g transform="translate(540, 110)">
      {/* Base Shadow */}
      <rect x="10" y="240" width="120" height="20" rx="10" fill="black" opacity="0.2" />

      {/* Main Tower Body (Front) */}
      <rect x="20" y="20" width="100" height="220" rx="4" fill="url(#grad-metal-body)" stroke="#212529" strokeWidth="1" />
      {/* Side Face (Right - for 3D depth) */}
      <path d="M120 20 L120 240 L140 230 L140 10 Z" fill="#181B1E" />
      {/* Top Face */}
      <path d="M20 20 L40 10 H140 L120 20 Z" fill="url(#grad-metal-top)" />

      {/* Server Racks / Blades */}
      <g transform="translate(30, 40)">
        {/* Rack 1 */}
        <rect x="0" y="0" width="80" height="30" rx="2" fill="#111" stroke="#0505E3" strokeWidth="1" />
        <circle cx="10" cy="15" r="3" fill="#00FF00" filter="url(#glow-blue)" />
        <circle cx="20" cy="15" r="3" fill="#0505E3" />
        <rect x="40" y="10" width="30" height="10" fill="#333" rx="1" />

        {/* Rack 2 */}
        <rect x="0" y="40" width="80" height="30" rx="2" fill="#111" stroke="#0505E3" strokeWidth="1" />
        <circle cx="10" cy="55" r="3" fill="#00FF00" filter="url(#glow-blue)">
          <animate attributeName="opacity" values="1;0.3;1" dur="0.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="20" cy="55" r="3" fill="#0505E3" />
        <rect x="40" y="50" width="30" height="10" fill="#333" rx="1" />

        {/* Rack 3 */}
        <rect x="0" y="80" width="80" height="30" rx="2" fill="#111" stroke="#0505E3" strokeWidth="1" />
        <circle cx="10" cy="95" r="3" fill="#00FF00" filter="url(#glow-blue)" />

        {/* Cooling Vents */}
        <g transform="translate(0, 130)">
          <rect x="0" y="0" width="80" height="4" fill="#000" />
          <rect x="0" y="10" width="80" height="4" fill="#000" />
          <rect x="0" y="20" width="80" height="4" fill="#000" />
        </g>
      </g>

      {/* Top Label */}
      <path d="M30 0 H110 V20 H30 Z" fill="#212529" />
      <text x="70" y="14" textAnchor="middle" fill="white" fontSize="10" fontFamily="sans-serif" fontWeight="bold" letterSpacing="1">TECH</text>
    </g>


    {/* --- CENTER UNIT: THE CORE REACTOR (3D Cylindrical) --- */}
    <g transform="translate(325, 260)">
      {/* Base Shadow */}
      <ellipse cx="75" cy="90" rx="70" ry="20" fill="black" opacity="0.3" filter="url(#drop-shadow-3d)" />

      {/* Bottom Cylinder Cap */}
      <path d="M 0 40 A 75 25 0 0 0 150 40 V 60 A 75 25 0 0 1 0 60 Z" fill="#343A40" />

      {/* Main Cylinder Body */}
      <rect x="0" y="-40" width="150" height="80" fill="url(#grad-metal-body)" />

      {/* Glowing Center Window */}
      <rect x="20" y="-30" width="110" height="60" fill="#111" />
      <rect x="25" y="-25" width="100" height="50" fill="white" opacity="0.1" /> {/* Glass reflection */}

      {/* The Animated Pulse inside */}
      <rect x="25" y="-25" width="100" height="50" fill="url(#grad-screen)" opacity="0.5">
        <animate attributeName="opacity" values="0.4;0.7;0.4" dur="2s" repeatCount="indefinite" />
      </rect>

      {/* Logo Floating in Center - ADJUSTED FOR BETTER FIT */}
      {/* Window center is (75, 0). Reduced logo size to 32 for safety. */}
      {/* Window range y: -30 to +30. Logo range y: -8 to +24. Top gap: 22px. */}
      <g transform="translate(59, -10)">
        <image href="/logo_hex.svg" width="32" height="32" filter="url(#drop-shadow-3d)" />
      </g>

      {/* Top Cylinder Cap */}
      <ellipse cx="75" cy="-40" rx="75" ry="25" fill="url(#grad-metal-top)" stroke="#495057" strokeWidth="1" />

      {/* Top Ring Detail */}
      <ellipse cx="75" cy="-40" rx="50" ry="15" fill="#212529" />
      <circle cx="75" cy="-45" r="5" fill="#00FF00" filter="url(#glow-blue)">
        <animate attributeName="fill" values="#00FF00;#FFFFFF;#00FF00" dur="2s" repeatCount="indefinite" />
      </circle>

      {/* Connection Ports (Where cables enter) */}
      <path d="M -10 20 L 10 20 L 10 60 L -10 60 Z" fill="#343A40" /> {/* Left Port */}
      <path d="M 140 20 L 160 20 L 160 60 L 140 60 Z" fill="#343A40" /> {/* Right Port */}
    </g>

  </svg>
);
