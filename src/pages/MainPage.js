//library
import React from "react";

//components
import NavBar from "./../components/NavBar";
import AutoCardSlider from "../components/AutoCardSlider";
import CardSlider from "./../components/CardSlider";
import BannerSlider from "./../components/BannerSlider";
import Footer from "./../components/Footer";
import ChatButton from "../components/ChatButton";

//data
import products from "./../data/products";
import { banners, bannersS } from "./../data/banners";

function MainPage() {
  const slidesQuantity = {
    sm: 2,
    md: 3,
    lg: 4,
    xl: 5,
  };

  return (
    <div className="pt-[168px]">
      <BannerSlider banners={bannersS} className={"md:hidden"} />
      <BannerSlider banners={banners} className={"hidden md:block"} />
      <CardSlider products={products} className="sm:hidden" />
      <AutoCardSlider
        products={products}
        slidesQuantity={1}
        className="flex sm:hidden items-center justify-center justify-center"
      />
      <AutoCardSlider
        products={products}
        slidesQuantity={2}
        className="hidden sm:flex md:hidden"
      />
      <AutoCardSlider
        products={products}
        slidesQuantity={3}
        className="hidden md:flex lg:hidden"
      />
      <AutoCardSlider
        products={products}
        slidesQuantity={4}
        className="hidden lg:flex xl:hidden"
      />
      <AutoCardSlider
        products={products}
        slidesQuantity={5}
        className="hidden xl:flex"
      />
    </div>
  );
}

export default MainPage;
