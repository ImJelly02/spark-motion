import { useState } from 'react'
import type { SparkMotionAnimation } from '../../types/icon'
import type { IconName } from '../data/icons'
import { iconMap } from '../data/icons'

export type AnimationType = 'animated' | 'loop' | 'static'

export interface PlaygroundState {
  selectedIcon: IconName
  animation: SparkMotionAnimation
  animationType: AnimationType
  size: number
  duration: number
  color: string
  activeTab: 'preview' | 'code'
}

const DEFAULT_ICON: IconName = 'HeartIcon'

function initialState(): PlaygroundState {
  const icon = iconMap[DEFAULT_ICON]
  return {
    selectedIcon: DEFAULT_ICON,
    animation: icon.defaultAnimation,
    animationType: 'animated',
    size: 48,
    duration: icon.defaultDuration,
    color: '#2C2C2C',
    activeTab: 'preview',
  }
}

export function usePlaygroundState() {
  const [state, setState] = useState<PlaygroundState>(initialState)

  function selectIcon(name: IconName) {
    const icon = iconMap[name]
    setState((s) => ({
      ...s,
      selectedIcon: name,
      animation: icon.defaultAnimation,
      duration: icon.defaultDuration,
    }))
  }

  function setAnimationType(animationType: AnimationType) {
    setState((s) => ({ ...s, animationType }))
  }

  function setSize(size: number) {
    setState((s) => ({ ...s, size }))
  }

  function setDuration(duration: number) {
    setState((s) => ({ ...s, duration }))
  }

  function setColor(color: string) {
    setState((s) => ({ ...s, color }))
  }

  function setActiveTab(activeTab: 'preview' | 'code') {
    setState((s) => ({ ...s, activeTab }))
  }

  return {
    state,
    selectIcon,
    setAnimationType,
    setSize,
    setDuration,
    setColor,
    setActiveTab,
  }
}
