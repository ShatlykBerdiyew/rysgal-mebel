import React, { useLayoutEffect } from "react";
import styles from "../styles/like.module.css";
import Footer from "../components/footer";
import Header from "../components/header";
import Image from "next/image";

import likeEmptyIcon from "../public/empty-like.png";
import deleteIcon from "../public/delete.png";
import { useDispatch, useSelector } from "react-redux";
import { BASE_URL } from "../store/urls";
import { deleteProductInLikes } from "../store/actions/likedProductsActions";
import Link from "next/link";

const LikePage = () => {
  const { likes } = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <>
      <Header />
      <div className={styles.like}>
        <div className={styles.like_section}>
          <div className={styles.like_section__header}>Halan harytlarym</div>
          <div className={styles.like_section__main}>
            {likes.length === 0 ? (
              <div className={styles.emptyIcon}>
                <Image
                  src={likeEmptyIcon}
                  width={100}
                  height={100}
                  objectFit="contain"
                />
              </div>
            ) : (
              likes.map((pro) => (
                <div key={pro.prod_id} className={styles.like_product_item}>
                  <Link href={`/${pro.prod_id}`}>
                    <a
                      style={{
                        width: "80%",
                        display: "flex",
                        justifyContent: "space-between",
                        textDecoration: "none",
                        color: "black",
                      }}
                    >
                      <Image
                        src={BASE_URL + pro.img_url}
                        width={60}
                        height={60}
                        objectFit="contain"
                      />
                      <div className={styles.like_product_item_title}>
                        {pro.title}
                      </div>
                      <div className={styles.like_product_item_price}>
                        {pro.price}
                      </div>
                    </a>
                  </Link>

                  <div
                    className={styles.like_product_item__action}
                    onClick={() => dispatch(deleteProductInLikes(pro.prod_id))}
                  >
                    <Image
                      src={deleteIcon}
                      width={20}
                      height={20}
                      objectFit="contain"
                    />
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LikePage;
