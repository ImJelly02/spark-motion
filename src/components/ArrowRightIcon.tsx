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

export function ArrowRightIcon(props: SparkMotionIconProps) {
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
      <g transform="translate(12.5 12) scale(1.18) translate(-12 -12)">
        <path d="M15 8c2.5-1 5 0.5 6 3 0.5 1.2 0.5 2.2-0.5 3.5-1.5 2-3.5 2.5-5.5 2.5-1-1.5-1-2.5 0-4z"/>
        <path d="M5 12c3-1.5 7 .5 10 0"/>
        <path d="M8 9l1 3-1 3"/>
        <path d="M11 9.5l1 2.5-1 2.5"/>
        <path d="M2 7l3 5-3 5"/>
      </g>
    </motion.svg>
  )
}
