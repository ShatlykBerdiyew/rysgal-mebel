import React, { useEffect } from "react";
import styles from "../styles/productDetail.module.css";

import surat from "../public/mebel_1.png";
import like from "../public/like.png";
import card from "../public/cart.png";
import icon1 from "../public/11.png";
import icon2 from "../public/22.png";
import icon3 from "../public/33.png";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import Card from "../components/Card/Card";
import { asyncGetProductsList } from "../store/asyncActions/asyncGetProducts";

import brand from "../public/brand-1.png";
import { useState } from "react";

const ProductsDetail = () => {
  const recProds = useSelector((state) => state.products.results);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncGetProductsList(5, 0));
  }, []);
  console.log("++++++++++++++++++++++++++", recProds);

  const [selected, setSelected] = useState(1);

  return (
    <div className={styles.product_detail}>
      <div className={styles.container}>
        <div className={styles.boshluk}></div>
        <div className={styles.detail_section}>
          <div className={styles.image_container}>
            <div className={styles.image__slider}>
              <Image src={surat} width={500} height={450} />
            </div>
            <div className={styles.slide_elements}>
              <div className={styles.slide_item}>
                <Image src={surat} objectFit="cover" />
              </div>
              <div className={styles.slide_item}>
                <Image src={surat} objectFit="cover" />
              </div>
              <div className={styles.slide_item}>
                <Image src={surat} objectFit="cover" />
              </div>
              <div className={styles.slide_item}>
                <Image src={surat} objectFit="cover" />
              </div>
              <div className={styles.slide_item}>
                <Image src={surat} objectFit="cover" />
              </div>
            </div>
          </div>
          <div className={styles.detail_container}>
            <div className={styles.detail_title}>
              <span>Mebel detail</span>
            </div>
            <div className={styles.boshluk_1}></div>
            <div className={styles.detail__price}>
              <span className={styles.real_price}>500 tmt</span>
              <span className={styles.sale_price}>550 tmt</span>
              <span className={styles.sale_prosent}>-10%</span>
            </div>
            {/* <div className={styles.boshluk_1}></div> */}
            {/* <div className={styles.detail_desc}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore in
              veritatis hic explicabo voluptatem quos adipisci blanditiis
              commodi culpa? Dolore commodi placeat repellat illum doloremque
              impedit adipisci corrupti ipsam unde?
            </div> */}
            <div className={styles.boshluk}></div>
            <div className={styles.actions}>
              <div className={styles.like}>
                <Image src={like} width={25} height={25} />
              </div>

              <div className={styles.card}>
                <div className={styles.card_btn_title}>
                  <Image src={card} width={`20px`} height={`25px`} />{" "}
                  <span style={{ paddingLeft: "15px" }}>to Card</span>
                </div>
              </div>
            </div>
            <div className={styles.boshluk_1}></div>
            <div className={styles.color_section}>
              <div className={styles.color_title}>Colors</div>
              <div className={styles.boshluk_1}></div>
              <div className={styles.color_list}>
                <div className={styles.color_item}>
                  <div className={styles.item}></div>
                </div>
                <div className={styles.color_item}>
                  <div className={styles.item1}></div>
                </div>
                <div className={styles.color_item}>
                  <div className={styles.item}></div>
                </div>
              </div>
            </div>
            <div className={styles.boshluk}></div>

            <div className={styles.dostawka}>
              <div className={styles.dostawka_item}>
                <Image src={icon1} alt="icon" width={45} height={45} />
                <span>
                  Доставка Партнёра Доставка товара будет произведена со склада
                  партнёра 2-4 дня
                </span>
              </div>
              <div className={styles.boshluk_1}></div>
              <div className={styles.dostawka_item}>
                <Image src={icon2} alt="icon" width={45} height={45} />
                <span>Стоимость доставки в пределах МКАДа 699 Р.</span>
              </div>
              <div className={styles.boshluk_1}></div>
              <div className={styles.dostawka_item}>
                <Image src={icon3} alt="icon" width={45} height={45} />
                <span>Сборка мебели 1 700 Р.</span>
              </div>
            </div>
            <div className={styles.boshluk_1}></div>
            <div className={styles.prod_brand}>
              <span>BRAND</span>
              <Image src={brand} width={150} height={50} />
              {/* <div className={styles.brand_image}>
                <Image src={brand} />
              </div> */}
            </div>
          </div>
        </div>
        <div className={styles.boshluk}></div>
        <div className={styles.comment_section}>
          <div className={styles.headers}>
            <span onClick={() => setSelected(1)}>ХАРАКТЕРИСТИКИ</span>
            <span onClick={() => setSelected(2)}>ОТЗЫВЫ</span>
            <span onClick={() => setSelected(3)}>ДОСТАВКА</span>
            <span onClick={() => setSelected(4)}>НАШИ МАГАЗИНЫ</span>
          </div>
          <div className={styles.boshluk_1}></div>
          {selected === 1 && (
            <div className={styles.comment_elem}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              perspiciatis earum dolorum. Iure, tenetur! Mollitia nisi quam
              aliquid incidunt quae magnam id assumenda. Neque, ipsum accusamus
              voluptate minus quaerat autem.
            </div>
          )}
          {selected === 2 && (
            <div className={styles.comment_elem}>
              Lorem ipsum dolor sit amet.
            </div>
          )}
          {selected === 3 && (
            <div className={styles.comment_elem}>
              Lorem ipsum dolor sit amet consectetur adipisicing.
            </div>
          )}
          {selected === 4 && (
            <div className={styles.comment_elem}>Magazinlerimiz</div>
          )}
        </div>

        <div className={styles.boshluk}></div>
        <div className={styles.rec_products}>
          <h2>Maslahat berilyan harytlar</h2>
          <div className={styles.products_container}>
            {recProds.length > 0
              ? recProds.map((item) => {
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetail;
