import React from "react";
import { useSelector } from "react-redux";
import Card from "../Card/Card";
import styles from "./newProducts.module.css";

const NewProducts = () => {
  const newProd = useSelector((state) => state.products.results);

  return (
    <div className={styles.aksiya_section}>
      <div className={styles.container}>
        <h1 className={styles.aksiya_section__title}>Новинки</h1>
        <div className={styles.aksiya_cards}>
          {newProd.length > 0
            ? newProd.map((item) => {
                return (
                  <Card
                    key={item.id}
                    prod_id={item.id}
                    img_url={item.main_image}
                    title={item.title_tm}
                    price={item.get_price}
                    desc={item.description_tm}
                  />
                );
              })
            : null}
        </div>
        <div className={styles.load_more}>
          <span>Показать еще</span>
        </div>
      </div>
    </div>
  );
};

export default NewProducts;
