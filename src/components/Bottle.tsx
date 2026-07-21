"use client";

import { motion } from "framer-motion";

export default function Bottle({ className = "" }: { className?: string }) {
  return (
    <motion.svg
      viewBox="0 0 220 420"
      className={className}
      initial={{ opacity: 0, y: 40, rotate: -3 }}
      animate={{ opacity: 1, y: 0, rotate: 0 }}
      transition={{ duration: 1, ease: [0.21, 0.47, 0.32, 0.98] }}
      role="img"
      aria-label="Diri Oils cold-pressed mustard oil bottle"
    >
      <defs>
        <linearGradient id="glass" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f2d675" />
          <stop offset="45%" stopColor="#dca818" />
          <stop offset="100%" stopColor="#b9860f" />
        </linearGradient>
        <linearGradient id="glassShine" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.55" />
          <stop offset="30%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="cap" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3a5724" />
          <stop offset="100%" stopColor="#223318" />
        </linearGradient>
        <linearGradient id="label" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fbfaf3" />
          <stop offset="100%" stopColor="#f3f1e2" />
        </linearGradient>
      </defs>

      {/* Cap */}
      <rect x="86" y="8" width="48" height="34" rx="8" fill="url(#cap)" />
      <rect x="90" y="40" width="40" height="10" rx="3" fill="#2f461f" />

      {/* Neck */}
      <path d="M92 50 h36 v22 q0 6 6 10 l6 4 v10 h-60 v-10 l6-4 q6-4 6-10 z" fill="url(#glass)" />

      {/* Body */}
      <rect x="44" y="96" width="132" height="300" rx="30" fill="url(#glass)" />
      {/* Glass shine */}
      <rect x="52" y="104" width="30" height="284" rx="16" fill="url(#glassShine)" />

      {/* Label */}
      <rect x="60" y="150" width="100" height="180" rx="16" fill="url(#label)" stroke="#e2eed4" />
      {/* Label leaf mark */}
      <path
        d="M110 176 c14 4 22 16 22 30 c-16 0 -26 -12 -26 -26 c0 14 -10 26 -26 26 c0 -14 8 -26 22 -30 c2 -1 6 -1 8 0 z"
        fill="#5f8b39"
        opacity="0.9"
      />
      <text x="110" y="242" textAnchor="middle" fontFamily="Georgia, serif" fontSize="20" fill="#223318" fontWeight="700">
        DIRI
      </text>
      <text x="110" y="262" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="8.5" letterSpacing="2" fill="#4a6f2c">
        MUSTARD OIL
      </text>
      <line x1="80" y1="278" x2="140" y2="278" stroke="#c6dcac" strokeWidth="1.5" />
      <text x="110" y="298" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="7" letterSpacing="1.5" fill="#5e6b4d">
        COLD PRESSED
      </text>
      <text x="110" y="312" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="7" letterSpacing="1.5" fill="#5e6b4d">
        KACHI GHANI
      </text>
    </motion.svg>
  );
}
