import "./App.css";
import { motion } from "motion/react";

function App() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
        type: "spring",
      }}
    >
      Corpland Academy
    </motion.div>
  );
}

export default App;
