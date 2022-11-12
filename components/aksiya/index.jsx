import React from "react";
import { useSelector } from "react-redux";
import { BASE_URL } from "../../store/urls";
import Card from "../Card/Card";
import styles from "./aksiya.module.css";

export const getInitialProps = async (_context) => {
  // fetch list of posts
  const products = await fetch( `${BASE_URL}/api/products/product-list/?limit=10&offset=0`);
  const results = await products.json();
  return {
    props: {
      results: results,
    },
  }
}


const AksiyaSection = ({results}) => {
  // const { results } = useSelector((state) => state.products);
  console.log('Aksiyaly harytlary getStaticPropsdan alyan: ', results)
  return (
    <div className={styles.aksiya_section}>
      <div className={styles.container}>
        <h1 className={styles.aksiya_section__title}>Акция</h1>
        <div className={styles.aksiya_cards}>
          {results?.length > 0
            ? results.map((item) => {
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
