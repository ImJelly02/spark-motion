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

export function LoadingIcon(props: SparkMotionIconProps) {
  const {
    size = iconDefaults.size,
    color = iconDefaults.color,
    strokeWidth = iconDefaults.strokeWidth,
    animated = iconDefaults.animated,
    animation = 'spin',
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
      <g transform="translate(12 12) scale(1.4) translate(-12 -12)">
        <circle cx="12" cy="12" r="2.5" />
        <path d="M12 9.5c-2-6 5-7 3-.5" />
        <path d="M14.5 12c6-2 7 5 .5 3" />
        <path d="M12 14.5c2 6-5 7-3 .5" />
        <path d="M9.5 12c-6 2-7-5-.5-3" />
      </g>
    </motion.svg>
  )
}
