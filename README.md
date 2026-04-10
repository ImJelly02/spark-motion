# spark-motion

> A motion-first icon library for React.

[![npm version](https://img.shields.io/npm/v/spark-motion)](https://www.npmjs.com/package/spark-motion)
[![license](https://img.shields.io/npm/l/spark-motion)](./LICENSE)
[![bundle size](https://img.shields.io/bundlephobia/minzip/spark-motion)](https://bundlephobia.com/package/spark-motion)

Hand-drawn animated icons with a unified API. Small, expressive, and ready to drop into any React project.

## Features

- 6 hand-drawn icons with unique character
- 4 animation presets — wiggle, tapPop, doublePulse, spin
- Unified props across all icons
- Tree-shakeable ESM + CJS exports
- Full TypeScript support
- Built on Framer Motion

## Install

```bash
npm install spark-motion framer-motion
```

`framer-motion` is a peer dependency — install it alongside spark-motion if you don't have it already.

## Quick start

```tsx
import { HeartIcon } from 'spark-motion'

function App() {
  return <HeartIcon animated size={32} />
}
```

Click the icon and it plays its default animation (doublePulse for HeartIcon). Each icon ships with a sensible default preset.

## Icons

| Icon | Default animation | Description |
|------|-------------------|-------------|
| `HeartIcon` | doublePulse | Feedback / like |
| `BellIcon` | wiggle | Notification / alert |
| `PlayIcon` | tapPop | Media / action |
| `RefreshIcon` | spin | Reload / sync |
| `ArrowRightIcon` | tapPop | Navigation / direction |
| `LoadingIcon` | spin | Loading / progress |

## Animation presets

| Preset | Motion | Trigger |
|--------|--------|---------|
| `wiggle` | Rotational shake | On click |
| `tapPop` | Scale punch with press-down | On click |
| `doublePulse` | Two-beat scale + lift | On click |
| `spin` | Continuous rotation | On mount |

```tsx
<BellIcon animated animation="wiggle" />
<PlayIcon animated animation="tapPop" />
<RefreshIcon animated animation="spin" loop />
```

## Props

All icons accept the same props:

```typescript
interface SparkMotionIconProps {
  size?: number              // Default: 24
  color?: string             // Default: 'currentColor'
  strokeWidth?: number       // Default: 1.75
  animated?: boolean         // Default: false
  animation?: 'wiggle' | 'tapPop' | 'doublePulse' | 'spin'
  duration?: number          // Default: preset-based
  loop?: boolean             // Default: false
  className?: string
  onClick?: () => void
}
```

## Examples

### Static icon

```tsx
<HeartIcon size={20} color="#e74c3c" />
```

### Animated on click

```tsx
<BellIcon animated animation="wiggle" />
```

### Continuous spin

```tsx
<LoadingIcon animated animation="spin" />
```

The `spin` preset is mount-triggered — it starts animating as soon as the component renders, no click required. Add `loop` to other presets to make them repeat.

### Custom duration

```tsx
<HeartIcon animated animation="doublePulse" duration={1.2} />
```

### With click handler

```tsx
<PlayIcon
  animated
  animation="tapPop"
  onClick={() => console.log('play!')}
/>
```

## Development

```bash
git clone https://github.com/YOUR_USERNAME/spark-motion.git
cd spark-motion
npm install
npm run build    # outputs to dist/
npm run dev      # watch mode
```

## License

[TBD](./LICENSE)
