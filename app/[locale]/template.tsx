"use client";

import { motion } from "framer-motion";

export default function Template({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 15,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
      }}
      className="
        relative
        min-h-screen
        overflow-hidden
      "
    >


      <div
        className="
          pointer-events-none
          absolute
          -top-40
          left-1/2
          -translate-x-1/2
          h-96
          w-96
          rounded-full
          bg-cyan-300/20
          blur-3xl
          dark:bg-cyan-500/10
        "
      />


      {/* Page content */}

      <div className="relative">
        {children}
      </div>

    </motion.div>
  );
}