import React, { useEffect } from "react";

import Slider from "react-slick";

import like from "../public/like.png";
import redLike from "../public/heart.png";
import card from "../public/cart.png";
import icon1 from "../public/11.png";
import icon2 from "../public/22.png";
import icon3 from "../public/33.png";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import Card from "../components/Card/Card";

import { useState } from "react";
import { motion } from "framer-motion";

import cn from "classnames";
import Footer from "../components/footer";
import { BASE_URL } from "../store/urls";
import Header from "../components/header";
import Link from "next/link";
import { addCard } from "../store/actions/card";
import { addProductinLikes } from "../store/actions/likedProductsActions";
// import myImageLoader from "../components/loader/myloader";
// import LocalImageLoader from "../components/loader/localLoader";
import { useRouter } from "next/router";

// export async function getStaticPaths() {
//   const products = ["1", "2", "3", "4", "5", "6", "10"];
//   const paths = products.map((post) => ({
//     params: { id: post },
//   }));
//   return { paths, fallback: false };
// }

export const getServerSideProps = async (contex) => {
  // const { id } = contex.params;
  const response = await fetch(
    `${BASE_URL}/api/products/product-detail/${contex.params.id}`
  );
  const data = await response.json();

  return {
    props: { prod_detail: data },
  };
};

