import React from 'react';
import { motion } from "framer-motion";

const TranslateDoodle = () => {
  return (
    <motion.svg
      width="100"
      height="100"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
    >
      <motion.path
        d="M20 80 Q 50 20, 80 80"
        stroke="#FF6B00"
        strokeWidth="4"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <motion.path
        d="M70 85 L 80 80 L 75 70"
        stroke="#FF6B00"
        strokeWidth="4"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
      />
    </motion.svg>
  );
};

export default TranslateDoodle;