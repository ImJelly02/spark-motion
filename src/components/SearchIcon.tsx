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

export function SearchIcon(props: SparkMotionIconProps) {
  const {
    size = iconDefaults.size,
    color = iconDefaults.color,
    strokeWidth = iconDefaults.strokeWidth,
    animated = iconDefaults.animated,
    animation = 'wiggle',
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
      <circle cx="8.6" cy="8.5" r="7.5"/>
      <path d="M21.5 22.5c-0.9 0.7-2.2 0.5-2.8-0.4c-1.6-2.2-3.3-4.3-4.9-6.5c-0.5-0.5-0.5-1.3 0-1.7s1.3-0.5 1.7 0c2.2 1.4 4.4 2.8 6.6 4.3c0.8 0.5 1.1 1.4 0.8 2.3c-0.2 0.5-0.5 1.1-1 1.7c-0.1 0.1-0.2 0.2-0.4 0.3z"/>
      <path d="M15.1 17.1c0.4 0.4 2.4-1.6 1.9-2.1"/>
      <path d="M6.2 4.3c0.6-0.4-1.6 0.1-2.5 2.8c-0.5 1.8 0.3 4.5 2.1 5.6c2.2 1.4 4.6 0.5 4.9 0.3c2.4-1.1 3.5-3.7 2.7-6.2c-1-3.1-3.2-3.3-3.8-3.4c-3.7-0.1-3.6 4.5-3 5.4c-1.6-2.3-0.4-4.4-0.4-4.5z"/>
    </motion.svg>
  )
}
