import Image from "next/image";
import React from "react";
import styles from "./infoSection.module.css";

import AR_banner from "../../public/ar_banner.png";
import Interyer1 from "../../public/interyer1.png";

const InfoSection = () => {
  return (
    <div className={styles.info_section}>
      <div className={styles.container}>
        <div className={styles.sub_section}>
          <div className={styles.info_item}>
            <div className={styles.info_title}>
              <h3>Твой дом твоя реальность</h3>
              <span>УЗНАТЬ БОЛЬШЕ</span>
            </div>
            <div className={styles.info_img}>
              <Image src={AR_banner} objectFit="cover" alt="banner" />
            </div>
          </div>

          <div className={styles.info_item}>
            <div className={styles.info_title}>
              <h3>Твой дом твоя реальность</h3>
              <span>УЗНАТЬ БОЛЬШЕ</span>
            </div>
            <div className={styles.info_img}>
              <Image src={AR_banner} objectFit="cover" alt="banner" />
            </div>
          </div>
        </div>
        <h2>Идеи для интерьера</h2>
        <div className={styles.interyer}>
          <Image src={Interyer1} width={400} height={266} alt="interyer" />
          <Image src={Interyer1} width={400} height={266} alt="interyer" />
          <Image src={Interyer1} width={400} height={266} alt="interyer" />
          <Image src={Interyer1} width={400} height={266} alt="interyer" />
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
