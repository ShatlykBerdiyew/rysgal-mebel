import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from "../styles/interyer.module.css";
import { BASE_URL } from "../store/urls";

import { motion } from "framer-motion";
import myImageLoader from "../components/loader/myloader";

const Interyer = () => {
  const { interyer, products } = useSelector((state) => state);
  const [selectedInteryer, setSelectedInteryer] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(products.results[0]);
  useEffect(() => {
    setSelectedInteryer(interyer[0]);
  }, [interyer]);
  return (
    <div className={styles.interyer}>
      <div className={styles.container}>
        <div className={styles.interyerFotos}>
          {interyer.length > 0 &&
            interyer.map((item) => (
              <Image
              loader={myImageLoader}
                key={item.id}
                onClick={() => setSelectedInteryer(item)}
                src={BASE_URL + item.image}
                width={400}
                height={266}
              />
            ))}
        </div>
        <div className={styles.interyerDoska}>
          <div className={styles.fon}>
            {selectedInteryer && (
              <Image
              loader={myImageLoader}
                src={BASE_URL + selectedInteryer.image}
                width={15}
                height={6}
                layout="responsive"
              />
            )}
          </div>
          <motion.div
            drag
            // dragConstraints={{
            //   top: -50,
            //   left: -50,
            //   right: 50,
            //   bottom: 50,
            // }}
            className={styles.product}
          >
            {selectedProduct && (
              <Image
              loader={myImageLoader}
                src={BASE_URL + selectedProduct.main_image}
                width={300}
                height={200}
                objectFit="contain   "
              />
            )}
          </motion.div>
        </div>
        <div className={styles.interyerProducts}>
          {products &&
            products.results.map((item) => (
              <Image
              loader={myImageLoader}
                key={item.id}
                src={BASE_URL + item.main_image}
                width={200}
                height={150}
                objectFit="contain"
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Interyer;
