import Image from "next/image";
import Logo from "../../public/logo1.png";
import Phone from "../../public/phone.png";
import Location from "../../public/location.png";
import User from "../../public/user.png";
import Imo from "../../public/imo.png";
import Instogram from "../../public/inst.png";
import Facebook from "../../public/facebook.png";
import SearchIcon from "../../public/searchion.png";
import Like from "../../public/like.png";
import Cart from "../../public/cart.png";
import style from "./header.module.css";
import Button1 from "../button";

export default function Header() {
  return (
    <header className={style.header}>
      <div className={style.container}>
        <div className={style.sec1}>
          <div>
            <Image src={Logo} alt="logo" />
          </div>
          <div>
            <ul className={style.navbar}>
              <li>
                <Image
                  className={style.prof}
                  width={25}
                  height={25}
                  objectFit="contain"
                  src={Phone}
                  alt="phone"
                />
                <span>Звонить</span>
              </li>
              <li>
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
                <Image
                  className={style.prof}
                  width={25}
                  height={25}
                  objectFit="contain"
                  src={User}
                  alt="user"
                />
                <span>Профиль</span>
              </li>
              <li>
                <Image
                  className={style.icons}
                  width={48}
                  height={48}
                  src={Imo}
                />
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
          </div>
        </div>
        <div className={style.sec2}>
          <Button1 setFunction={() => console.log("click")}>
            Все категории
          </Button1>
          <input className={style.search} type="text" placeholder="Поиск" />
          <Button1>
            <Image width={39.71} height={42.37} src={SearchIcon} />
          </Button1>
          <Image src={Like} width={50} height={48} />
          <button className={style.cart}>
            <Image src={Cart} width={43} height={45} />
            -1234
          </button>
        </div>
      </div>
    </header>
  );
}
