import Image from "next/image";
import styles from "../styles/profile.module.css";

import addImageIcon from "../public/add-plus-svgrepo-com.svg";
import backArray from "../public/left-arrow.png";
import logautIcon from "../public/logout.png";
import upArrow from "../public/up-arrow.png";
import downArrow from "../public/down-arrow.png";

import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Router from "next/router";
import { asyncRegisterUser } from "../store/asyncActions/asyncRegisterUser";
import { asyncUserProfile } from "../store/asyncActions/asyncUserProfile";
import { BASE_URL } from "../store/urls";
import Link from "next/link";
import { logautUser } from "../store/actions/user";

export default function Profile() {
  const [orderList, setOrderList] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [orderDetailItems, setOrderDetailItems] = useState(null);

  const token = useSelector((state) => state.user.token);
  const profileData = useSelector((state) => state.user.user_profil);

  const dispatch = useDispatch();

  useEffect(() => {
    if (
      token === null ||
      token === "undefined" ||
      !localStorage.getItem("token")
    ) {
      Router.push("/login");
    } else {
      const userToken = token ? token : localStorage.getItem("token");
      dispatch(asyncUserProfile(userToken));
      fetch(BASE_URL + "/api/order/order-list/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userToken}`,
        },
      })
        .then((res) => res.json())
        .then((json) => setOrderList(json.data))
        .catch((err) => console.log(err));
    }
  }, []);

  console.log("Order List :", orderList);

  const handleOrderDetail = (id) => {
    if (selectedOrder !== id) {
      console.log(token);
      setSelectedOrder(id);
      fetch(BASE_URL + "/api/order/order-detail/" + id + "/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((json) => setOrderDetailItems(json.data))
        .catch((err) => console.log(err));
    } else {
      setSelectedOrder(null);
    }
  };

  console.log("Order details items", orderDetailItems);

  return (
    <div className={styles.profile_page}>
      <div className={styles.profile_page__container}>
        <div className={styles.profile_page__header}>
          <Link href={"/"}>
            <a>
              <Image src={backArray} width={34} height={28} />
            </a>
          </Link>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              backgroundColor: "rgba(198,198,0,0.5)",
              padding: "0.5rem 1rem",
              borderRadius: "10px",
              fontSize: "1.2rem",
            }}
            onClick={() => {
              Router.push("/");
              dispatch(logautUser());
            }}
          >
            <span>Profilden chykmak</span>
            <Image src={logautIcon} width={34} height={28} />
          </div>
        </div>
        <div className={styles.profil_section}>
          {/* Profile suratyny duryan yeri, eger surat yok bolsa shu yerde goshup bolya */}
          <div className={styles.image__section}>
            <div className={styles.prof_image}>
              <Image src={addImageIcon} objectFit="fill" />
              <div className={styles.image_title}>
                {profileData?.fullname ? profileData?.fullname : null}
              </div>
            </div>
          </div>

          {/* Ulanyjynyn shahsy maglumatlary gorkezilyar islan yagdayynda utgedip bilyar */}
          <div className={styles.user_info_section}>
            <h2>Maglumatlarym</h2>
            <div className={styles.user_info_section__form}>
              <span>Doly adynyz</span>
              <input
                className={styles.form_input}
                type={"text"}
                value={profileData?.fullname}
              />
            </div>
            <div className={styles.user_info_section__form}>
              <span>Telefon belginiz</span>
              <input
                className={styles.form_input}
                type={"text"}
                value={profileData?.mobile}
              />
            </div>
            <div className={styles.user_info_section__form}>
              <span>Sebit</span>
              <input
                className={styles.form_input}
                type={"text"}
                value={profileData?.region}
              />
            </div>
            <div className={styles.user_info_section__form}>
              <span>E-mail pochtanyz</span>
              <input
                className={styles.form_input}
                type={"text"}
                value={profileData?.email}
              />
            </div>
            <div className={styles.user_info_section__form}>
              <span>Salgy 1</span>
              <input
                className={styles.form_input}
                type={"text"}
                value={profileData?.address_line_1}
              />
            </div>
            <div className={styles.user_info_section__form}>
              <span>Salgy 2</span>
              <input
                className={styles.form_input}
                type={"text"}
                value={profileData?.address_line_2}
              />
            </div>
          </div>
        </div>
        <div className={styles.btn_section}>
          <button>Duzeltmek</button>
        </div>
        <div className={styles.history}>
          <h2>Onki satyn alynan harytlar</h2>
          <div className={styles.history_view}>
            {orderList.length > 0 ? (
              orderList.map((item, index) => (
                <>
                  <div className={styles.history_item} key={item.id}>
                    <div className={styles.id}> {index + 1}.</div>
                    <div className={styles.date}>{item.created_at}</div>
                    <div className={styles.status}>Status {item.status}</div>
                    <div className={styles.payment}>
                      Tolegin gornushi {item.payment_type}
                    </div>
                    <div className={styles.region}>Region {item.region}</div>
                    <div className={styles.address}>Address {item.address}</div>
                    <div
                      className={styles.action}
                      onClick={() => handleOrderDetail(item.id)}
                    >
                      {selectedOrder === item.id ? (
                        <Image src={upArrow} width={26} height={26} />
                      ) : (
                        <Image src={downArrow} width={26} height={26} />
                      )}
                    </div>
                  </div>
                  {selectedOrder === item.id && (
                    <div className={styles.order_detail}>
                      {orderDetailItems &&
                        orderDetailItems.items.map((orderItem) => (
                          <div className={styles.order_detail__item}>
                            <div className={styles.oder_item__image}>
                              <Image
                                src={BASE_URL + orderItem.product.main_image}
                                width={50}
                                height={50}
                                alt="mebel"
                              />
                            </div>
                            <div className={styles.order_item__title}>
                              {orderItem.product.title_tm}
                            </div>
                            <div className={styles.order_item__qty}>
                              sany: {orderItem.qty}
                            </div>
                            <div className={styles.order_item__price}>
                              Harydyn bahasy: {orderItem.product_price}
                            </div>
                          </div>
                        ))}
                      <div className={styles.order_item__total_price}>
                        <div>Total Price: {orderDetailItems?.total_price}</div>
                      </div>
                    </div>
                  )}
                </>
              ))
            ) : (
              <h2>Sargyt edilen haryt yok</h2>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
