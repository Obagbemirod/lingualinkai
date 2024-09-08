import React from 'react';
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-[#002244] text-white p-8"
    >
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-6">About LinguaLink AI</h1>
        <p className="text-xl mb-4">
          LinguaLink AI is a pioneering platform dedicated to breaking down language barriers in education, 
          agriculture, healthcare, and commerce across emerging markets.
        </p>
        <p className="text-xl mb-4">
          Our mission is to empower millions of individuals by providing real-time translation of vital 
          information and educational content into local languages, making knowledge accessible to all.
        </p>
        <p className="text-xl mb-4">
          Through innovative AI-powered translation technology, we aim to bridge the gap between global 
          knowledge and local understanding, fostering inclusive growth and sustainable development in 
          underserved communities worldwide.
        </p>
      </div>
    </motion.div>
  );
};

export default About;