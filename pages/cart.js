import React from "react";
import { useSelector } from "react-redux";
import Card from "../components/Card/Card";
import Header from "../components/header";

const Cart = () => {
  const { card } = useSelector((state) => state);
  return (
    <div className="cart">
      <Header />
      <div className="cart_container">
        {card?.length > 0 ? (
          card.map((item) => (
            <Card
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
  );
};

export default Cart;
