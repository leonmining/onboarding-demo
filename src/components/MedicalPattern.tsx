export default function MedicalPattern() {
  return (
    <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
      {/* Subtle medical pattern background */}
      <defs>
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M40 0H0V40" fill="none" stroke="#2a9d8f" strokeWidth="0.5" opacity="0.1" />
        </pattern>
      </defs>
      <rect width="400" height="300" fill="url(#grid)" />

      {/* Large medical cross */}
      <g transform="translate(200, 150)" opacity="0.08">
        <rect x="-15" y="-50" width="30" height="100" rx="8" fill="#2a9d8f" />
        <rect x="-50" y="-15" width="100" height="30" rx="8" fill="#2a9d8f" />
      </g>

      {/* Stethoscope */}
      <g transform="translate(60, 40)" opacity="0.12">
        <path d="M20 0C10 0 0 10 0 20V50" stroke="#2a9d8f" strokeWidth="3" strokeLinecap="round" fill="none" />
        <path d="M40 0C50 0 60 10 60 20V50" stroke="#2a9d8f" strokeWidth="3" strokeLinecap="round" fill="none" />
        <path d="M0 50C0 70 15 80 30 80C45 80 60 70 60 50" stroke="#2a9d8f" strokeWidth="3" fill="none" />
        <circle cx="30" cy="85" r="8" stroke="#2a9d8f" strokeWidth="3" fill="none" />
      </g>

      {/* Heartbeat */}
      <path
        d="M0 200 L80 200 L100 200 L115 170 L130 230 L145 150 L160 220 L175 190 L190 200 L400 200"
        stroke="#2a9d8f"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.1"
      />

      {/* Shield with checkmark */}
      <g transform="translate(300, 50)" opacity="0.1">
        <path d="M30 0L0 15V45C0 65 12 82 30 90C48 82 60 65 60 45V15L30 0Z" stroke="#2a9d8f" strokeWidth="3" fill="none" />
        <path d="M18 42L27 51L45 33" stroke="#2a9d8f" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </g>

      {/* DNA helix */}
      <g transform="translate(330, 160)" opacity="0.1">
        <path d="M0 0C10 10 30 10 40 0" stroke="#2a9d8f" strokeWidth="2" fill="none" />
        <path d="M0 20C10 10 30 10 40 20" stroke="#2a9d8f" strokeWidth="2" fill="none" />
        <path d="M0 20C10 30 30 30 40 20" stroke="#2a9d8f" strokeWidth="2" fill="none" />
        <path d="M0 40C10 30 30 30 40 40" stroke="#2a9d8f" strokeWidth="2" fill="none" />
        <path d="M0 40C10 50 30 50 40 40" stroke="#2a9d8f" strokeWidth="2" fill="none" />
        <path d="M0 60C10 50 30 50 40 60" stroke="#2a9d8f" strokeWidth="2" fill="none" />
        <line x1="0" y1="0" x2="0" y2="60" stroke="#2a9d8f" strokeWidth="2" />
        <line x1="40" y1="0" x2="40" y2="60" stroke="#2a9d8f" strokeWidth="2" />
      </g>
    </svg>
  );
}
