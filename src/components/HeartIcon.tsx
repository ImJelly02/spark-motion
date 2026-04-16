import { useEffect } from 'react'
import { motion, useAnimation } from 'motion/react'
import { iconDefaults } from '../types/icon'
import type { SparkMotionIconProps } from '../types/icon'
import {
  getAnimationConfig,
  getIconInteractionStyle,
  getWhileTapConfig,
  isMountTriggeredAnimation,
} from '../animations/helpers'

export function HeartIcon(props: SparkMotionIconProps) {
  const {
    size = iconDefaults.size,
    color = iconDefaults.color,
    strokeWidth = iconDefaults.strokeWidth,
    animated = iconDefaults.animated,
    animation = 'doublePulse',
    duration,
    loop = iconDefaults.loop,
    className,
    onClick,
  } = props

  const controls = useAnimation()
  const whileTap = getWhileTapConfig(animation)
  const isInteractive = Boolean(onClick || (animated && !isMountTriggeredAnimation(animation)))


  useEffect(() => {
    if (!animated || (!isMountTriggeredAnimation(animation) && !loop)) {
      return
    }

    void controls.start(getAnimationConfig(animation, duration, loop))
  }, [animated, animation, controls, duration, loop])

  const handleClick = () => {
    if (animated && !isMountTriggeredAnimation(animation)) {
      void controls.start(getAnimationConfig(animation, duration, loop))
    }
    onClick?.()
  }

  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      animate={controls}
      whileTap={whileTap}
      onClick={handleClick}
      style={getIconInteractionStyle(isInteractive)}
    >
      <g transform="translate(12 12) scale(1.3) translate(-12 -12)">
        <path d="M12 19.5c-5-3-9-7-8-12C4.5 4 8 3 12 6.5c4-3.5 7.5-2.5 8 1 .5 5-3 9-8 12z" />
        <path d="M11 21.5c0-1 2-1 2 0" />
        <path d="M6 8a4 4 0 0 1 3-3" />
      </g>
    </motion.svg>
  )
}
