import React from "react";
import products from "../data/products";
import ProductCard from "../components/ProductCard";
import GridCardContainer from "../components/GridCardContainer";

const FilteredProducts = ({ category }) => {
  return(
    <GridCardContainer products={products}/>
  )
  
  
};

export default FilteredProducts;
