import Image from "next/image";
import Logo from "../../public/logo1.png";
import Phone from "../../public/phone.png";
import playIcon from "../../public/play.png";
import Location from "../../public/location.png";
import User from "../../public/user.png";
import Imo from "../../public/imo.png";
import Instogram from "../../public/inst.png";
import Facebook from "../../public/facebook.png";
import SearchIcon from "../../public/searchion.png";
import Like from "../../public/like.png";
import Cart from "../../public/cart.png";
import CloseIcon from "../../public/close.png";

import style from "./header.module.css";
import Button1 from "../button";
import Link from "next/link";

import { useDispatch, useSelector } from "react-redux";
import { setSearchTitle } from "../../store/actions/search";
import { useEffect, useState } from "react";
import { BASE_URL } from "../../store/urls";
import { addAllLocalLikes } from "../../store/actions/likedProductsActions";
// import myImageLoader from "../loader/myloader";
// import LocalImageLoader from "../loader/localLoader";

export default function Header() {
  const [magazinModalShow, setMagazinModalShow] = useState(false);
  const [gifData, setGifData] = useState(null);
  const [categoryListShow, setCategoryListShow] = useState(false);

  const { card, search, user, category, likes } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!gifData) {
      fetch(BASE_URL + "/api/products/gif-banner/")
        .then((res) => res.json())
        .then((json) => setGifData(json.data.image))
        .catch((err) => console.log(err));
    }
    // ---------------localStorage da bar bolar like-lary redux-a yazmak. START!------------
    const localLike = localStorage.getItem("like");
    if (localLike && likes.length === 0) {
      const pars = JSON.parse(localLike);
      dispatch(addAllLocalLikes(pars));
    }
    // ---------------localStorage da bar bolar like-lary redux-a yazmak. START!------------
  }, []);

  return (
    <header className={style.header}>
      <div className={style.container} onM>
        <div className={style.sec1}>
          <div style={{ cursor: "pointer" }}>
            <Link href="/">
              <a>
                <Image src={Logo} alt="logo" />
              </a>
            </Link>
          </div>
          <div className={style.gif_section}>
            {gifData && (
              <Image src={BASE_URL + gifData} width={1000} height={80} />
            )}
          </div>
          <div>
            <ul className={style.navbar}>
              <li>
                <Link href={"/media"}>
                  <a className={style.navbar_sec}>
                    <Image
                      className={style.prof}
                      width={25}
                      height={25}
                      objectFit="contain"
                      src={playIcon}
                      alt="phone"
                    />
                    <span className={style.navbar_title}>Медия</span>
                  </a>
                </Link>
              </li>
              <li onClick={() => setMagazinModalShow(true)}>
                <Image
                  className={style.prof}
                  width={25}
                  height={25}
                  objectFit="contain"
                  src={Location}
                  alt="location"
                />
                <span>Магазины</span>
              </li>
              <li>
                <Link href={user.token ? "/profile" : "/login"}>
                  <a className={style.navbar_sec}>
                    <Image
                      className={style.prof}
                      width={30}
                      height={30}
                      objectFit="contain"
                      src={User}
                      alt="user"
                    />
                    <span className={style.navbar_title}>Профиль</span>
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={style.sec2}>
          <Button1 setFunction={() => setCategoryListShow(true)}>
            Все категории
          </Button1>
          <div className={style.search_section}>
            <input
              className={style.search}
              type="text"
              placeholder="Поиск"
              name="Search"
              value={search.title}
              onChange={(e) => dispatch(setSearchTitle(e.target.value))}
            />
            <Link href={"/search"}>
              <a>
                <Button1>
                  <Image width={35} height={35} src={SearchIcon} />
                </Button1>
              </a>
            </Link>
          </div>
          <Link href={"/like"}>
            <a>
              <div className={style.like_section}>
                <div className={style.like_icon}>
                  <Image
                    src={Like}
                    width={50}
                    height={48}
                    style={{ cursor: "pointer" }}
                  />
                </div>
                <div className={style.like_count}>{likes.length}</div>
              </div>
            </a>
          </Link>

          <ul className={style.navbar}>
            <li>
              <Image className={style.icons} width={48} height={48} src={Imo} />
            </li>
            <li>
              <Image
                className={style.icons}
                width={48}
                height={48}
                src={Instogram}
              />
            </li>
            <li>
              <Image
                className={style.icons}
                width={48}
                height={48}
                src={Facebook}
              />
            </li>
          </ul>
          <Link href={`/cart`}>
            <a className={style.cart}>
              <Image src={Cart} width={43} height={45} />+{card.length}
            </a>
          </Link>
        </div>
        {categoryListShow && (
          <div
            className={style.category__list_show}
            onMouseLeave={() => setCategoryListShow(false)}
          >
            {category.data &&
              category.data.map((cat) => (
                <div key={cat.id} className={style.cat_item}>
                  <span>{cat.title_tm}</span>
                  <div className={style.subcat}>
                    {cat.subcategories.map((sub) => (
                      <Link key={sub.id} href={`/category/${sub.id}`}>
                        <a>
                          <div className={style.subcat_item}>
                            {sub.title_tm}
                          </div>
                        </a>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
          </div>
        )}
      </div>
      {magazinModalShow && (
        <div className={style.magazin_modal}>
          <div
            className={style.magazin_modal__close}
            onClick={() => setMagazinModalShow(false)}
          >
            <Image src={CloseIcon} width={36} height={36} />
          </div>
          <div className={style.magazin_modal__container}>
            <div className={style.karta_modal}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d25166.585301938532!2d58.39670772134997!3d37.95791483986182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sRysgal%20mebel!5e0!3m2!1sru!2s!4v1661403747160!5m2!1sru!2s"
                width={"100%"}
                height={"100%"}
                style={{ border: "0" }}
                // allowfullscreen="false"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
