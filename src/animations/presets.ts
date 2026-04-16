import { animate, type TargetAndTransition } from 'motion/react'
import type { SparkMotionAnimation } from '../types/icon'

export type AnimationPreset = SparkMotionAnimation

export interface AnimationDefinition {
  animate: TargetAndTransition
  whileTap?: TargetAndTransition
  defaultDuration: number
  mountTriggered?: boolean
}

export const presets: Record<AnimationPreset, AnimationDefinition> = {
  wiggle: {
    defaultDuration: 0.4,
    animate: {
      rotate: [0, -10, 10, -6, 6, 0],
    },
  },

  tapPop: {
    defaultDuration: 0.6,
    whileTap: {
      scale: 0.9,
    },
    animate: {
      scale: [1, 1.14, 1],
    },
  },

  spin: {
    defaultDuration: 0.8,
    mountTriggered: true,
    animate: {
      rotate: 360,
    },
  },

  doublePulse: {
    defaultDuration: 1,
    animate: {
      scale: [1, 1.12, 1, 1.12, 1],
      y: [0, -0.5, 0, -0.5, 0],
    },
  },

  float: {
    defaultDuration: 1.2,
    animate: {
      y: [0, -1, 2, -1, 2, 0],
    },
  },
}
