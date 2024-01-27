//Given the basic parameters of a product, creates a card wich displays the main information and on click redirects to the product page

import React, { useState } from "react";
import Icon from "./Icon";
import classNames from "classnames";
import usePriceFormating from "../hooks/price-formating";

const ProductCard = ({ title, rate, price, images, category, ID }) => {
  const [isHovered, setIsHovered] = useState(false);

  const formatedPrice = usePriceFormating(price);

  if (title.length > 60) {
    return null;
  }
  const titleClassName = classNames(
    "mt-2 font-semibold tracking-tight",
    isHovered ? "text-red-800" : "",
    title.length > 50 ? "md:text-lg text-md" : "md:text-xl text-md"
  );

  return (
    <div
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
      className="bg-neutral-50 shadow-md rounded-sm max-w-[50%] md:max-w-xs duration-300 hover:shadow-neutral-700 hover:shadow-lg mx-4 flex-shrink-0 my-2 "
    >
      <a
        className="prevent-select flex justify-center align-middle w-full h-44 md:h-96 bg-white"
        href={`/products/${category}/${ID}`}
      >
        <img
          className="prevent-select rounded-md flex justify-center p-1 object-contain max-w-full max-h-full m-2"
          src={images[0]}
          alt="product pic"
        />
      </a>
      <div className="px-5 pb-5 grid grid-cols-3 grid-rows-2">
        <a
          className="col-span-3 prevent-select "
          href={`/products/${category}/${ID}`}
        >
          <h3 className={titleClassName}>{title}</h3>
        </a>

        <div className="grid grid-cols-3 col-span-3 row-start-2 items-end">
          <span className="row h-10 col-span-3"></span>
          <span className="text-xl md:text-3xl font-bold text-gray-900 col-span-2 ">
            {formatedPrice}
          </span>
          <a
            href={`/products/${category}/${ID}`}
            className="text-white bg-gradient-to-r from-indigo-500 to-red-500 hover:bg-blue-800 focus:ring-2  font-medium rounded-lg text-sm px-5 py-2.5 text-center focus:ring-blue-700 col-span-2 md:col-span-1 mx-3"
          >
            +<Icon cart disableHover />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
