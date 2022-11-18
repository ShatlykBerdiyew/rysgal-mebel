import Image from "next/image";
import React from "react";
import styles from "./brends.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncGetBrandList } from "../../store/asyncActions/asyncGetBrandList";
import { BASE_URL } from "../../store/urls";
import Link from "next/link";
// import myImageLoader from "../loader/myloader";

// fetch(`${BASE_URL}/api/products/brands/`)

// export const getStaticProps = async () => {
//   // fetch list of brands
//   const brands = await fetch(`${BASE_URL}/api/products/brands/`);
//   const brandList = await brands.json();
//   console.log("gelmeyan brandlar: ", brandList)
//   return {
//     props: {
//       brandList: brandList,
//     },
//   }
// }


const Brends = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncGetBrandList());
  }, []);

  const brandList = useSelector((state) => state.brands.data);

  return (
    <div className={styles.brandes}>
      <h2>Бренды</h2>
      <div className={styles.brand_images__container}>
        {brandList && brandList.length > 0
          ? brandList.map((item) => (
              <Link key={item.id} href={`/brand/${item.id}`}>
                <a>
                  <div className={styles.brand_img} key={item.id}>
                    <Image
                    // loader={myImageLoader}
                      src={BASE_URL + item.image}
                      width={340}
                      // layout="fill"
                      height={130}
                      alt={item.title}
                    />
                  </div>
                </a>
              </Link>
            ))
          : null}
      </div>
    </div>
  );
};

export default Brends;
