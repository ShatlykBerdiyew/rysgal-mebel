import Image from "next/image";
import React from "react";
import styles from "./homeSevtion.module.css";

import Mebel from "../../public/home_section_mebel.png";
// import myImageLoader from "../loader/myloader";



const HomeSection = () => {
  return (
    <div className={styles.home_section}>
      <div className={styles.container}>
        <div className={styles.left_section}>
          <p className={styles.left_section__title}>MODERN DESIGN</p>
          <p className={styles.left_section__desc}>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium Sed ut perspiciatis unde omnis iste natus.
          </p>
          <p className={styles.left_section__btn}>BUY NOW</p>
        </div>
        <div className={styles.right_section}>
          <div style={{width:'100%'}}>
            <Image
              className={styles.home_section__image}
              src={Mebel}
              width={685}
              height={685}
              alt="mebel"
            />
          </div>
          <div className={styles.ellipse}></div>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
