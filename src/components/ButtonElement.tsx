import { motion } from "motion/react";
import type React from "react";

interface ButtonElementProps {
  children: React.ReactNode;
  stiffness?: number;
  damping?: number;
}

const ButtonElement : React.FC<ButtonElementProps> = ({ children, stiffness = 300, damping = 15 }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05, y: -4 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness, damping }}
    >
      {children}
    </motion.button>
  );
};

export default ButtonElement;
