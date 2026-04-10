export type SparkMotionAnimation =
  | 'wiggle'
  | 'tapPop'
  | 'spin'
  | 'doublePulse'

export interface SparkMotionIconProps {
  /** Icon size in pixels. Default: 24 */
  size?: number

  /** Icon color. Default: 'currentColor' */
  color?: string

  /** SVG stroke width. Default: 1.75 */
  strokeWidth?: number

  /** Enable/disable animation. Default: False */
  animated?: boolean

  /** Animation preset. Default: preset-based */
  animation?: SparkMotionAnimation

  /** Animation duration in seconds. Default: preset-based */
  duration?: number

  /** Loop the animation. Default: false */
  loop?: boolean

  /** Additional CSS classes */
  className?: string

  /** Click handler */
  onClick?: () => void
}

export const iconDefaults: Required<Pick<
  SparkMotionIconProps,
  'size' | 'color' | 'strokeWidth' | 'animated'| 'loop'
>> = {
  size: 24,
  color: 'currentColor',
  strokeWidth: 1.75,
  animated: false,
  loop: false,
}