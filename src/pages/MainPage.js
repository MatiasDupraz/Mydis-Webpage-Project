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
import GridCardContainer from "../components/GridCardContainer";

function MainPage() {

  return (
    <div className="pt-[168px] overflow-x-hidden">
      <BannerSlider banners={bannersS} className={"md:hidden"} />
      <BannerSlider banners={banners} className={"hidden md:block"} />
      <AutoCardSlider
        products={products}
        slidesQuantity={3}
        className="hidden lg:flex xl:hidden"
      />
      <AutoCardSlider
        products={products}
        slidesQuantity={4}
        className="hidden xl:flex 2xl:hidden"
      />
      <AutoCardSlider
        products={products}
        slidesQuantity={5}
        className="hidden 2xl:flex"
      />
      <GridCardContainer products={products} className='lg:hidden'/>
    </div>
  );
}

export default MainPage;
