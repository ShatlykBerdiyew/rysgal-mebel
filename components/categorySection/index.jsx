import React from "react";
import styles from "./category_section.module.css";
import Image from "next/image";

import Nokatlar from "../../public/nokatlar.png";

import Category_banner from "../../public/category_banner.png";
import { useSelector } from "react-redux";
import { BASE_URL } from "../../store/urls";
import { useState } from "react";
import Link from "next/link";
import VerticalMenu from "../vertical-menu/Vertical-menu";
import CaruselComponent from "../carusel/carusel";
// import myImageLoader from "../loader/myloader";
// import LocalImageLoader from "../loader/localLoader";

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
            <Image  src={Nokatlar} width={175} height={75} />
          </div>
          <div className={styles.category_list}>
            <VerticalMenu />
          </div>
        </div>
        <div className={styles.right_section}>
          <CaruselComponent />
        </div>
      </div>
    </div>
  );
};

export default CategorySection;
