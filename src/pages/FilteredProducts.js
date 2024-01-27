import React from "react";
import products from "../data/products";
import ProductCard from "../components/ProductCard";

const FilteredProducts = ({ category }) => {
  let shownProducts = products.map((product, index) => {
    return (
      <ProductCard
        key={index}
        title={product.title}
        rate={product.rate}
        price={product.price}
        images={product.images}
        category={product.category}
        categoryID={product.categoryID}
        className={"max-w-[100%]"}
        ID={product.ID}
      />
    );
  });
  return (
    <div className="flex justify-center pt-[168px] items-center">
      <div className="grid grid-cols-9 items-center">
        <div className="hidden lg:block md:col-span-1 "></div>
        <div className="col-span-9 lg:col-span-7  grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center items-center">
          {shownProducts}
          {shownProducts}
        </div>
        <div className="hidden lg:block md:col-span-1 "></div>
      </div>
    </div>
  );
};

export default FilteredProducts;
