import { useEffect } from 'react'
import { motion, useAnimation } from 'motion/react'
import { iconDefaults } from '../types/icon'
import type { SparkMotionIconProps } from '../types/icon'
import {
  getIconInteractionStyle,
  getWhileTapConfig,
  isMountTriggeredAnimation,
} from '../animations/helpers'

export function ShareIcon(props: SparkMotionIconProps) {
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

  const circleControls = useAnimation()
  const whileTap = getWhileTapConfig(animation)
  const isInteractive = Boolean(onClick || (animated && !isMountTriggeredAnimation(animation)))

  const resolvedDuration = duration ?? 0.6

  const triggerCircles = () => {
    void circleControls.start({
      r: [3, 3.8, 3],
      transition: { duration: resolvedDuration },
    })
  }

  useEffect(() => {
    if (!animated || (!isMountTriggeredAnimation(animation) && !loop)) {
      return
    }
    triggerCircles()
  }, [animated, animation, circleControls, duration, loop])

  const handleClick = () => {
    if (animated && !isMountTriggeredAnimation(animation)) {
      triggerCircles()
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
      whileTap={whileTap}
      onClick={handleClick}
      style={getIconInteractionStyle(isInteractive)}
    >
      <g transform="translate(12 12) scale(1.12) translate(-12 -12)">
        <motion.circle cx="18" cy="6" r="3" animate={circleControls} />
        <motion.circle cx="6" cy="12" r="3" animate={circleControls} />
        <motion.circle cx="18" cy="18" r="3" animate={circleControls} />

        {/* Lines stay static */}
        <path d="M8.5 10.5c3-2 2-4 7-3.5" />
        <path d="M8.5 13.5c3 2 2 4 7 3.5" />
        <path d="M16.5 4.5a1.5 0 0 1 1.5 1" />
      </g>
    </motion.svg>
  )
}
