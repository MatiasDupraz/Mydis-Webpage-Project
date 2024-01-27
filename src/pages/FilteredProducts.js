import React from "react";
import products from "../data/products";
import ProductCard from "../components/ProductCard";

const FilteredProducts = ({ category }) => {
  const shownProducts = products.map((product, index) => {
    return (
      <ProductCard
        key={index}
        title={product.title}
        rate={product.rate}
        price={product.price}
        images={product.images}
        category={product.category}
        categoryID={product.categoryID}
        ID={product.ID}
      />
    );
  });
  return <div>{shownProducts}</div>;
};

export default FilteredProducts;
