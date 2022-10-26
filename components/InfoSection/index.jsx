import Image from "next/image";
import React, { useEffect } from "react";
import styles from "./infoSection.module.css";

import AR_banner from "../../public/ar_banner.png";
import dostawka from "../../public/dostawka.png";
import Interyer1 from "../../public/interyer1.png";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { asyncGetInteryerList } from "../../store/asyncActions/asyncGetInteryer";
import { BASE_URL } from "../../store/urls";
import Slider from "react-slick";

const InfoSection = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncGetInteryerList());
  }, []);

  const { interyer } = useSelector((state) => state);



  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1
  };

  return (
    <div className={styles.info_section}>
      <div className={styles.container}>
        <div className={styles.sub_section}>
          <div className={styles.info_item}>
            <div className={styles.info_title}>
              <h3>Твой дом твоя реальность</h3>
              <Link href={"/interyer"}>
                <a>
                  <span className={styles.btn_a}>УЗНАТЬ БОЛЬШЕ</span>
                </a>
              </Link>
            </div>
            <div className={styles.info_img}>
              <Image src={AR_banner} objectFit="cover" alt="banner" />
            </div>
          </div>

          <div className={styles.info_item}>
            <div className={styles.info_title}>
              <h3>Доставим за 1 день более 1 000 товаров</h3>
              <span className={styles.btn_a}>УЗНАТЬ БОЛЬШЕ</span>
            </div>
            <div className={styles.info_img}>
              <Image src={dostawka} objectFit="cover" alt="banner" />
            </div>
          </div>
        </div>
        <h2>Идеи для интерьера</h2>
        <div className={styles.interyer}>
              {/* <Slider {...settings}> */}
          {interyer.length > 0 &&
            interyer.map((item) => (
              <Image
                src={BASE_URL + item.image}
                key={item.id}
                width={300}
                height={200}
                alt={item.title}
              />
              
              ))}
              {/* </Slider> */}

        </div>
      </div>
    </div>
  );
};

export default InfoSection;