const ProductsDetail = ({prod_detail}) => {
  const recProds = useSelector((state) => state.products.results);
  const dispatch = useDispatch();
  console.log("prod_detail: ", prod_detail);
  const { likes } = useSelector((state) => state);
  const [liked, setLiked] = useState(false);
  const { asPath } = useRouter();

// console.log('url: ', asPath)
//   useEffect(() => {
//     asPath && fetch(`${BASE_URL}/api/products/product-detail${asPath}`)
//       .then(res => res.json())
//       .then(json => console.log('Products_details: ', json))
//       .catch(err => console.log("Gelyan yalnyshlyk", err))
//   },[])


  useEffect(() => {
    if (likes.length > 0) {
      likes.map((like) => {
        if (like.prod_id === prod_detail.data.id) {
          setLiked(true);
        }
      });
    }
  }, [likes]);

  const [mainImgSelected, setMainImgSelected] = useState(BASE_URL);
  const [changeImg, setChangeImg] = useState(false);
  useEffect(() => {
    setChangeImg(!changeImg);
  }, [mainImgSelected]);

  useEffect(() => {
    setMainImgSelected(BASE_URL + prod_detail.data.main_image);
  }, [prod_detail]);

  const [selected, setSelected] = useState(1);

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "greey",
          backgroundColor: "rgba(105, 98, 98, 0.521)",
          borderRadius: "100%",
          zIndex: 999,
        }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          backgroundColor: "rgba(105, 98, 98, 0.521)",
          borderRadius: "100%",
          display: "flex",
          position: "absolute",
          zIndex: "99",
        }}
        onClick={onClick}
      >
        <Image src={card} width={50} height={50} />
      </div>
    );
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const variants = {
    open: { scale: [0, 1], x: 0 },
    closed: { scale: [0, 1], x: 0 },
  };

  return (
    <div className="product_detail">
      <Header />
      <div className="container">
        <div className="boshluk"></div>
        <div className="detail_section">
          <div className="image_container">
            <motion.div
              layout
              initial={{ scale: 0, x: -500 }}
              animate={changeImg ? "open" : "closed"}
              variants={variants}
              className="image__slider"
            >
              {mainImgSelected && <Image
                src={mainImgSelected}
                width={500}
                height={450}
              />}
            </motion.div>
            <div className="slide_elements">
              <motion.div
                key={prod_detail.data.main_image}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.5 },
                }}
                className="slide_item"
                onClick={() =>
                  setMainImgSelected(BASE_URL + prod_detail.data.main_image)
                }
              >
                {prod_detail.data?.main_image && <Image
                  src={BASE_URL + prod_detail.data?.main_image}
                  objectFit="cover"
                  // layout="fill"
                  width={100}
                  height={100}
                />}
              </motion.div>
              {prod_detail.data?.image_list?.map((item) => (
                <motion.div
                  key={item.id}
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.5 },
                  }}
                  className="slide_item"
                  onClick={() => setMainImgSelected(BASE_URL + item.image)}
                >
                  <Image
                    src={BASE_URL + item.image}
                    objectFit="cover"
                    // layout="fill"
                    width={100}
                    height={100}
                  />
                </motion.div>
              ))}
            </div>
          </div>
          <div className="detail_container">
            <div className="detail_title">
              <span>Mebel detail</span>
            </div>
            <div className="boshluk_1"></div>
            <div className="detail__price">
              <span className="real_price">500 tmt</span>
              <span className="sale_price">550 tmt</span>
              <span className="sale_prosent">-10%</span>
            </div>
            <div className="boshluk"></div>
            <div className="actions">
              <motion.div
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.3 },
                }}
                className="like"
              >
                {liked ? (
                  <Image
                    src={redLike}
                    width={25}
                    height={25}
                    objectFit="contain"
                  />
                ) : (
                  <Image
                    src={like}
                    width={25}
                    height={25}
                    objectFit="contain"
                    onClick={() => {
                      dispatch(
                        addProductinLikes({
                          prod_id: prod_detail.data.id,
                          img_url: prod_detail.data.main_image | "",
                          title: prod_detail.data.title_tm,
                          price: prod_detail.data.price,
                          desc: prod_detail.data.description_tm,
                        })
                      );
                    }}
                  />
                )}
              </motion.div>

              <motion.div
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.5 },
                }}
                className="card"
              >
                <div
                  className="card_btn_title"
                  onClick={() =>
                    dispatch(
                      addCard({
                        prod_id: prod_detail.data.id,
                        img_url: prod_detail.data.main_image | "",
                        title: prod_detail.data.title_tm,
                        price: prod_detail.data.price,
                        desc: prod_detail.data.description_tm,
                        qty: 1,
                      })
                    )
                  }
                >
                  <Image
                    src={card}
                    width={`20px`}
                    height={`25px`}
                  />{" "}
                  <span style={{ paddingLeft: "15px" }}>to Card</span>
                </div>
              </motion.div>
            </div>
            <div className="boshluk_1"></div>
            <div className="color_section">
              <div className="color_title">Colors</div>
              <div className="boshluk_1"></div>
              <div className="color_list">
                <div className="color_item">
                  <div className="item"></div>
                </div>
                <div className="color_item">
                  <div className="item1"></div>
                </div>
                <div className="color_item">
                  <div className="item"></div>
                </div>
              </div>
            </div>
            <div className="boshluk"></div>

            <div className="dostawka">
              <div className="dostawka_item">
                <Image
                  src={icon1}
                  alt="icon"
                  width={45}
                  height={45}
                />
                <span>
                  ???????????????? ???????????????? ???????????????? ???????????? ?????????? ?????????????????????? ???? ????????????
                  ???????????????? 2-4 ??????
                </span>
              </div>
              <div className="boshluk_1"></div>
              <div className="dostawka_item">
                <Image
                  src={icon2}
                  alt="icon"
                  width={45}
                  height={45}
                />
                <span>?????????????????? ???????????????? ?? ???????????????? ?????????? 699 ??.</span>
              </div>
              <div className="boshluk_1"></div>
              <div className="dostawka_item">
                <Image
                  src={icon3}
                  alt="icon"
                  width={45}
                  height={45}
                />
                <span>???????????? ???????????? 1 700 ??.</span>
              </div>
            </div>
            <div className="boshluk_1"></div>
            <div className="prod_brand">
              <span>BRAND</span>
              {prod_detail.data.brand && (
                <Link href={`/brand/${prod_detail.data.brand.id}`}>
                  <a>
                    <Image
                      src={BASE_URL + prod_detail.data.brand?.image}
                      width={150}
                      height={60}
                      objectFit="contain"
                    />
                  </a>
                </Link>
              )}
   
            </div>
          </div>
        </div>
        <div className="boshluk"></div>
        <div className="comment_section">
          <div className="headers">
            <span
              onClick={() => setSelected(1)}
              className={cn({ "active-span": selected === 1 })}
            >
              ????????????????????????????
            </span>
            <span
              onClick={() => setSelected(2)}
              className={cn({ "active-span": selected === 2 })}
            >
              ????????????
            </span>
            <span
              onClick={() => setSelected(3)}
              className={cn({ "active-span": selected === 3 })}
            >
              ????????????????
            </span>
            <span
              onClick={() => setSelected(4)}
              className={cn({ "active-span": selected === 4 })}
            >
              ???????? ????????????????
            </span>
          </div>
          <div className="boshluk_1"></div>
          {selected === 1 && (
            <div className="comment_elem">
              {prod_detail.data.description_tm}
            </div>
          )}
          {selected === 2 && (
            <div className="comment_elem">
              {prod_detail.data.comments.length > 0
                ? "Comentariya bar"
                : "kommentariya yok"}
            </div>
          )}
          {selected === 3 && (
            <div className="comment_elem">
              {prod_detail.services.description
                ? prod_detail.services.description
                : "No date"}
            </div>
          )}
          {selected === 4 && <div className="comment_elem">Magazinlerimiz</div>}
        </div>

        <div className="boshluk"></div>
        <div className="rec_products">
          <h2>Maslahat berilyan harytlar</h2>
          <Slider {...settings}>
            {prod_detail.similar_products.length > 0
              ? prod_detail.similar_products.map((item) => {
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
          </Slider>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductsDetail;
