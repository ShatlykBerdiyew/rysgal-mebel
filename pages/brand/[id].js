import React from "react";
import Card from "../../components/Card/Card";
import Header from "../../components/header";
import { BASE_URL } from "../../store/urls";
// import "../../styles/brand_products.css";

export const getServerSideProps = async (contex) => {
  const { id } = contex.params;

  console.log(id, typeof id);
  const response = await fetch(
    `${BASE_URL}/api/products/product-list/?brand=${Number(
      id
    )}&limit=10&offset=0`
  );
  const data = await response.json();

  const brands = await fetch(`${BASE_URL}/api/products/brands/`);
  const brand_datas = await brands.json();

  const category_data = await fetch(`${BASE_URL}/api/products/categories/`);
  const category_list = await category_data.json();

  let selected_brand;

  brand_datas.data?.map((br) => {
    if (br.id == id) {
      selected_brand = br;
    }
  });

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      products: data,
      brand: selected_brand,
      categories: category_list,
    },
  };
};

const BrandProducts = ({ products, brand, categories }) => {
  console.log("Brand products: ", products, "Brands :", brand);
  return (
    <div className="brand__products">
      <Header />
      <div className="brand__products_container">
        <div className="brand__products_header">
          <div className="brand__product_title">{brand.title}</div>
          <div
            style={{
              // paddingLeft: "1rem",
              display: "flex",
              alignItems: "end",
              fontSize: "1.1rem",
              fontWeight: 600,
              borderBottom: "1px solid black",
            }}
          >
            sany: {products.data.count}
          </div>
        </div>
        <div className="brand__products_main">
          <div className="brand__products_filter">
            {categories &&
              categories.data.map((cat) => (
                <div key={cat.id} className="filter__item">
                  <p style={{ borderBottom: "1px solid black" }}>
                    {cat.title_tm}
                  </p>
                  <ul
                    style={{
                      listStyle: "none",
                      padding: "0.5rem 1rem",
                      fontSize: "1rem",
                      fontWeight: "normal",
                    }}
                  >
                    {cat.subcategories.map((sub) => (
                      <li
                        key={sub.id}
                        style={{ marginBottom: "8px", marginLeft: "-10px" }}
                      >
                        <input type="checkbox" id={sub.id} />{" "}
                        <label htmlFor={sub.id}>{sub.title_tm}</label>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
          </div>
          <div className="brand__products_view">
            {products.data.results &&
              products.data.results.map((pro) => (
                <Card
                  key={pro.id}
                  prod_id={pro.id}
                  img_url={pro.main_image}
                  title={pro.title_tm}
                  price={pro.get_price}
                  desc={pro.description_tm}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandProducts;
