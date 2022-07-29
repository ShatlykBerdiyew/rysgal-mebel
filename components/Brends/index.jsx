import Image from "next/image";
import React from "react";
import styles from "./brends.module.css";
import Brend1 from "../../public/brand-1.png";
import Brend2 from "../../public/brand-2.png";

const Brends = () => {
  return (
    <div className={styles.brandes}>
      <h2>Бренды</h2>
      <div className={styles.brand_images__container}>
        <div className={styles.brand_img}>
          <Image src={Brend1} width={340} height={105} />
        </div>
        <div className={styles.brand_img}>
          <Image src={Brend2} width={340} height={105} />
        </div>
        <div className={styles.brand_img}>
          <Image src={Brend1} width={340} height={105} />
        </div>
        <div className={styles.brand_img}>
          <Image src={Brend2} width={340} height={105} />
        </div>
        <div className={styles.brand_img}>
          <Image src={Brend1} width={340} height={105} />
        </div>
        <div className={styles.brand_img}>
          <Image src={Brend2} width={340} height={105} />
        </div>
      </div>
    </div>
  );
};

export default Brends;
