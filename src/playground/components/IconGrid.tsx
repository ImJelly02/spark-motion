import type { IconName } from '../data/icons'
import { icons } from '../data/icons'

interface Props {
  selectedIcon: IconName
  onSelect: (name: IconName) => void
}

export function IconGrid({ selectedIcon, onSelect }: Props) {
  return (
    <div>
      <p
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: '11px',
          fontWeight: 500,
          color: '#7a7a7a',
          textTransform: 'uppercase',
          letterSpacing: '0.8px',
          margin: '0 0 14px',
        }}
      >
        Icons
      </p>
      <div
        className="icon-grid"
        style={{
          display: 'grid',
        }}
      >
        {icons.map((icon) => {
          const active = selectedIcon === icon.name
          return (
            <button
              key={icon.name}
              onClick={() => onSelect(icon.name)}
              style={{
                background: '#FAFAFA',
                border: active ? '2px solid #FF4F0F' : '2px solid #BFC6C4',
                borderRadius: '4px',
                padding: '20px 8px 12px',
                textAlign: 'center',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 0,
                transition: 'border-color 0.12s',
              }}
              onMouseEnter={(e) => {
                if (!active) (e.currentTarget as HTMLButtonElement).style.borderColor = '#8a8a8a'
              }}
              onMouseLeave={(e) => {
                if (!active) (e.currentTarget as HTMLButtonElement).style.borderColor = '#BFC6C4'
              }}
            >
              <icon.component size={28} color="#2C2C2C" />
              <span
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '11px',
                  fontWeight: 500,
                  color: '#7a7a7a',
                  textTransform: 'lowercase',
                  letterSpacing: '0.3px',
                  marginTop: '10px',
                  display: 'block',
                }}
              >
                {icon.label.toLowerCase()}
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
