import { usePlaygroundState } from './hooks/usePlaygroundState'
import { IconGrid } from './components/IconGrid'
import { Preview } from './components/Preview'
import { Controls } from './components/Controls'
import { CodeSnippet } from './components/CodeSnippet'

const tabBase: React.CSSProperties = {
  fontFamily: "'Inter', sans-serif",
  fontSize: '12px',
  fontWeight: 500,
  padding: '8px 20px',
  borderRadius: '4px 4px 0 0',
  cursor: 'pointer',
  background: 'transparent',
  position: 'relative',
  marginRight: '-1.5px',
}

export function PlaygroundApp() {
  const {
    state,
    selectIcon,
    setAnimationType,
    setSize,
    setDuration,
    setColor,
    setActiveTab,
  } = usePlaygroundState()

  const { activeTab } = state

  return (
    <div
      className="playground-shell"
      style={{
        minHeight: '100vh',
        background: '#FAFAFA',
        color: '#2C2C2C',
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <div style={{ maxWidth: '1020px', margin: '0 auto' }}>

        {/* Header */}
        <header style={{ marginBottom: '28px' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px', marginBottom: '4px' }}>
            <h1
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '22px',
                fontWeight: 700,
                margin: 0,
                color: '#2C2C2C',
              }}
            >
              spark-motion
            </h1>
            <span
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '11px',
                fontWeight: 400,
                color: '#7a7a7a',
              }}
            >
              v0.1.0
            </span>
          </div>
          <p style={{ margin: 0, fontSize: '13px', color: '#7a7a7a' }}>
            A motion-first icon library for React
          </p>
        </header>

        {/* Top section: Controls | Preview+Code */}
        <div
          className="playground-top-section"
          style={{
            display: 'grid',
            marginBottom: '28px',
          }}
        >
          {/* Left: Controls */}
          <Controls
            state={state}
            onAnimationType={setAnimationType}
            onSize={setSize}
            onDuration={setDuration}
            onColor={setColor}
          />

          {/* Right: Tabbed preview / code */}
          <div style={{ display: 'flex', flexDirection: 'column', minWidth: 0 }}>
            {/* Tab bar */}
            <div style={{ display: 'flex', marginBottom: '-2px', position: 'relative', zIndex: 2 }}>
              <button
                style={{
                  ...tabBase,
                  border: activeTab === 'preview' ? '2px solid #FF4F0F' : '1.5px solid #BFC6C4',
                  borderBottom: activeTab === 'preview' ? '2px solid #FAFAFA' : '1.5px solid #BFC6C4',
                  color: activeTab === 'preview' ? '#FF4F0F' : '#7a7a7a',
                  background: activeTab === 'preview' ? '#FAFAFA' : 'transparent',
                  zIndex: activeTab === 'preview' ? 3 : 1,
                }}
                onClick={() => setActiveTab('preview')}
              >
                Preview
              </button>
              <button
                style={{
                  ...tabBase,
                  border: activeTab === 'code' ? '2px solid #2C2C2C' : '1.5px solid #BFC6C4',
                  borderBottom: activeTab === 'code' ? '2px solid #2C2C2C' : '1.5px solid #FF4F0F',
                  color: activeTab === 'code' ? '#FAFAFA' : '#7a7a7a',
                  background: activeTab === 'code' ? '#2C2C2C' : 'transparent',
                  zIndex: activeTab === 'code' ? 3 : 1,
                }}
                onClick={() => setActiveTab('code')}
              >
                Code
              </button>
            </div>

            {/* Panel */}
            {activeTab === 'preview' ? (
              <Preview state={state} />
            ) : (
              <CodeSnippet state={state} />
            )}
          </div>
        </div>

        {/* Icon grid */}
        <IconGrid selectedIcon={state.selectedIcon} onSelect={selectIcon} />

      </div>
    </div>
  )
}
