import React from "react";
import Card from "../../components/Card/Card";
import Header from "../../components/header";
import { BASE_URL } from "../../store/urls";

export async function getStaticPaths() {
  const brands = await fetch(`${BASE_URL}/api/products/brands/`);
  const brand_datas = await brands.json();
  let path = [];
  brand_datas.length &&
    brand_datas.data?.map((p) => {
      path.push(p.id);
    });
  return {
    paths: path,
    fallback: false,
  };
}

export const getStaticProps = async () => {
  const { id } = params;

  console.log(id, typeof id);
  const response = await fetch(
    `${BASE_URL}/api/products/product-list/?category=${Number(
      id
    )}&limit=10&offset=0`
  );
  const data = await response.json();

  const brands = await fetch(`${BASE_URL}/api/products/brands/`);
  const brand_datas = await brands.json();

  const category_data = await fetch(`${BASE_URL}/api/products/categories/`);
  const category_list = await category_data.json();

  let selected_category;

  category_list.data?.map((br) => {
    br.subcategories.map((sub) => {
      if (sub.id == id) {
        selected_category = sub;
      }
    });
  });

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      products: data,
      brand_list: brand_datas,
      category: selected_category,
    },
  };
};

const CategoryProducts = ({ products, brand_list, category }) => {
  console.log("Products: ", products);
  console.log("Brands: ", brand_list);
  console.log("selected category: ", category);
  [].length;
  return (
    <div className="category_products">
      <Header />
      <div className="category_products__container">
        <div className="category__header">
          <div className="category__title">{category.title_tm}</div>
          <div className="category__products_count">
            sany: {products.data.count}
          </div>
        </div>
        <div className="category_products_main">
          <div className="category__products_filter">
            {brand_list.data.map((item) => (
              <>
                <input type="checkbox" id={item.id} />
                <label className="brand_label" htmlFor={item.id}>
                  {item.title}
                </label>
              </>
            ))}
          </div>
          <div className="category__produsts_view">
            {products.data.results?.length > 0 ? (
              products.data.results.map((item) => (
                <Card
                  key={item.id}
                  prod_id={item.id}
                  img_url={item.main_image}
                  title={item.title_tm}
                  price={item.get_price}
                  desc={item.description_tm}
                />
              ))
            ) : (
              <p
                style={{
                  textAlign: "center",
                  fontSize: "1.5rem",
                  paddingTop: "2rem",
                }}
              >
                No products
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryProducts;
