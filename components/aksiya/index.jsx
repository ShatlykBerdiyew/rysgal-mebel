import React from "react";
import { useSelector } from "react-redux";
import Card from "../Card/Card";
import styles from "./aksiya.module.css";

const AksiyaSection = () => {
  const { results } = useSelector((state) => state.products);
  [].length;
  console.log("Products: []", results);
  return (
    <div className={styles.aksiya_section}>
      <div className={styles.container}>
        <h1 className={styles.aksiya_section__title}>Акция</h1>
        <div className={styles.aksiya_cards}>
          {results.length > 0
            ? results.map((item) => {
                console.log(item.main_image);
                return (
                  <Card
                    img_url={item.main_image}
                    title={item.title_tm}
                    price={item.get_price}
                    desc={item.description_tm}
                  />
                );
              })
            : null}
          {/* <Card img_url={`asjdfalsjkv`} />
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

export default AksiyaSection;
