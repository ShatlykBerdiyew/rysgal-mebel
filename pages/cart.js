import React from "react";
import { useSelector } from "react-redux";
import Card from "../components/Card/Card";
import Header from "../components/header";

const Cart = () => {
  const { card } = useSelector((state) => state);

  let totalPrice = 0;
  card.map((item) => {
    totalPrice = totalPrice + item.price;
  });
  return (
    <div className="cart">
      <Header />
      <div className="cart_container">
        <div className="cart__order_section">
          <span>Harytlaryn jemi bahasy: {totalPrice} TMT</span>
          <p>Sargyt etmek</p>
        </div>
        <div className="cart__products_view">
          {card.length > 0 ? (
            card.map((item) => (
              <Card
                inCart={true}
                key={item.prod_id}
                prod_id={item.prod_id}
                img_url={item.img_url}
                title={item.title}
                price={item.price}
                desc={item.desc}
              />
            ))
          ) : (
            <span style={{ fontSize: "2rem", fontWeight: "700" }}>
              Cart Emputy
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
