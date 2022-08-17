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

const CategorySection = () => {
  const [selectedCat, setSelectedcat] = useState(null);

  const categoryList = useSelector((state) => state.category);
  const categorise = categoryList.data ? categoryList.data : [];
  return (
    <div className={styles.category_section}>
      <div className={styles.container}>
        <div
          className={styles.left_section}
          // onMouseOut={() => setSelectedcat(null)}
        >
          <div>
            <Image src={Nokatlar} width={175} height={75} />
          </div>
          <div
            className={styles.category_list}
            // onMouseOver={() => {
            //   if (selectedCat !== null) setSelectedcat(null);
            // }}
          >
            <ul
              className={styles.caterory_title}
              // onMouseOut={() => setSelectedcat(null)}
            >
              {categorise.length > 0
                ? categorise.map((item) => (
                    <li
                      key={item.id}
                      onMouseOver={() => setSelectedcat(item.subcategories)}
                      // onClick={() => setSelectedcat(item.subcategories)}
                      // onMouseOut={() => setSelectedcat(null)}
                    >
                      <Image
                        src={`${BASE_URL}${item.image}`}
                        width={34}
                        height={34}
                        // layout="responsive"
                      />
                      <span>{item.title_tm}</span>
                    </li>
                  ))
                : null}
            </ul>

            <div>
              {selectedCat && (
                <ul>
                  {selectedCat.map((item) => (
                    <Link href={`/category/${item.id}`}>
                      <a>
                        <li
                          key={item.id}
                          style={{ fontSize: "26px", backgroundColor: "red" }}
                          onMouseOut={() => setSelectedcat(null)}
                        >
                          {item.title_tm}
                        </li>
                      </a>
                    </Link>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
        <div className={styles.right_section}>
          <Image
            className={styles.category_banner}
            src={Category_banner}
            objectFit="contain"
          />
        </div>
      </div>
    </div>
  );
};

export default CategorySection;
