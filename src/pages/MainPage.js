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
  return (
    <div className="pt-44">
      <BannerSlider banners={bannersS} className={"md:hidden"} />
      <BannerSlider banners={banners} className={"hidden md:block"} />
      <CardSlider products={products} itemsToShow={3} />
      <AutoCardSlider products={products} itemsToShow={3} />
    </div>
  );
}

export default MainPage;
