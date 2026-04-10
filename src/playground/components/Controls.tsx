import type { PlaygroundState, AnimationType } from '../hooks/usePlaygroundState'

const ANIM_TYPES: AnimationType[] = ['animated', 'loop', 'static']

interface Props {
  state: PlaygroundState
  onAnimationType: (t: AnimationType) => void
  onSize: (n: number) => void
  onDuration: (n: number) => void
  onColor: (c: string) => void
}

const labelStyle: React.CSSProperties = {
  fontFamily: "'Inter', sans-serif",
  fontSize: '11px',
  fontWeight: 500,
  color: '#7a7a7a',
  textTransform: 'uppercase',
  letterSpacing: '0.5px',
  marginBottom: '6px',
  display: 'block',
}

const sliderValStyle: React.CSSProperties = {
  fontFamily: "'DM Sans', sans-serif",
  fontSize: '13px',
  fontWeight: 500,
  color: '#2C2C2C',
  minWidth: '36px',
  textAlign: 'right',
}

export function Controls({ state, onAnimationType, onSize, onDuration, onColor }: Props) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>

      {/* Animation type */}
      <div>
        <span style={labelStyle}>Animation type</span>
        <div style={{ display: 'flex', gap: '4px' }}>
          {ANIM_TYPES.map((t) => {
            const active = state.animationType === t
            return (
              <button
                key={t}
                onClick={() => onAnimationType(t)}
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '12px',
                  fontWeight: 500,
                  padding: '5px 14px',
                  borderRadius: '4px',
                  border: active ? '1.5px solid #FF4F0F' : '1.5px solid #BFC6C4',
                  background: active ? '#FF4F0F' : '#FFFFFF',
                  color: active ? '#FAFAFA' : '#7a7a7a',
                  cursor: 'pointer',
                  transition: 'all 0.12s',
                }}
              >
                {t.charAt(0).toUpperCase() + t.slice(1)}
              </button>
            )
          })}
        </div>
      </div>

      {/* Color */}
      <div>
        <span style={labelStyle}>Color</span>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <label style={{ position: 'relative', cursor: 'pointer', display: 'block' }}>
            <div
              style={{
                width: '28px',
                height: '28px',
                borderRadius: '4px',
                border: '1.5px solid #BFC6C4',
                background: state.color,
                cursor: 'pointer',
              }}
            />
            <input
              type="color"
              value={state.color}
              onChange={(e) => onColor(e.target.value)}
            />
          </label>
          <span
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '13px',
              fontWeight: 500,
              color: '#2C2C2C',
            }}
          >
            {state.color.toUpperCase()}
          </span>
        </div>
      </div>

      {/* Size */}
      <div>
        <span style={labelStyle}>Size</span>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <input
            type="range"
            min={16}
            max={64}
            step={1}
            value={state.size}
            onChange={(e) => onSize(Number(e.target.value))}
            style={{
              background: `linear-gradient(
              to right,
              #2C2C2C 0%,
              #2C2C2C ${((state.size - 16) / (64 - 16)) * 100}%,
              #BFC6C4 ${((state.size - 16) / (64 - 16)) * 100}%,
              #BFC6C4 100%
              )`,
            }}
          />
          <span style={sliderValStyle}>{state.size}px</span>
        </div>
      </div>

      {/* Duration */}
      <div>
        <span style={labelStyle}>Duration</span>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <input
            type="range"
            min={0.1}
            max={2.0}
            step={0.1}
            value={state.duration}
            onChange={(e) => onDuration(Number(e.target.value))}
            style={{
              background: `linear-gradient(
              to right,
              #2C2C2C 0%,
              #2C2C2C ${((state.duration - 0.1) / (2.0 - 0.1)) * 100}%,
              #BFC6C4 ${((state.duration - 0.1) / (2.0 - 0.1)) * 100}%,
              #BFC6C4 100%
              )`,
            }}
          />
          <span style={sliderValStyle}>{state.duration.toFixed(1)}s</span>
        </div>
      </div>

    </div>
  )
}
