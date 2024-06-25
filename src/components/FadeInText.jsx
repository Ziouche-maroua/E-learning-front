import React from 'react';
import { motion } from 'framer-motion';

const FadeInText = ({ text, className }) => {
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 2.5 } }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      className={className}
    >
      {text}
    </motion.div>
  );
};

export default FadeInText;
