export default function MedicalHeroGraphic() {
  return (
    <svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Background circle */}
      <circle cx="250" cy="250" r="220" fill="white" fillOpacity="0.05" />
      <circle cx="250" cy="250" r="180" fill="white" fillOpacity="0.05" />

      {/* Shield */}
      <path
        d="M250 80L150 130V230C150 310 190 380 250 410C310 380 350 310 350 230V130L250 80Z"
        fill="#2a9d8f"
        fillOpacity="0.2"
        stroke="#2a9d8f"
        strokeWidth="3"
      />

      {/* Medical cross inside shield */}
      <rect x="230" y="170" width="40" height="100" rx="6" fill="#2a9d8f" fillOpacity="0.8" />
      <rect x="200" y="200" width="100" height="40" rx="6" fill="#2a9d8f" fillOpacity="0.8" />

      {/* Aesculaap staff (snake on staff) */}
      <line x1="250" y1="155" x2="250" y2="310" stroke="white" strokeWidth="3" strokeLinecap="round" />
      <path
        d="M250 180C260 185 270 190 268 200C266 210 255 212 250 210C245 208 235 212 233 222C231 232 240 237 250 235C260 233 270 238 268 248C266 258 255 260 250 258C245 256 235 260 233 270C231 280 240 285 250 283"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />

      {/* Heartbeat line */}
      <path
        d="M80 350 L160 350 L180 350 L195 320 L210 380 L225 300 L240 370 L255 340 L270 350 L420 350"
        stroke="#2a9d8f"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.6"
      />

      {/* Floating medical icons - Stethoscope */}
      <g transform="translate(80, 120)" opacity="0.5">
        <circle cx="25" cy="25" r="25" fill="white" fillOpacity="0.1" />
        <circle cx="25" cy="30" r="10" stroke="white" strokeWidth="2" fill="none" />
        <path d="M15 30V18C15 12 20 8 25 8C30 8 35 12 35 18V30" stroke="white" strokeWidth="2" fill="none" />
        <circle cx="25" cy="30" r="3" fill="white" />
      </g>

      {/* Floating medical icons - Pill */}
      <g transform="translate(380, 100)" opacity="0.4">
        <rect x="5" y="5" width="40" height="20" rx="10" stroke="white" strokeWidth="2" fill="none" transform="rotate(30, 25, 15)" />
        <line x1="25" y1="5" x2="25" y2="25" stroke="white" strokeWidth="1.5" transform="rotate(30, 25, 15)" />
      </g>

      {/* Floating medical icons - Heart */}
      <g transform="translate(390, 280)" opacity="0.4">
        <path
          d="M20 35L10 25C5 20 5 12 10 8C15 4 22 5 25 10C28 5 35 4 40 8C45 12 45 20 40 25L25 40L20 35Z"
          stroke="white"
          strokeWidth="2"
          fill="none"
          transform="scale(0.7)"
        />
      </g>

      {/* Document/Invoice icon */}
      <g transform="translate(60, 260)" opacity="0.4">
        <rect x="5" y="5" width="30" height="40" rx="3" stroke="white" strokeWidth="2" fill="none" />
        <line x1="12" y1="15" x2="28" y2="15" stroke="white" strokeWidth="1.5" />
        <line x1="12" y1="22" x2="28" y2="22" stroke="white" strokeWidth="1.5" />
        <line x1="12" y1="29" x2="22" y2="29" stroke="white" strokeWidth="1.5" />
        <path d="M22 32L26 36L34 28" stroke="#2a9d8f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </g>

      {/* Floating dots */}
      <circle cx="120" cy="400" r="4" fill="white" fillOpacity="0.2" />
      <circle cx="380" cy="420" r="6" fill="#2a9d8f" fillOpacity="0.3" />
      <circle cx="420" cy="180" r="3" fill="white" fillOpacity="0.3" />
      <circle cx="100" cy="180" r="5" fill="#2a9d8f" fillOpacity="0.2" />
      <circle cx="350" cy="380" r="4" fill="white" fillOpacity="0.15" />
    </svg>
  );
}
