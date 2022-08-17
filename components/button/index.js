import styles from "./button.module.css";
import { motion } from "framer-motion";

export default function Button1({ children, setFunction }) {
  return (
    <motion.button
      whileHover={{ scale: 1.1, transition: { duration: 0.5 } }}
      className={styles.button}
      onClick={setFunction}
    >
      {children}
    </motion.button>
  );
}
