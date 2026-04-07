interface Props {
  className?: string
  dark?: boolean
}

export default function AbsIntLogo({ className = 'h-10', dark = false }: Props) {
  const textColor = dark ? '#FFFFFF' : '#1A1A2E'
  return (
    <svg
      viewBox="0 0 220 56"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="AbsInt"
      role="img"
    >
      {/* Geometric red diamond – brand mark */}
      <polygon points="14,28 28,6  42,28 28,50" fill="#C8102E" />
      <polygon points="28,6  42,28 56,6"         fill="#A50D25" opacity="0.65" />
      <polygon points="14,28 28,50  0,50"        fill="#A50D25" opacity="0.35" />

      {/* Wordmark */}
      <text
        x="66"
        y="38"
        fontFamily="Inter, system-ui, sans-serif"
        fontWeight="800"
        fontSize="26"
        fill={textColor}
        letterSpacing="-0.8"
      >
        AbsInt
      </text>
    </svg>
  )
}
