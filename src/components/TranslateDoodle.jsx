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
        d="M30 70 Q 40 60, 50 70 Q 60 80, 70 70 L 80 60 L 70 50 L 60 60 L 50 50 L 40 60 L 30 50 L 20 60 Z"
        stroke="#FF6B00"
        strokeWidth="4"
        fill="#FF6B00"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <motion.path
        d="M50 50 L 60 40 L 70 50"
        stroke="#FF6B00"
        strokeWidth="4"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
      />
    </motion.svg>
  );
};

export default TranslateDoodle;