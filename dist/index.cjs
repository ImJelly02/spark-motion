'use strict';

var react = require('react');
var framerMotion = require('framer-motion');
var jsxRuntime = require('react/jsx-runtime');

// src/components/HeartIcon.tsx

// src/types/icon.ts
var iconDefaults = {
  size: 24,
  color: "currentColor",
  strokeWidth: 1.75,
  animated: false,
  loop: false
};

// src/animations/presets.ts
var presets = {
  wiggle: {
    defaultDuration: 0.4,
    animate: {
      rotate: [0, -10, 10, -6, 6, 0]
    }
  },
  tapPop: {
    defaultDuration: 0.6,
    whileTap: {
      scale: 0.9
    },
    animate: {
      scale: [1, 1.14, 1]
    }
  },
  spin: {
    defaultDuration: 0.8,
    mountTriggered: true,
    animate: {
      rotate: 360
    }
  },
  doublePulse: {
    defaultDuration: 1,
    animate: {
      scale: [1, 1.12, 1, 1.12, 1],
      y: [0, -0.5, 0, -0.5, 0]
    }
  }
};

// src/animations/helpers.ts
function isMountTriggeredAnimation(animation) {
  return presets[animation].mountTriggered === true;
}
function getAnimationConfig(animation, duration, loop) {
  const preset = presets[animation];
  const resolvedDuration = duration ?? preset.defaultDuration;
  const transition = {
    duration: resolvedDuration
  };
  if (animation === "spin") {
    transition.ease = "linear";
  }
  if (loop || isMountTriggeredAnimation(animation)) {
    transition.repeat = Infinity;
  }
  return {
    ...preset.animate,
    transition
  };
}
function getWhileTapConfig(animation) {
  return presets[animation].whileTap;
}
function getIconInteractionStyle(isInteractive) {
  return {
    cursor: isInteractive ? "pointer" : "default",
    display: "block",
    outline: "none",
    WebkitTapHighlightColor: "transparent",
    touchAction: "manipulation"
  };
}
function HeartIcon(props) {
  const {
    size = iconDefaults.size,
    color = iconDefaults.color,
    strokeWidth = iconDefaults.strokeWidth,
    animated = iconDefaults.animated,
    animation = "doublePulse",
    duration,
    loop = iconDefaults.loop,
    className,
    onClick
  } = props;
  const controls = framerMotion.useAnimation();
  const whileTap = getWhileTapConfig(animation);
  const isInteractive = Boolean(onClick || animated && !isMountTriggeredAnimation(animation));
  react.useEffect(() => {
    if (!animated || !isMountTriggeredAnimation(animation) && !loop) {
      return;
    }
    void controls.start(getAnimationConfig(animation, duration, loop));
  }, [animated, animation, controls, duration, loop]);
  const handleClick = () => {
    if (animated && !isMountTriggeredAnimation(animation)) {
      void controls.start(getAnimationConfig(animation, duration, loop));
    }
    onClick?.();
  };
  return /* @__PURE__ */ jsxRuntime.jsx(
    framerMotion.motion.svg,
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: color,
      strokeWidth,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      className,
      animate: controls,
      whileTap,
      onClick: handleClick,
      style: getIconInteractionStyle(isInteractive),
      children: /* @__PURE__ */ jsxRuntime.jsxs("g", { transform: "translate(12 12) scale(1.3) translate(-12 -12)", children: [
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M12 19.5c-5-3-9-7-8-12C4.5 4 8 3 12 6.5c4-3.5 7.5-2.5 8 1 .5 5-3 9-8 12z" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M11 21.5c0-1 2-1 2 0" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M6 8a4 4 0 0 1 3-3" })
      ] })
    }
  );
}
function BellIcon(props) {
  const {
    size = iconDefaults.size,
    color = iconDefaults.color,
    strokeWidth = iconDefaults.strokeWidth,
    animated = iconDefaults.animated,
    animation = "wiggle",
    duration,
    loop = iconDefaults.loop,
    className,
    onClick
  } = props;
  const controls = framerMotion.useAnimation();
  const whileTap = getWhileTapConfig(animation);
  const isInteractive = Boolean(onClick || animated && !isMountTriggeredAnimation(animation));
  react.useEffect(() => {
    if (!animated || !isMountTriggeredAnimation(animation) && !loop) {
      return;
    }
    void controls.start(getAnimationConfig(animation, duration, loop));
  }, [animated, animation, controls, duration, loop]);
  const handleClick = () => {
    if (animated && !isMountTriggeredAnimation(animation)) {
      void controls.start(getAnimationConfig(animation, duration, loop));
    }
    onClick?.();
  };
  return /* @__PURE__ */ jsxRuntime.jsx(
    framerMotion.motion.svg,
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: color,
      strokeWidth,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      className,
      animate: controls,
      whileTap,
      onClick: handleClick,
      style: getIconInteractionStyle(isInteractive),
      children: /* @__PURE__ */ jsxRuntime.jsxs("g", { transform: "translate(11.6 12.2) scale(1.25) translate(-12 -12)", children: [
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M18 17H6c-1.5 0-2-1.5-1-2.5 1.5-1.5 2-4 2-6.5a5 5 0 0 1 10 0c0 2.5.5 5 2 6.5 1 1 .5 2.5-1 2.5z" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M10 17v1a2 2 0 1 0 4 0v-1" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M8 8a4 4 0 0 1 4-3" })
      ] })
    }
  );
}
function PlayIcon(props) {
  const {
    size = iconDefaults.size,
    color = iconDefaults.color,
    strokeWidth = iconDefaults.strokeWidth,
    animated = iconDefaults.animated,
    animation = "tapPop",
    duration,
    loop = iconDefaults.loop,
    className,
    onClick
  } = props;
  const controls = framerMotion.useAnimation();
  const whileTap = getWhileTapConfig(animation);
  const isInteractive = Boolean(onClick || animated && !isMountTriggeredAnimation(animation));
  react.useEffect(() => {
    if (!animated || !isMountTriggeredAnimation(animation) && !loop) {
      return;
    }
    void controls.start(getAnimationConfig(animation, duration, loop));
  }, [animated, animation, controls, duration, loop]);
  const handleClick = () => {
    if (animated && !isMountTriggeredAnimation(animation)) {
      void controls.start(getAnimationConfig(animation, duration, loop));
    }
    onClick?.();
  };
  return /* @__PURE__ */ jsxRuntime.jsx(
    framerMotion.motion.svg,
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: color,
      strokeWidth,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      className,
      animate: controls,
      whileTap,
      onClick: handleClick,
      style: getIconInteractionStyle(isInteractive),
      children: /* @__PURE__ */ jsxRuntime.jsxs("g", { transform: "translate(16, 14) scale(1.25) translate(-12 -12)", children: [
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M6.5 5.5c-2-1.5-4.5 0-4.5 3v7c0 3 2.5 4.5 4.5 3l8.5-5.5c2-1.5 2-4.5 0-6l-8.5-5.5z" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M6 10V7.5c0-1.5 1-2 2-1.5" })
      ] })
    }
  );
}
function LoadingIcon(props) {
  const {
    size = iconDefaults.size,
    color = iconDefaults.color,
    strokeWidth = iconDefaults.strokeWidth,
    animated = iconDefaults.animated,
    animation = "spin",
    duration,
    loop = iconDefaults.loop,
    className,
    onClick
  } = props;
  const controls = framerMotion.useAnimation();
  const whileTap = getWhileTapConfig(animation);
  const isInteractive = Boolean(onClick || animated && !isMountTriggeredAnimation(animation));
  react.useEffect(() => {
    if (!animated || !isMountTriggeredAnimation(animation) && !loop) {
      return;
    }
    void controls.start(getAnimationConfig(animation, duration, loop));
  }, [animated, animation, controls, duration, loop]);
  const handleClick = () => {
    if (animated && !isMountTriggeredAnimation(animation)) {
      void controls.start(getAnimationConfig(animation, duration, loop));
    }
    onClick?.();
  };
  return /* @__PURE__ */ jsxRuntime.jsx(
    framerMotion.motion.svg,
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: color,
      strokeWidth,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      className,
      animate: controls,
      whileTap,
      onClick: handleClick,
      style: getIconInteractionStyle(isInteractive),
      children: /* @__PURE__ */ jsxRuntime.jsxs("g", { transform: "translate(12 12) scale(1.4) translate(-12 -12)", children: [
        /* @__PURE__ */ jsxRuntime.jsx("circle", { cx: "12", cy: "12", r: "2.5" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M12 9.5c-2-6 5-7 3-.5" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M14.5 12c6-2 7 5 .5 3" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M12 14.5c2 6-5 7-3 .5" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M9.5 12c-6 2-7-5-.5-3" })
      ] })
    }
  );
}
function RefreshIcon(props) {
  const {
    size = iconDefaults.size,
    color = iconDefaults.color,
    strokeWidth = iconDefaults.strokeWidth,
    animated = iconDefaults.animated,
    animation = "spin",
    duration,
    loop = iconDefaults.loop,
    className,
    onClick
  } = props;
  const controls = framerMotion.useAnimation();
  const whileTap = getWhileTapConfig(animation);
  const isInteractive = Boolean(onClick || animated && !isMountTriggeredAnimation(animation));
  react.useEffect(() => {
    if (!animated || !isMountTriggeredAnimation(animation) && !loop) {
      return;
    }
    void controls.start(getAnimationConfig(animation, duration, loop));
  }, [animated, animation, controls, duration, loop]);
  const handleClick = () => {
    if (animated && !isMountTriggeredAnimation(animation)) {
      void controls.start(getAnimationConfig(animation, duration, loop));
    }
    onClick?.();
  };
  return /* @__PURE__ */ jsxRuntime.jsx(
    framerMotion.motion.svg,
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: color,
      strokeWidth,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      className,
      animate: controls,
      whileTap,
      onClick: handleClick,
      style: getIconInteractionStyle(isInteractive),
      children: /* @__PURE__ */ jsxRuntime.jsxs("g", { transform: "translate(12 12) scale(1) translate(-12 -12)", children: [
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M21.5 2v6h-6" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M21.5 8c-1.5-3.5-5-6-9.5-6-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M7 8a5 5 0 0 0-1 4.5" })
      ] })
    }
  );
}
function ArrowRightIcon(props) {
  const {
    size = iconDefaults.size,
    color = iconDefaults.color,
    strokeWidth = iconDefaults.strokeWidth,
    animated = iconDefaults.animated,
    animation = "tapPop",
    duration,
    loop = iconDefaults.loop,
    className,
    onClick
  } = props;
  const controls = framerMotion.useAnimation();
  const whileTap = getWhileTapConfig(animation);
  const isInteractive = Boolean(onClick || animated && !isMountTriggeredAnimation(animation));
  react.useEffect(() => {
    if (!animated || !isMountTriggeredAnimation(animation) && !loop) {
      return;
    }
    void controls.start(getAnimationConfig(animation, duration, loop));
  }, [animated, animation, controls, duration, loop]);
  const handleClick = () => {
    if (animated && !isMountTriggeredAnimation(animation)) {
      void controls.start(getAnimationConfig(animation, duration, loop));
    }
    onClick?.();
  };
  return /* @__PURE__ */ jsxRuntime.jsx(
    framerMotion.motion.svg,
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: color,
      strokeWidth,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      className,
      animate: controls,
      whileTap,
      onClick: handleClick,
      style: getIconInteractionStyle(isInteractive),
      children: /* @__PURE__ */ jsxRuntime.jsxs("g", { transform: "translate(12.5 12) scale(1.13) translate(-12 -12)", children: [
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M15 8c2.5-1 5 0.5 6 3 0.5 1.2 0.5 2.2-0.5 3.5-1.5 2-3.5 2.5-5.5 2.5-1-1.5-1-2.5 0-4z" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M5 12c3-1.5 7 .5 10 0" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M8 9l1 3-1 3" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M11 9.5l1 2.5-1 2.5" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M2 7l3 5-3 5" })
      ] })
    }
  );
}

exports.ArrowRightIcon = ArrowRightIcon;
exports.BellIcon = BellIcon;
exports.HeartIcon = HeartIcon;
exports.LoadingIcon = LoadingIcon;
exports.PlayIcon = PlayIcon;
exports.RefreshIcon = RefreshIcon;
