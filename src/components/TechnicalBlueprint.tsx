
import React from 'react';

export const TechnicalBlueprint: React.FC<React.SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 800 600"
        className={className}
        fill="none"
        {...props}
    >
        <defs>
            <pattern id="cartoon-grid" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
                <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#EAEAEA" strokeWidth="2" />
            </pattern>
        </defs>

        {/* Background: Graph Paper Look */}
        <rect width="100%" height="100%" fill="#F8F9FA" />
        <rect width="100%" height="100%" fill="url(#cartoon-grid)" opacity="0.5" />

        {/* --- CONNECTIONS (Pipes) --- */}
        {/* Thick black outline for pipes */}
        <path
            d="M 160 160 C 250 160, 250 300, 360 300"
            stroke="#212529" strokeWidth="12" strokeLinecap="round" fill="none"
        />
        <path
            d="M 160 440 C 250 440, 250 300, 360 300"
            stroke="#212529" strokeWidth="12" strokeLinecap="round" fill="none"
        />
        <path
            d="M 440 300 C 550 300, 550 160, 640 160"
            stroke="#212529" strokeWidth="12" strokeLinecap="round" fill="none"
        />
        <path
            d="M 440 300 C 550 300, 550 440, 640 440"
            stroke="#212529" strokeWidth="12" strokeLinecap="round" fill="none"
        />

        {/* Inner color for pipes (The "Liquid") */}
        <path
            d="M 160 160 C 250 160, 250 300, 360 300"
            stroke="#EAEAEA" strokeWidth="6" strokeLinecap="round" fill="none"
        />
        <path
            d="M 160 440 C 250 440, 250 300, 360 300"
            stroke="#EAEAEA" strokeWidth="6" strokeLinecap="round" fill="none"
        />
        <path
            d="M 440 300 C 550 300, 550 160, 640 160"
            stroke="#EAEAEA" strokeWidth="6" strokeLinecap="round" fill="none"
        />
        <path
            d="M 440 300 C 550 300, 550 440, 640 440"
            stroke="#EAEAEA" strokeWidth="6" strokeLinecap="round" fill="none"
        />

        {/* Moving Particles (Cartoon Blobs) */}
        {/* Input 1 (Top Left - Yellow) */}
        <circle r="6" fill="#212529" stroke="#FACC00" strokeWidth="3">
            <animateMotion path="M 160 160 C 250 160, 250 300, 360 300" dur="2s" repeatCount="indefinite" />
        </circle>

        {/* Input 2 (Bottom Left - Yellow) */}
        <circle r="6" fill="#212529" stroke="#FACC00" strokeWidth="3">
            <animateMotion path="M 160 440 C 250 440, 250 300, 360 300" dur="2s" begin="1s" repeatCount="indefinite" />
        </circle>

        {/* Output 1 (Top Right - Blue - To Chat) */}
        <circle r="6" fill="#212529" stroke="#0505E3" strokeWidth="3">
            <animateMotion path="M 440 300 C 550 300, 550 160, 640 160" dur="2s" begin="0.5s" repeatCount="indefinite" />
        </circle>

        {/* Output 2 (Bottom Right - Blue - To Dashboard) */}
        <circle r="6" fill="#212529" stroke="#0505E3" strokeWidth="3">
            <animateMotion path="M 440 300 C 550 300, 550 440, 640 440" dur="2s" begin="1.5s" repeatCount="indefinite" />
        </circle>


        {/* --- NODES --- */}

        {/* Node 1: Document (Top Left) */}
        <g transform="translate(100, 110)">
            {/* Hard Shadow */}
            <rect x="10" y="10" width="80" height="100" rx="4" fill="#212529" opacity="0.2" />
            <rect x="5" y="5" width="80" height="100" rx="4" fill="#212529" />

            {/* Main Body */}
            <path d="M0 0 H60 L80 20 V100 H0 V0 Z" fill="white" stroke="#212529" strokeWidth="4" strokeLinejoin="round" />
            {/* Fold */}
            <path d="M60 0 V20 H80" fill="#EAEAEA" stroke="#212529" strokeWidth="4" strokeLinejoin="round" />
            {/* Lines */}
            <line x1="15" y1="40" x2="65" y2="40" stroke="#0505E3" strokeWidth="4" strokeLinecap="round" />
            <line x1="15" y1="55" x2="65" y2="55" stroke="#212529" strokeWidth="4" strokeLinecap="round" opacity="0.2" />
            <line x1="15" y1="70" x2="45" y2="70" stroke="#212529" strokeWidth="4" strokeLinecap="round" opacity="0.2" />
            {/* Badge */}
            <circle cx="0" cy="0" r="15" fill="#FACC00" stroke="#212529" strokeWidth="3" />
            <text x="0" y="5" textAnchor="middle" fontFamily="sans-serif" fontWeight="900" fontSize="14" fill="#212529">1</text>
        </g>

        {/* Node 2: Database (Bottom Left) */}
        <g transform="translate(100, 390)">
            {/* Hard Shadow */}
            <ellipse cx="45" cy="95" rx="40" ry="15" fill="#212529" opacity="0.2" />

            {/* Body */}
            <path d="M0 20 V80 C0 95 80 95 80 80 V20" fill="white" stroke="#212529" strokeWidth="4" />
            <ellipse cx="40" cy="20" rx="40" ry="15" fill="#EAEAEA" stroke="#212529" strokeWidth="4" />
            <path d="M0 50 C0 65 80 65 80 50" fill="none" stroke="#212529" strokeWidth="4" />

            {/* Decoration */}
            <circle cx="20" cy="70" r="4" fill="#0505E3" />
            <circle cx="35" cy="70" r="4" fill="#212529" opacity="0.2" />
        </g>


        {/* --- CENTER: BEEFIRST LOGO --- */}
        <g transform="translate(360, 260)">
            {/* Hard Shadow matching the logo shape */}
            <polygon
                points="50,0 93,25 93,75 50,100 7,75 7,25"
                fill="#212529"
                opacity="0.2"
                transform="translate(15, 15) scale(1.1)"
            />

            {/* The Actual Logo */}
            {/* Nested SVG to handle the logo's viewbox */}
            <image href="/logo_hex.svg" x="0" y="0" width="110" height="110" />
        </g>


        {/* --- RIGHT: OUTPUTS --- */}

        {/* Node 3: Chat Bubble (Top Right) */}
        <g transform="translate(620, 120)">
            {/* Shadow */}
            <path d="M10 10 H90 V70 H30 L10 90 V10 Z" fill="#212529" opacity="0.2" transform="translate(5, 5)" />

            {/* Main Bubble */}
            <path d="M0 0 H100 V70 H30 L0 100 V0 Z" fill="#0505E3" stroke="#212529" strokeWidth="4" strokeLinejoin="round" />

            {/* Text Lines */}
            <line x1="20" y1="25" x2="80" y2="25" stroke="white" strokeWidth="6" strokeLinecap="round" />
            <line x1="20" y1="45" x2="60" y2="45" stroke="white" strokeWidth="6" strokeLinecap="round" opacity="0.6" />

            {/* Avatar Dot */}
            <circle cx="100" cy="0" r="12" fill="#FACC00" stroke="#212529" strokeWidth="3" />
        </g>

        {/* Node 4: Graph (Bottom Right) */}
        <g transform="translate(620, 400)">
            {/* Shadow */}
            <rect x="5" y="5" width="100" height="80" rx="8" fill="#212529" opacity="0.2" />

            {/* Card Bg */}
            <rect x="0" y="0" width="100" height="80" rx="8" fill="white" stroke="#212529" strokeWidth="4" />

            {/* Bars */}
            <rect x="15" y="40" width="15" height="30" fill="#EAEAEA" stroke="#212529" strokeWidth="3" />
            <rect x="42" y="25" width="15" height="45" fill="#EAEAEA" stroke="#212529" strokeWidth="3" />
            <rect x="69" y="10" width="15" height="60" fill="#FACC00" stroke="#212529" strokeWidth="3" />

            {/* Arrow */}
            <path d="M90 5 L105 -10 M105 -10 L95 -10 M105 -10 L105 0" stroke="#0505E3" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        </g>

    </svg>
);
