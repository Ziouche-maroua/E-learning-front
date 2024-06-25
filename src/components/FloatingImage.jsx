import React from 'react';
import { motion } from 'framer-motion';

const FloatingImage = ({ src, alt, className }) => {
  return (
    <motion.img
      src={src}
      alt={alt}
      className={className}
      animate={{
        y: [0, -10, 0], // Move up and down
      }}
      transition={{
        repeat: Infinity,
        repeatType: 'mirror',
        duration: 3,
      }}
    />
  );
};

export default FloatingImage;
