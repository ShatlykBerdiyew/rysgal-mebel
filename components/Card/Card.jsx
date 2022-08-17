import Image from "next/image";
import React from "react";
import styles from "./card.module.css";

import Mebel1 from "../../public/mebel_1.png";
import { BASE_URL } from "../../store/urls";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { addCard, deleteCard } from "../../store/actions/card";

const Card = ({ prod_id, img_url, title, price, desc, inCart = false }) => {
  const dispatch = useDispatch();

  return (
    <div className={styles.card}>
      <Image
        className={styles.card__image}
        src={BASE_URL + img_url}
        width={272}
        height={254}
        alt="mebel1"
      />
      <span className={styles.product_atributs_new}>Taze</span>
      <span className={styles.product_atributs_sale}>Aksiya</span>
      <div className={styles.card__border}>
        <div className={styles.card_header}>
          <Link href={`/${prod_id}`}>
            <a>
              <span className={styles.card__title}>{title.slice(0, 20)}</span>
            </a>
          </Link>
          <span className={styles.card__price}>{price}</span>
        </div>
        <p>{desc.slice(0, 37)}...</p>
        {/* <div className={styles.colors}>
          <div className={styles.red}></div>
          <div className={styles.green}></div>
          <div className={styles.blue}></div>
        </div> */}

        <div className={styles.card__btn}>
          <span
            style={inCart ? { background: "red" } : null}
            onClick={() => {
              if (inCart) {
                dispatch(deleteCard(prod_id));
              } else {
                dispatch(addCard({ prod_id, img_url, title, price, desc }));
              }
            }}
          >
            {inCart ? "Удалить" : "в корзину"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
