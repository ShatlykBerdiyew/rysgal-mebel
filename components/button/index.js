import styles from "./button.module.css";

export default function Button1({ children, setFunction }) {
  return (
    <button className={styles.button} onClick={setFunction}>
      {children}
    </button>
  );
}
