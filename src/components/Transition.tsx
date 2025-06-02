//framer motion
import { motion } from "framer-motion";

//variants
const transitionVariants = {
  initial: {
    x: "100%",
    width: "100%",
  },
  animate: {
    x: "0%",
    width: "0%",
  },
  exit: {
    x: ["0%", "100%"],
    width: ["0%", "100%"],
  },
};

export default function Transition() {
  return (
    <motion.div
      className="fixed top-0 bottom-0 right-full w-screen h-screen z-30"
      variants={transitionVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ delay: 0.2, duration: 1, ease: "easeInOut" }} // Aumente a duração para 1 segundo
    />
  );
}
