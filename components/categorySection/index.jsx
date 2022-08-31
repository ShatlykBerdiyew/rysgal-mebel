import React from "react";
import styles from "./category_section.module.css";
import Image from "next/image";

import Nokatlar from "../../public/nokatlar.png";

import kuhnya from "../../public/kuhnia.png";
import gosninnaya from "../../public/gostinnaya.png";
import spalny from "../../public/spalny.png";
import ofis from "../../public/ofis.png";
import mebel from "../../public/mebel.png";
import vannaya from "../../public/vannaya.png";
import polki from "../../public/polka.png";
import detskiy from "../../public/detskiy.png";

import Category_banner from "../../public/category_banner.png";
import { useSelector } from "react-redux";
import { BASE_URL } from "../../store/urls";
import { useState } from "react";
import Link from "next/link";
import VerticalMenu from "../vertical-menu/Vertical-menu";
import CaruselComponent from "../carusel/carusel";

const CategorySection = () => {
  const [selectedCat, setSelectedcat] = useState(null);
  const [selectedCatID, setSelectedCatID] = useState(null);

  const categoryList = useSelector((state) => state.category);
  const categorise = categoryList.data ? categoryList.data : [];
  return (
    <div className={styles.category_section}>
      <div className={styles.container}>
        <div className={styles.left_section}>
          <div>
            <Image src={Nokatlar} width={175} height={75} />
          </div>
          <div className={styles.category_list}>
            <VerticalMenu />
          </div>
        </div>
        <div className={styles.right_section}>
          {/* <Image
            className={styles.category_banner}
            src={Category_banner}
            objectFit="contain"
          /> */}
          <CaruselComponent />
        </div>
      </div>
    </div>
  );
};

export default CategorySection;
