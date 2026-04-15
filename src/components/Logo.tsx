interface LogoProps {
  className?: string
  size?: number
}

export default function Logo({ className = '', size = 56 }: LogoProps) {
  const w = size * 0.82
  const h = size

  return (
    <svg
      width={w}
      height={h}
      viewBox="0 0 82 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Pani&Forno logo"
    >
      {/* Badge / shield shape */}
      <path
        d="M4 8 C4 4 8 1 12 1 L70 1 C74 1 78 4 78 8 L78 72 C78 80 41 99 41 99 C41 99 4 80 4 72 Z"
        fill="#004EB3"
      />
      {/* Left gold vertical stripe */}
      <rect x="10" y="5" width="3" height="68" rx="1.5" fill="#C8962A" />
      {/* Right gold vertical stripe */}
      <rect x="69" y="5" width="3" height="68" rx="1.5" fill="#C8962A" />

      {/* "Pani" text – red fill, white stroke */}
      <text
        x="41"
        y="42"
        textAnchor="middle"
        fontFamily="Arial Black, Arial, sans-serif"
        fontWeight="900"
        fontSize="28"
        fill="#E8132A"
        stroke="white"
        strokeWidth="2"
        paintOrder="stroke"
      >
        Pani
      </text>

      {/* "& Forno" text – white fill, small */}
      <text
        x="41"
        y="66"
        textAnchor="middle"
        fontFamily="Arial Black, Arial, sans-serif"
        fontWeight="900"
        fontSize="22"
        fill="white"
        stroke="#004EB3"
        strokeWidth="1.5"
        paintOrder="stroke"
      >
        &amp;Forno
      </text>

      {/* Gold wheat decoration */}
      <g transform="translate(17, 76) scale(0.58)">
        {/* Stem */}
        <path d="M41 0 Q45 8 50 5 Q44 12 48 18 Q42 16 44 24 Q38 20 40 28 Q34 22 38 30 Q32 26 36 34 Q30 30 34 36 Q28 32 30 40 M30 40 L42 55" stroke="#C8962A" strokeWidth="1.8" fill="none" strokeLinecap="round"/>
        {/* Grains on right */}
        <ellipse cx="50" cy="5" rx="5" ry="3" fill="#C8962A" transform="rotate(30 50 5)"/>
        <ellipse cx="48" cy="18" rx="5" ry="3" fill="#C8962A" transform="rotate(25 48 18)"/>
        <ellipse cx="44" cy="24" rx="5" ry="3" fill="#C8962A" transform="rotate(20 44 24)"/>
        <ellipse cx="40" cy="28" rx="5" ry="3" fill="#C8962A" transform="rotate(15 40 28)"/>
        <ellipse cx="36" cy="34" rx="5" ry="3" fill="#C8962A" transform="rotate(10 36 34)"/>
        <ellipse cx="34" cy="36" rx="5" ry="3" fill="#C8962A" transform="rotate(5 34 36)"/>
        {/* Grains on left */}
        <ellipse cx="32" cy="5" rx="5" ry="3" fill="#C8962A" transform="rotate(-30 32 5)"/>
        <ellipse cx="34" cy="18" rx="5" ry="3" fill="#C8962A" transform="rotate(-25 34 18)"/>
        <ellipse cx="38" cy="24" rx="5" ry="3" fill="#C8962A" transform="rotate(-20 38 24)"/>
        <ellipse cx="42" cy="28" rx="5" ry="3" fill="#C8962A" transform="rotate(-15 42 28)"/>
        <ellipse cx="46" cy="34" rx="5" ry="3" fill="#C8962A" transform="rotate(-10 46 34)"/>
      </g>
    </svg>
  )
}
