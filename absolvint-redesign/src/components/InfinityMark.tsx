/**
 * Dekoratives SVG-Element: Das rote 3D-Infinity/Doppel-Rauten-Symbol aus dem Absolvint-Logo.
 * Verwendung: Im Hero-Hintergrund, als Abschnitt-Deko, etc.
 */
interface Props {
  className?: string
  opacity?: number
}

export default function InfinityMark({ className = 'w-32 h-20', opacity = 1 }: Props) {
  return (
    <svg
      viewBox="0 0 260 160"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ opacity }}
      aria-hidden="true"
    >
      {/* Left diamond – top face */}
      <polygon points="65,20 130,55 65,90 0,55"   fill="#E8193C" />
      {/* Left diamond – right side face */}
      <polygon points="130,55 65,90 65,130 130,95" fill="#C01530" />
      {/* Left diamond – left side face */}
      <polygon points="0,55 65,90 65,130 0,95"     fill="#D01025" />
      {/* Inner cutout – top */}
      <polygon points="65,38 108,60 65,82 22,60"   fill="#F7F7F8" />
      {/* Inner cutout – right side */}
      <polygon points="108,60 65,82 65,104 108,82"  fill="#EEEEEE" />
      {/* Inner cutout – left side */}
      <polygon points="22,60 65,82 65,104 22,82"    fill="#E8E8E8" />

      {/* Right diamond – top face */}
      <polygon points="195,20 260,55 195,90 130,55" fill="#E8193C" />
      {/* Right diamond – right side face */}
      <polygon points="260,55 195,90 195,130 260,95" fill="#C01530" />
      {/* Right diamond – left side face */}
      <polygon points="130,55 195,90 195,130 130,95" fill="#D01025" />
      {/* Inner cutout – top */}
      <polygon points="195,38 238,60 195,82 152,60"  fill="#F7F7F8" />
      {/* Inner cutout – right side */}
      <polygon points="238,60 195,82 195,104 238,82"  fill="#EEEEEE" />
      {/* Inner cutout – left side */}
      <polygon points="152,60 195,82 195,104 152,82"  fill="#E8E8E8" />

      {/* Connection bridge – top */}
      <polygon points="108,60 152,60 152,82 108,82" fill="#E8193C" />
      {/* Connection bridge – bottom */}
      <polygon points="108,82 152,82 152,104 108,104" fill="#C01530" />
    </svg>
  )
}
