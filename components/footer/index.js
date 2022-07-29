import React from "react";
import styles from "./footer.module.css";

import Imo from "../../public/imo.png";
import Instagram from "../../public/inst.png";
import Facebook from "../../public/facebook.png";
import LiNokat from "../../public/li-nokat.png";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.colmn}>
        <h2>Сервис</h2>
        <ul>
          <li className={styles.li_item}>
            <Image src={LiNokat} objectFit="contain" />
            <span>Кухня на заказ</span>
          </li>
          <li className={styles.li_item}>
            <Image src={LiNokat} objectFit="contain" />
            <span>Профессиональный замер</span>
          </li>
          <li className={styles.li_item}>
            <Image src={LiNokat} objectFit="contain" />
            <span>Доставка и подъем</span>
          </li>
          <li className={styles.li_item}>
            <Image src={LiNokat} objectFit="contain" />
            <span>Оплата</span>
          </li>
          <li className={styles.li_item}>
            <Image src={LiNokat} objectFit="contain" />
            <span>Рассрочка</span>
          </li>
          <li className={styles.li_item}>
            <Image src={LiNokat} objectFit="contain" />
            <span>Сборка</span>
          </li>
          <li className={styles.li_item}>
            <Image src={LiNokat} objectFit="contain" />
            <span>Обратная связь</span>
          </li>
          <li className={styles.li_item}>
            <Image src={LiNokat} objectFit="contain" />
            <span>Гарантия от производителя</span>
          </li>
        </ul>
      </div>
      <div className={styles.colmn}>
        <h2>Профиль</h2>
        <ul>
          <li className={styles.li_item}>
            <Image src={LiNokat} objectFit="contain" />
            <span>Профиль</span>
          </li>
          <li className={styles.li_item}>
            <Image src={LiNokat} objectFit="contain" />
            <span>Корзина</span>
          </li>
          <li className={styles.li_item}>
            <Image src={LiNokat} objectFit="contain" />
            <span>Сохранненые</span>
          </li>
          <li className={styles.li_item}>
            <Image src={LiNokat} objectFit="contain" />
            <span>Скидки</span>
          </li>
          <li className={styles.li_item}>
            <Image src={LiNokat} objectFit="contain" />
            <span>Подарочные карты</span>
          </li>
          <li className={styles.li_item}>
            <Image src={LiNokat} objectFit="contain" />
            <span>Возврат мебели</span>
          </li>
        </ul>
      </div>
      <div className={styles.colmn}>
        <h2>Компания</h2>
        <ul>
          <li className={styles.li_item}>
            <Image src={LiNokat} objectFit="contain" />
            <span>О нас</span>
          </li>
          <li className={styles.li_item}>
            <Image src={LiNokat} objectFit="contain" />
            <span>Магазины</span>
          </li>
          <li className={styles.li_item}>
            <Image src={LiNokat} objectFit="contain" />
            <span>Новости</span>
          </li>
          <li className={styles.li_item}>
            <Image src={LiNokat} objectFit="contain" />
            <span>Вакансии в “RYSGAL MEBEL”</span>
          </li>
          <li className={styles.li_item}>
            <Image src={LiNokat} objectFit="contain" />
            <span>Контакты</span>
          </li>
          <li className={styles.li_item}>
            <Image src={LiNokat} objectFit="contain" />
            <span>Франшиза</span>
          </li>
          <li className={styles.li_item}>
            <Image src={LiNokat} objectFit="contain" />
            <span>Обратная связь</span>
          </li>
          <li className={styles.li_item}>
            <Image src={LiNokat} objectFit="contain" />
            <span>Гарантия от производителя</span>
          </li>
        </ul>
      </div>
      <div className={styles.colmn}>
        <p>Присоединяйтесь к нам в социальных медиа!</p>
        <div className={styles.colmn__icons}>
          <div className={styles.icons}>
            <Image src={Imo} width={40} height={40} />
            <Image src={Instagram} width={40} height={40} />
            <Image src={Facebook} width={40} height={40} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
