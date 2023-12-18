import React from "react";
import { motion } from "framer-motion";

export default function PulsingCircles() {
  const size = 14;
  const scale = 1.7;
  const duration = 2;
  const delay = 0.3;

  const animation = {
    scale: [0, scale, 0],
    opacity: [1, 0.2, 0],
  };

  const transition = {
    duration: duration,
    repeat: Infinity,
    repeatType: "loop" as "loop",
    times: [0, 0.9, 1],
  };

  const delayedTransition = {
    ...transition,
    delay: delay,
  };

  const containerStyle: React.CSSProperties = {
    height: `${size * scale}px`,
    width: `${size * scale}px`,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  };

  const circleStyle: React.CSSProperties = {
    width: `${size}px`,
    height: `${size}px`,
    borderRadius: "50%",
    position: "absolute",
    backgroundColor: "white",
  };

  return (
    <div style={containerStyle}>
      <div style={circleStyle} />

      <motion.div
        style={circleStyle}
        animate={animation}
        transition={transition}
      />

      <motion.div
        style={circleStyle}
        animate={animation}
        transition={delayedTransition}
      />
    </div>
  );
}
