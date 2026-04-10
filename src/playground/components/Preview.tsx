import { iconMap } from '../data/icons'
import type { PlaygroundState } from '../hooks/usePlaygroundState'

interface Props {
  state: PlaygroundState
}

function GridOverlay() {
  return (
    <svg
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0 }}
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <pattern id="grid-sm" width="24" height="24" patternUnits="userSpaceOnUse">
          <path d="M 24 0 L 0 0 0 24" fill="none" stroke="#E0E3E2" strokeWidth="0.5" />
        </pattern>
        <pattern id="grid-lg" width="96" height="96" patternUnits="userSpaceOnUse">
          <rect width="96" height="96" fill="url(#grid-sm)" />
          <path d="M 96 0 L 0 0 0 96" fill="none" stroke="#D4D8D6" strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid-lg)" />
      {/* Crosshairs */}
      <line x1="50%" y1="0" x2="50%" y2="100%" stroke="#D4D8D6" strokeWidth="0.5" />
      <line x1="0" y1="50%" x2="100%" y2="50%" stroke="#D4D8D6" strokeWidth="0.5" />
      {/* Concentric circles */}
      <circle cx="50%" cy="50%" r="64" fill="none" stroke="#E0E3E2" strokeWidth="0.5" />
      <circle cx="50%" cy="50%" r="40" fill="none" stroke="#E0E3E2" strokeWidth="0.5" />
      <circle cx="50%" cy="50%" r="16" fill="none" stroke="#E0E3E2" strokeWidth="0.5" />
    </svg>
  )
}

export function Preview({ state }: Props) {
  const { selectedIcon, animation, size, duration, color, animationType } = state
  const Icon = iconMap[selectedIcon].component

  const animated = animationType === 'animated' || animationType === 'loop'
  const loop = animationType === 'loop'

  // Key forces remount (re-triggers mount animations) when relevant props change
  const iconKey = `${selectedIcon}-${animation}-${animationType}`

  return (
    <div
      style={{
        background: '#FAFAFA',
        border: '2px solid #FF4F0F',
        borderRadius: '0 4px 4px 4px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '240px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <GridOverlay />

      <div style={{ position: 'relative', zIndex: 1 }}>
        <Icon
          key={iconKey}
          size={size}
          color={color}
          animation={animation}
          duration={duration}
          animated={animated}
          loop={loop}
        />
      </div>

      <span
        style={{
          position: 'absolute',
          top: '12px',
          left: '14px',
          fontSize: '10px',
          fontFamily: "'Inter', sans-serif",
          fontWeight: 500,
          color: '#7a7a7a',
          textTransform: 'uppercase',
          letterSpacing: '0.4px',
          zIndex: 1,
        }}
      >
        {selectedIcon}
      </span>
      <span
        style={{
          position: 'absolute',
          bottom: '12px',
          right: '14px',
          fontSize: '10px',
          fontFamily: "'Inter', sans-serif",
          fontWeight: 500,
          color: '#7a7a7a',
          textTransform: 'uppercase',
          letterSpacing: '0.4px',
          zIndex: 1,
        }}
      >
        {size}px
      </span>
      {animationType === 'animated' && (
        <span
          style={{
            position: 'absolute',
            bottom: '12px',
            left: '14px',
            fontSize: '10px',
            fontFamily: "'Inter', sans-serif",
            fontWeight: 400,
            color: '#7a7a7a',
            letterSpacing: '0.2px',
            zIndex: 1,
          }}
        >
          click to animate
        </span>
      )}
    </div>
  )
}
