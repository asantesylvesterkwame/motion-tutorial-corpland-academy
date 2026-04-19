import "./App.css";
import { motion } from "motion/react";

const carContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.5,
    },
  },
};

const carItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Variants = () => {
  const cars = [
    "Toyota",
    "Honda",
    "Ford",
    "Chevrolet",
    "Nissan",
    "BMW",
    "Mercedes-Benz",
    "Volkswagen",
    "Audi",
    "Hyundai",
  ];

  return (
    <>
      <motion.ul variants={carContainer} initial="hidden" animate="visible">
        {cars.map((car) => (
          <motion.li variants={carItem} key={car}>
            {car}
          </motion.li>
        ))}
      </motion.ul>
    </>
  );
};

export default Variants;
