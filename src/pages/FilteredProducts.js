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
        className={"max-w-[80%] self-center mx-16 md:mx-4"}
        ID={product.ID}
      />
    );
  });
  return (
    <div className="flex justify-center pt-[168px] items-center w-full">
      <div className="grid md:grid-cols-9 items-center w-full ">
        <div className="hidden lg:block md:col-span-1 "></div>
        <div className="col-span-8 col-start-0 lg:col-span-7  grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 mx-auto mb-10 md:mb-0">
          {shownProducts}
          {shownProducts}
        </div>
        <div className="hidden lg:block md:col-span-1 "></div>
      </div>
    </div>
  );
};

export default FilteredProducts;
