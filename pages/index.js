import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AksiyaSection from "../components/aksiya";
import Brends from "../components/Brends";
import CategorySection from "../components/categorySection";
import Discount from "../components/Discount";
import Footer from "../components/footer";
import Header from "../components/header";
import HomeSection from "../components/homeSection";
import InfoSection from "../components/InfoSection";
import MobileApps from "../components/Mobile_apps";
import NewProducts from "../components/NewProducts";
import { asyncGetCategoryList } from "../store/asyncActions/asyncGetCategoryList";
import { asyncGetProductsList } from "../store/asyncActions/asyncGetProducts";
import styles from "../styles/Home.module.css";

export default function Home() {
  const categories = useSelector((state) => state.category);
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    if (categories.response === undefined) {
      dispatch(asyncGetCategoryList());
    }
    // if (products === {}) {
    dispatch(asyncGetProductsList(10, 0));
    // }
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Rysgal mebel</title>
        <meta name="description" content="Rysgal mebel" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <HomeSection />
        <CategorySection />
        <AksiyaSection />
        <InfoSection />
        <NewProducts />
        <Discount />
        <Brends />
        <MobileApps />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
