import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "./card.module.css";
import likeIcon from "../../public/like.png";
import redLikedIcon from "../../public/heart.png";

import { BASE_URL } from "../../store/urls";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { addCard, deleteCard } from "../../store/actions/card";
import { addProductinLikes } from "../../store/actions/likedProductsActions";
// import myImageLoader from "../loader/myloader";
// import LocalImageLoader from "../loader/localLoader";

const Card = ({ prod_id, img_url, title, price, desc, inCart = false }) => {
  const dispatch = useDispatch();
  const { likes } = useSelector((state) => state);
  const [liked, setLiked] = useState(false);
  useEffect(() => {
    likes.map((prod) => {
      if (prod.prod_id === prod_id) {
        setLiked(true);
      }
    });
  }, [likes]);
  return (
    <div className={styles.card}>
      <Image
        // loader={myImageLoader}
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

        <div className={styles.card__btn}>
          {liked ? (
            <Image
            // loader={LocalImageLoader}
              src={redLikedIcon}
              width={28}
              height={28}
              objectFit="contain"
            />
          ) : (
            <Image
              onClick={() =>
                dispatch(
                  addProductinLikes({ prod_id, img_url, title, price, desc })
                )
              }
              // loader={LocalImageLoader}
              src={likeIcon}
              width={26}
              height={26}
              objectFit="contain"
            />
          )}

          <span
            style={inCart ? { background: "red" } : null}
            onClick={() => {
              if (inCart) {
                dispatch(deleteCard(prod_id));
              } else {
                dispatch(
                  addCard({ prod_id, img_url, title, price, desc, qty: 1 })
                );
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
