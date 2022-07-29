import React from "react";
import Card from "../Card/Card";
import styles from "./newProducts.module.css";

const NewProducts = () => {
  return (
    <div className={styles.aksiya_section}>
      <div className={styles.container}>
        <h1 className={styles.aksiya_section__title}>Новинки</h1>
        <div className={styles.aksiya_cards}>
          {/* <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card /> */}
        </div>
        <div className={styles.load_more}>
          <span>Показать еще</span>
        </div>
      </div>
    </div>
  );
};

export default NewProducts;
