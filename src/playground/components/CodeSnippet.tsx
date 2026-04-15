import { useState } from 'react'
import type { PlaygroundState } from '../hooks/usePlaygroundState'
import { iconMap } from '../data/icons'

function buildSnippet(state: PlaygroundState): string {
  const { selectedIcon, animationType, size, duration, color } = state
  const icon = iconMap[selectedIcon]

  const props: string[] = []

  if (animationType === 'interactive' || animationType === 'loop') {
    props.push('  animated')
  }
  if (size !== 24) props.push(`  size={${size}}`)
  if (duration !== icon.defaultDuration) props.push(`  duration={${duration.toFixed(1)}}`)
  if (color !== 'currentColor' && color !== '#000000') props.push(`  color="${color}"`)
  if (animationType === 'loop') props.push('  loop')

  if (props.length === 0) return `<${selectedIcon} />`
  return [`<${selectedIcon}`, ...props, '/>'].join('\n')
}

// ── Token types ───────────────────────────────────────────────────────────────

type TokenKind = 'keyword' | 'tag' | 'prop' | 'string' | 'number' | 'punct' | 'plain'

interface Token {
  kind: TokenKind
  text: string
}

// VS Code-inspired colors on dark background
const TOKEN_COLORS: Record<TokenKind, string> = {
  keyword: '#569CD6',
  tag:     '#4EC9B0',
  prop:    '#9CDCFE',
  string:  '#CE9178',
  number:  '#B5CEA8',
  punct:   '#808080',
  plain:   '#D4D4D4',
}

function tokeniseLine(line: string): Token[] {
  if (line === '') return [{ kind: 'plain', text: '' }]
  if (line === '/>') return [{ kind: 'punct', text: '/>' }]

  // import { X } from 'spark-motion'
  if (line.startsWith('import')) {
    const nameMatch = line.match(/\{ (\w+) \}/)
    const name = nameMatch ? nameMatch[1] : ''
    return [
      { kind: 'keyword', text: 'import' },
      { kind: 'punct',   text: ' { ' },
      { kind: 'tag',     text: name },
      { kind: 'punct',   text: ' } ' },
      { kind: 'keyword', text: 'from' },
      { kind: 'punct',   text: ' ' },
      { kind: 'string',  text: "'spark-motion'" },
    ]
  }

  // <ComponentName (opening tag line)
  if (/^<\w+$/.test(line)) {
    return [
      { kind: 'punct', text: '<' },
      { kind: 'tag',   text: line.slice(1) },
    ]
  }

  // <ComponentName /> (single-line self-closing)
  if (/^<\w.* \/>$/.test(line)) {
    const name = line.slice(1, line.indexOf(' '))
    return [
      { kind: 'punct', text: '<' },
      { kind: 'tag',   text: name },
      { kind: 'punct', text: ' />' },
    ]
  }

  const trimmed = line.trimStart()
  const indent = line.slice(0, line.length - trimmed.length)
  const tokens: Token[] = indent ? [{ kind: 'plain', text: indent }] : []

  // Boolean prop: animated, loop
  if (/^(animated|loop)$/.test(trimmed)) {
    tokens.push({ kind: 'prop', text: trimmed })
    return tokens
  }

  // String prop:  animation="..."  color="..."
  const strM = trimmed.match(/^(\w+)=(".*")$/)
  if (strM) {
    tokens.push({ kind: 'prop',   text: strM[1] })
    tokens.push({ kind: 'punct',  text: '=' })
    tokens.push({ kind: 'string', text: strM[2] })
    return tokens
  }

  // Number prop:  size={48}  duration={1.0}
  const numM = trimmed.match(/^(\w+)=\{([\d.]+)\}$/)
  if (numM) {
    tokens.push({ kind: 'prop',   text: numM[1] })
    tokens.push({ kind: 'punct',  text: '={' })
    tokens.push({ kind: 'number', text: numM[2] })
    tokens.push({ kind: 'punct',  text: '}' })
    return tokens
  }

  tokens.push({ kind: 'plain', text: trimmed })
  return tokens
}

// ── Icons ─────────────────────────────────────────────────────────────────────

function CopyIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#FDFDFD"
      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#B5CEA8"
      strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

// ─────────────────────────────────────────────────────────────────────────────

interface Props {
  state: PlaygroundState
}

export function CodeSnippet({ state }: Props) {
  const [copied, setCopied] = useState(false)

  const importLine = `import { ${state.selectedIcon} } from 'spark-motion'`
  const snippet = buildSnippet(state)
  const fullCode = `${importLine}\n\n${snippet}`
  const lines = fullCode.split('\n')

  function handleCopy() {
    void navigator.clipboard.writeText(fullCode)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <div
      style={{
        background: '#121212',
        border: '1.5px solid #121212',
        borderRadius: '0 4px 4px 4px',
        minHeight: '240px',
        padding: '14px 18px',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '8px' }}>
        <button
          onClick={handleCopy}
          style={{ background: 'transparent', border: 'none', cursor: 'pointer', padding: '2px', opacity: copied ? 1 : 0.5, display: 'flex', alignItems: 'center' }}
          title="Copy to clipboard"
        >
          {copied ? <CheckIcon /> : <CopyIcon />}
        </button>
      </div>

      <pre
        style={{
          margin: 0,
          fontFamily: "'DM Sans', monospace",
          fontSize: '13px',
          lineHeight: '1.7',
          flex: 1,
        }}
      >
        {lines.map((line, i) => (
          <div key={i}>
            {line === '' ? (
              <br />
            ) : (
              tokeniseLine(line).map((tok, j) => (
                <span key={j} style={{ color: TOKEN_COLORS[tok.kind] }}>
                  {tok.text}
                </span>
              ))
            )}
          </div>
        ))}
      </pre>
    </div>
  )
}
