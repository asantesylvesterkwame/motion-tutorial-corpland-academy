import { motion } from "motion/react";
import "./App.css";

const App = () => {
  return (
    <div>
      <motion.div
        className="draggable-card"
        drag
        dragConstraints={{
          left: -130,
          right: 130,
          top: -40,
          bottom: 40,
        }}
        dragElastic={0.2}
      >
        Drag Me
      </motion.div>
    </div>
  );
};

export default App;
