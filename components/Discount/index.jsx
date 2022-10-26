import React from "react";
import styles from "./discount.module.css";
import Link from "next/link";

const Discount = () => {
  return (
    <div className={styles.discount}>
      <div className={styles.item1}>Получите скидку при регистрация</div>
      <div className={styles.item2}><span>19</span> - <span>22</span> - <span>12</span></div>
      <div className={styles.item3}>
        <div className={styles.registrasiya_btn}><Link href={'/login'}><a className={styles.ahref}>Регистрация</a></Link></div>
      </div>
    </div>
  );
};

export default Discount;
