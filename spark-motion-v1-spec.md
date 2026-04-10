# spark-motion — v1 Spec Sheet

> A motion-first icon library for React.

---

## Decision 1: Library Name

**spark-motion**

- npm: `npm install spark-motion`
- Flexible enough to grow beyond icons in future versions
- README tagline: "A motion-first icon library for React"

---

## Decision 2: Icons (6)

| Icon    | Category   | Natural Motion         |
|---------|------------|------------------------|
| heart   | Feedback   | double pulse           |
| bell    | Feedback   | ring, wiggle           |
| loading | Feedback   | spin, rotate           |
| play    | Action     | tap pop                |
| refresh | Action     | rotate, spin           |
| arrow   | Navigation | tap pop                |

---

## Decision 3: Animation Presets (3)

| Preset       | Motion Type          | Trigger   |
|--------------|----------------------|-----------|
| wiggle       | Quick rotational shake | configurable |
| tapPop       | Scale punch          | on click  |
| spin         | reversible rotation  | configurable  |
| doublePulse  | Two-beat scale/opacity pulse | on click  |

**v1.1 stretch goal:** `float` (gentle translateY loop)  
**v2 experimental:** burst/fireworks particle effect

---

## Decision 4: Base Props Interface

```typescript
export interface SparkMotionIconProps {
  /** Icon size in pixels. Default: 24 */
  size?: number

  /** Icon color. Default: 'currentColor' */
  color?: string

  /** SVG stroke width. Default: 2 */
  strokeWidth?: number

  /** Enable/disable animation. Default: true */
  animated?: boolean

  /** Animation preset. Default: 'wiggle' */
  animation?: 'wiggle' | 'tapPop' | 'spin' | 'doublePulse'

  /** Animation duration in seconds. Default: 0.4 */
  duration?: number

  /** Loop the animation. Default: false */
  loop?: boolean

  /** Additional CSS classes */
  className?: string

  /** Click handler */
  onClick?: () => void
}
```

---

## Tech Stack

- **React + TypeScript**
- **Framer Motion** (animation engine)
- **tsup** or **Vite library mode** (build/bundle)
- **npm** (publish)

---

## Project Structure

```
spark-motion/
  src/
    components/
      HeartIcon.tsx
      BellIcon.tsx
      StarIcon.tsx
      PlayIcon.tsx
      RefreshIcon.tsx
      ArrowIcon.tsx
    animations/
      presets.ts
      helpers.ts
    types/
      icon.ts
    index.ts
  package.json
  tsconfig.json
  README.md
  tsup.config.ts
```

---

## Phased Build Plan

### Phase 1 — Define (DONE)
Lock library name, icons, presets, and base props.

### Phase 2 — Scaffold (Codex/Claude Code)
Generate base icon component, 2-3 example icons, types, exports, build config.

### Phase 3 — Polish (Manual)
Hand-tune 2 representative icons:
- One simple icon (arrow)
- One with the most motion feel (heart or bell)

### Phase 4 — Playground (Project 3)
Consume the published/linked package in a React playground app.

### Phase 5 — Documentation
Write README and portfolio case study after shipping.

---

## Portfolio Descriptions

**Micro Motion Icon Library (spark-motion)**
> Built a reusable React + TypeScript icon package with motion-aware APIs, tree-shakeable exports, and a clean component architecture.

**Animation Playground**
> Built a React playground that consumes the published spark-motion package as a dependency, demonstrating component reuse, prop-driven animation controls, and system-level thinking.
