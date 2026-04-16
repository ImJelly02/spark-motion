import type { ComponentType } from 'react'
import type { SparkMotionIconProps, SparkMotionAnimation } from '../../types/icon'
import { HeartIcon } from '../../components/HeartIcon'
import { BellIcon } from '../../components/BellIcon'
import { PlayIcon } from '../../components/PlayIcon'
import { RefreshIcon } from '../../components/RefreshIcon'
import { ArrowRightIcon } from '../../components/ArrowRightIcon'
import { LoadingIcon } from '../../components/LoadingIcon'
import { DownloadIcon } from '../../components/DownloadIcon'
import { UploadIcon } from '../../components/UploadIcon'
import { BackToTopIcon } from '../../components/BackToTopIcon'
import { ShareIcon } from '../../components/ShareIcon'
import { SendIcon } from '../../components/SendIcon'
import { SearchIcon } from '../../components/SearchIcon'

export type IconName =
  | 'HeartIcon'
  | 'BellIcon'
  | 'PlayIcon'
  | 'RefreshIcon'
  | 'ArrowRightIcon'
  | 'LoadingIcon'
  | 'DownloadIcon'
  | 'UploadIcon'
  | 'BackToTopIcon'
  | 'ShareIcon'
  | 'SendIcon'
  | 'SearchIcon'

export interface IconMeta {
  name: IconName
  label: string
  defaultAnimation: SparkMotionAnimation
  defaultDuration: number
  component: ComponentType<SparkMotionIconProps>
}

export const icons: IconMeta[] = [
  { name: 'HeartIcon',     label: 'Heart',   defaultAnimation: 'doublePulse', defaultDuration: 1.0, component: HeartIcon },
  { name: 'BellIcon',      label: 'Bell',    defaultAnimation: 'wiggle',      defaultDuration: 0.4, component: BellIcon },
  { name: 'PlayIcon',      label: 'Play',    defaultAnimation: 'tapPop',      defaultDuration: 0.6, component: PlayIcon },
  { name: 'RefreshIcon',   label: 'Refresh', defaultAnimation: 'spin',        defaultDuration: 0.8, component: RefreshIcon },
  { name: 'ArrowRightIcon',label: 'Arrow-Right',  defaultAnimation: 'tapPop',  defaultDuration: 0.6, component: ArrowRightIcon },
  { name: 'LoadingIcon',   label: 'Loading',      defaultAnimation: 'spin',    defaultDuration: 0.8, component: LoadingIcon },
  { name: 'DownloadIcon',  label: 'Download',     defaultAnimation: 'float',  defaultDuration: 1.2, component: DownloadIcon },
  { name: 'UploadIcon',    label: 'Upload',       defaultAnimation: 'float',  defaultDuration: 1.2, component: UploadIcon },
  { name: 'BackToTopIcon', label: 'Back-To-Top',  defaultAnimation: 'float',  defaultDuration: 1.2, component: BackToTopIcon },
  { name: 'ShareIcon',     label: 'Share',        defaultAnimation: 'tapPop',  defaultDuration: 0.6, component: ShareIcon },
  { name: 'SendIcon',      label: 'Send',         defaultAnimation: 'doublePulse',  defaultDuration: 0.6, component: SendIcon },
  { name: 'SearchIcon',    label: 'Search',       defaultAnimation: 'wiggle',  defaultDuration: 0.4, component: SearchIcon },
]

export const iconMap = Object.fromEntries(
  icons.map((i) => [i.name, i])
) as Record<IconName, IconMeta>
