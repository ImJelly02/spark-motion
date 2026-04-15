import { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { iconDefaults } from '../types/icon'
import type { SparkMotionIconProps } from '../types/icon'
import {
  getAnimationConfig,
  getIconInteractionStyle,
  getWhileTapConfig,
  isMountTriggeredAnimation,
} from '../animations/helpers'

export function PlayIcon(props: SparkMotionIconProps) {
  const {
    size = iconDefaults.size,
    color = iconDefaults.color,
    strokeWidth = iconDefaults.strokeWidth,
    animated = iconDefaults.animated,
    animation = 'tapPop',
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
      <g transform="translate(16, 14) scale(1.25) translate(-12 -12)">
        <path d="M6.5 5.5c-2-1.5-4.5 0-4.5 3v7c0 3 2.5 4.5 4.5 3l8.5-5.5c2-1.5 2-4.5 0-6l-8.5-5.5z" />
        <path d="M6 10V7.5c0-1.5 1-2 2-1.5" />
      </g>
    </motion.svg>
  )
}
