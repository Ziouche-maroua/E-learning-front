import React from 'react';
import { motion } from 'framer-motion';

const FloatingImage = ({ src, alt, className }) => {
  return (
    <motion.img
      src={src}
      alt={alt}
      className={className}
      animate={{
        y: [-30, 30, -30], // Move up and down 
      }}
      transition={{
        repeat: Infinity,
        repeatType: 'mirror',
        duration: 2.5 , // lower value means faster)
      }}
    />
  );
};

export default FloatingImage;
