"use client";

import { motion } from "framer-motion";

const defaultVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function AnimatedSection({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial="hidden"
      variants={defaultVariants}
      transition={{ duration: 0.5, delay }}
      whileInView="visible"
      viewport={{ once: true, margin: "-60px 0px -60px 0px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
