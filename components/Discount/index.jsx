import React from "react";
import styles from "./discount.module.css";

const Discount = () => {
  return (
    <div className={styles.discount}>
      <div className={styles.item1}>Получите скидку при регистрация</div>
      <div className={styles.item2}>19 - 22 - 12</div>
      <div className={styles.item3}>
        <p>Регистрация</p>
      </div>
    </div>
  );
};

export default Discount;
