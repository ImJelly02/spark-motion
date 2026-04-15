import * as react_jsx_runtime from 'react/jsx-runtime';

type SparkMotionAnimation = 'wiggle' | 'tapPop' | 'spin' | 'doublePulse';
interface SparkMotionIconProps {
    /** Icon size in pixels. Default: 24 */
    size?: number;
    /** Icon color. Default: 'currentColor' */
    color?: string;
    /** SVG stroke width. Default: 1.75 */
    strokeWidth?: number;
    /** Enable/disable animation. Default: False */
    animated?: boolean;
    /** Animation preset. Default: preset-based */
    animation?: SparkMotionAnimation;
    /** Animation duration in seconds. Default: preset-based */
    duration?: number;
    /** Loop the animation. Default: false */
    loop?: boolean;
    /** Additional CSS classes */
    className?: string;
    /** Click handler */
    onClick?: () => void;
}

declare function HeartIcon(props: SparkMotionIconProps): react_jsx_runtime.JSX.Element;

declare function BellIcon(props: SparkMotionIconProps): react_jsx_runtime.JSX.Element;

declare function PlayIcon(props: SparkMotionIconProps): react_jsx_runtime.JSX.Element;

declare function LoadingIcon(props: SparkMotionIconProps): react_jsx_runtime.JSX.Element;

declare function RefreshIcon(props: SparkMotionIconProps): react_jsx_runtime.JSX.Element;

declare function ArrowRightIcon(props: SparkMotionIconProps): react_jsx_runtime.JSX.Element;

type AnimationPreset = SparkMotionAnimation;

export { type AnimationPreset, ArrowRightIcon, BellIcon, HeartIcon, LoadingIcon, PlayIcon, RefreshIcon, type SparkMotionAnimation, type SparkMotionIconProps };
