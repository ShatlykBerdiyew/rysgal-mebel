import Image from "next/image";
import React from "react";
import styles from "./card.module.css";

import Mebel1 from "../../public/mebel_1.png";
import { BASE_URL } from "../../store/urls";

const Card = ({ img_url, title, price, desc }) => {
  console.log("image url: ", img_url);
  return (
    <div className={styles.card}>
      <Image
        className={styles.card__image}
        src={BASE_URL + img_url}
        width={272}
        height={254}
        alt="mebel1"
      />
      <div className={styles.card__border}>
        <div className={styles.card_header}>
          <span className={styles.card__title}>{title.slice(0, 20)}</span>
          <span className={styles.card__price}>{price}</span>
        </div>
        <p>{desc.slice(0, 37)}...</p>

        {/* <div className={styles.colors}>
          <div className={styles.red}></div>
          <div className={styles.green}></div>
          <div className={styles.blue}></div>
        </div> */}

        <div className={styles.card__btn}>
          <span>в корзину</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
