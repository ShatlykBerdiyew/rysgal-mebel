import React from "react";
import styles from "./mobile_apps.module.css";

import Apple from "../../public/apple.png";
import Andriod from "../../public/andriod.png";
import Banner_right from "../../public/rigth_banner.png";
import Image from "next/image";
import myImageLoader from "../loader/myloader";
import LocalImageLoader from "../loader/localLoader";
import  ExportedImage  from  "next-image-export-optimizer"

const MobileApps = () => {
  return (
    <div className={styles.mobile_apps}>
      <div className={styles.left_sec}>
        <h2>Примерка мебели не выходя из дома</h2>
        <p>Скачайте приложение с дополненной реальностью</p>
        <div className={styles.logo_section}>
          <ExportedImage src={Apple} width={246} height={82} />
          <ExportedImage src={Andriod} width={246} height={82} />
        </div>
      </div>
      <div className={styles.right_sec}>
        <ExportedImage src={Banner_right} objectFit="contain" />
      </div>
    </div>
  );
};

export default MobileApps;
