import type { CSSProperties } from 'react'
import type { TargetAndTransition, Transition } from 'framer-motion'
import { presets, type AnimationPreset } from './presets'

export function isMountTriggeredAnimation(animation: AnimationPreset) {
  return presets[animation].mountTriggered === true
}

export function getAnimationConfig(
  animation: AnimationPreset,
  duration?: number,
  loop?: boolean,
): TargetAndTransition {
  const preset = presets[animation]
  const resolvedDuration = duration ?? preset.defaultDuration

  const transition: Transition = {
    duration: resolvedDuration,
  }

  if (animation === 'spin') {
    transition.ease = 'linear'
  }

  if (loop || isMountTriggeredAnimation(animation)) {
    transition.repeat = Infinity
  }

  return {
    ...preset.animate,
    transition,
  }
}

export function getWhileTapConfig(
  animation: AnimationPreset,
): TargetAndTransition | undefined {
  return presets[animation].whileTap
}

export function getIconInteractionStyle(
  isInteractive: boolean,
): CSSProperties {
  return {
    cursor: isInteractive ? 'pointer' : 'default',
    display: 'block',
    outline: 'none',
    WebkitTapHighlightColor: 'transparent',
    touchAction: 'manipulation',
  }
}
