"use client";

import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
  direction?: "up" | "left" | "right";
};

export default function ScrollAnimation({
  children,
  direction = "up",
}: Props) {
  const initialPosition =
    direction === "left"
      ? { opacity: 0, x: -60 }
      : direction === "right"
        ? { opacity: 0, x: 60 }
        : { opacity: 0, y: 40 };

  return (
    <motion.div
      initial={initialPosition}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.7,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}