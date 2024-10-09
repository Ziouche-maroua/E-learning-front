import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const AnimatedText = ({ text, className }) => {
  const [key, setKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setKey((prevKey) => prevKey + 1);
    }, (text.length * 0.08 + 1) * 1000);

    return () => clearInterval(interval);
  }, [text.length]);

  const pVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const spanVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.div
      key={key}
      initial="hidden"
      animate="visible"
      variants={pVariants}
      className={className}
    >
      {text.split("").map((char, index) => (
        <motion.span key={index} variants={spanVariants}>
          {char}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedText;
