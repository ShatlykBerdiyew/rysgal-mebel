import Image from "next/image";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../components/Card/Card";
import Header from "../components/header";
import left_array from "../public/left-arrow.png";
import delete_icon from "../public/x-mark.png";
import minus from "../public/minus.png";
import plus from "../public/plus.png";
import delete_item_icon from "../public/delete.png";
import { BASE_URL } from "../store/urls";
import Link from "next/link";
import { addCard, changeQtyProduct, deleteCard } from "../store/actions/card";
import { useEffect } from "react";
import { useState } from "react";
import { asyncOrderCreate } from "../store/asyncActions/asyncOrder";
import cn from "classnames";
import Loading from "../components/Loading";
import Router from "next/router";
// import myImageLoader from "../components/loader/myloader";
// import LocalImageLoader from "../components/loader/localLoader";

const Cart = () => {
  const { card, user, loading, order } = useSelector((state) => state);

  const [totalPrice, setTotalPrice] = useState(0);
  const [orderDetail, setOrderDetail] = useState({
    payment_type: "NAGT",
    region: "Asgabat",
    address: "",
    items: [],
  });

  const [orderItems, setOrderItems] = useState([]);
  const [userAuth, setUserAuth] = useState(false);

  useEffect(() => {
    const localCart = localStorage.getItem("cart");

    if (localCart && card.length === 0) {
      const data = JSON.parse(localCart);
      data.map((item) => dispatch(addCard(item)));
      console.log("render local cart");
    }
  }, []);

  const dispatch = useDispatch();
  useEffect(() => {
    let ddd = 0;
    const arr = [];

    card.map((item) => {
      console.log("card change", item, orderDetail);
      ddd = ddd + item.price * item.qty;

      arr.push({
        product: item.prod_id,
        product_price: item.price,
        qty: item.qty,
      });
    });
    setOrderItems(arr);
    setTotalPrice(ddd);
    localStorage.setItem("cart", JSON.stringify(card));
  }, [card]);

  console.log("order detail++++++: ", orderItems);

  const handleOrderCreate = () => {
    orderDetail.items = orderItems;

    if (user.token) {
      dispatch(asyncOrderCreate(user.token, orderDetail));
    } else if (localStorage.getItem("token")) {
      dispatch(asyncOrderCreate(localStorage.getItem("token"), orderDetail));
    } else {
      // Router.push("/login");
      setUserAuth(true);
    }
  };

  return (
    <div className="cart">
      {userAuth ? (
        <div className="cart_modal_alert_con">
          <div className="cart_modal">
            <p>
              Haryt sargyt etmek uchin ilki oz profilinize girmeginizi hayysh
              etyaris!
            </p>
            <div className="cart_model_btn">
              <button className="secondry" onClick={() => setUserAuth(false)}>
                Yza
              </button>
              <button className="primary" onClick={() => Router.push("/login")}>
                profile gechmek
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="cart_container">
          <div className="cart_head">
            <div>
              <Link href={`/`}>
                <a>
                  <Image src={left_array} width={26} height={24} />
                </a>
              </Link>
            </div>
            <div className="cart_head__title">
              <span>Continue Shopping</span>
            </div>
            <div>
              <Image src={delete_icon} width={26} height={26} />
            </div>
          </div>
          <div className="cart_main">
            <div className="cart_main__products_view">
              <div className="cart_main__title_section">
                <h2>Confirm order and pay</h2>
                <div className="divider"></div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consequatur, obcaecati.
                </p>
              </div>
              <div className="divider"></div>
              <div className="divider"></div>
              <div className="cart_main__produtcs_list">
                {card.length > 0 ? (
                  card.map((item, index) => (
                    <div key={index}>
                      <div className="divider"></div>
                      <div className="cart_main__item">
                        <div className="cart_main__item_image">
                          <Image
                            src={BASE_URL + item.img_url}
                            width={50}
                            height={50}
                          />
                        </div>
                        <div className="cart_main__item_title">
                          <h3>{item.title}</h3>
                          <p>{item.desc.slice(0, 50)}</p>
                        </div>
                        <div className="set_count">
                          <div className="set_count__image">
                            <Image
                              src={minus}
                              width={24}
                              height={24}
                              onClick={() => {
                                item.qty > 1
                                  ? dispatch(changeQtyProduct(item.prod_id, -1))
                                  : null;
                                setOrderDetail({ ...orderDetail, items: [] });
                              }}
                            />
                          </div>
                          <span className="count">{item.qty}</span>
                          <div className="set_count__image">
                            <Image
                              src={plus}
                              width={24}
                              height={24}
                              onClick={() => {
                                dispatch(changeQtyProduct(item.prod_id, 1));
                                setOrderDetail({ ...orderDetail, items: [] });
                              }}
                            />
                          </div>
                        </div>
                        <div className="cart_main__item_price">
                          <span>{item.price * item.qty} TMT</span>
                        </div>
                        <div
                          className="cart_main__item_delete"
                          onClick={() => dispatch(deleteCard(item.prod_id))}
                        >
                          <Image
                            src={delete_item_icon}
                            width={24}
                            height={24}
                          />
                        </div>
                      </div>
                    </div>
                  ))
                ) : order.id ? (
                  <h3>
                    Sargydynyz kabul edildi. Edilen sargytlary gormek uchin oz
                    profilinize girin!
                  </h3>
                ) : (
                  <h3>Bosh</h3>
                )}
              </div>
            </div>
            <div className="cart_main__products_order">
              <div>
                <h4>Payment Details</h4>
              </div>
              <div className="divider"></div>
              <p>Tolegin gornushini saylan</p>
              <div className="cart_order__pay">
                <div
                  className={cn("cart_order__pay_item", {
                    bg_green: orderDetail.payment_type === "NAGT",
                  })}
                  onClick={() =>
                    setOrderDetail({ ...orderDetail, payment_type: "NAGT" })
                  }
                >
                  Nagt
                </div>
                <div
                  className={cn("cart_order__pay_item", {
                    bg_green: orderDetail.payment_type === "TERMINAL",
                  })}
                  onClick={() =>
                    setOrderDetail({ ...orderDetail, payment_type: "TERMINAL" })
                  }
                >
                  Terminal
                </div>
              </div>
              <div className="divider"></div>
              <div className="divider"></div>
              <div className="cart_order__from">
                <p>Region</p>
                <select
                  defaultValue={orderDetail.region}
                  onChange={(e) =>
                    setOrderDetail({ ...orderDetail, region: e.target.value })
                  }
                >
                  <option className="select_item" value="Ashgabat">
                    Ashgabat
                  </option>
                  <option className="select_item" value="Ahal">
                    Ahal
                  </option>
                  <option className="select_item" value="Mary">
                    Mary
                  </option>
                  <option className="select_item" value="Lebap">
                    Lebap
                  </option>
                  <option className="select_item" value="Balkan">
                    Balkan
                  </option>
                  <option className="select_item" value="Dashoguz">
                    Dashoguz
                  </option>
                </select>
                <div className="divider"></div>
                <p>Address</p>
                <input
                  type="text"
                  onChange={(e) =>
                    setOrderDetail({ ...orderDetail, address: e.target.value })
                  }
                />
                {/* <div className="divider"></div>
              <input type="text" /> */}
              </div>
              <div className="divider"></div>
              <div className="divider"></div>
              <div>
                <h3>Harytlaryn jemi bahasy: </h3>
                <h3>Ertip bermek hyzmatyna:</h3>
                <h3>Gurnap bermek hyzmatyna: </h3>
              </div>
              <div className="divider"></div>
              <div className="divider"></div>
              <button
                className="button_pay"
                disabled={card.length === 0}
                onClick={handleOrderCreate}
              >
                {loading ? <Loading /> : `By now ${totalPrice}`}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
