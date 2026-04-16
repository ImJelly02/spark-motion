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
      whileTap={whileTap}
      onTap={handleClick}
      style={getIconInteractionStyle(isInteractive)}
    >
      {/* Only this group animates */}
      <motion.circle cx="18" cy="6" r="3" animate={controls}/>
      <motion.circle cx="6" cy="12" r="3" animate={controls}/>
      <motion.circle cx="18" cy="18" r="3" animate={controls}/>

      {/* Lines stay static */}
      <path d="M8.5 10.5c3-2 2-4 7-3.5" />
      <path d="M8.5 13.5c3 2 2 4 7 3.5" />
      <path d="M16.5 4.5a1.5 0 0 1 1.5 1" />
    </motion.svg>
  )
}
