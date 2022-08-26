import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Card from "../components/Card/Card";
import Header from "../components/header";
import { BASE_URL } from "../store/urls";

const Search = () => {
  const { search } = useSelector((state) => state);
  const [searchProducts, setSearchProducts] = useState([]);

  useEffect(() => {
    fetch(
      `${BASE_URL}/api/products/product-list/?title_tm=${search.title}&limit=10&offset=0`
    )
      .then((res) => res.json())
      .then((json) => setSearchProducts(json.data.results))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="cart_page">
      <Header />
      <div className="search_page__container">
        {searchProducts.map((item) => (
          <Card
            key={item.id}
            prod_id={item.id}
            img_url={item.main_image}
            title={item.title_tm}
            price={item.get_price}
            desc={item.description_tm}
          />
        ))}
      </div>
    </div>
  );
};

export default Search;
