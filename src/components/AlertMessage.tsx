import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const AlertMessage = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div>
      <button onClick={() => setIsOpen((open) => !open)}>Toggle Alert</button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="alert-message"
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p>This is an alert message!</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AlertMessage;
