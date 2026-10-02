import { motion } from "framer-motion";

export default function Reveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.8,
  className = "",
}) {
  const directions = {
    up: {
      x: 0,
      y: 70,
      rotate: 2,
    },
    down: {
      x: 0,
      y: -70,
      rotate: -2,
    },
    left: {
      x: -80,
      y: 0,
      rotate: -2,
    },
    right: {
      x: 80,
      y: 0,
      rotate: 2,
    },
    fade: {
      x: 0,
      y: 0,
      rotate: 0,
    },
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.96,
        ...directions[direction],
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        rotate: 0,
        scale: 1,
      }}
      viewport={{
        once: true,
        amount: 0.18,
      }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
