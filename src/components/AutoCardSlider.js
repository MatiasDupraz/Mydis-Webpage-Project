//This component receives as parameter a list of products and creates an auto card slider

import React from "react";
import ProductCard from "./ProductCard";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import classNames from "classnames";

const CardSlider = ({ products, slidesQuantity, className }) => {
  const finalClassName = classNames("overflow-x-hidden ", className);

  const settings = {
    infinite: true,
    slidesToShow: slidesQuantity, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll
    autoplay: true,
    autoplaySpeed: 2000, // Interval between slides in milliseconds
  };

  const slider = products.map((product, index) => {
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
  return (
    <Slider className={finalClassName} {...settings}>
      {slider}
    </Slider>
  );
};

export default CardSlider;
