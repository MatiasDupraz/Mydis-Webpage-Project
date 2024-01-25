//This component receives as parameter a list of images and creates an auto banner slider
import React from 'react'

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import classNames from 'classnames';

const BannerSlider = ({banners, className}) => {
    const bannerClassName = classNames('w-screen items-center')
    const settings = {
        infinite: true,
        slidesToShow: 1, // Number of slides to show at once
        slidesToScroll: 1, // Number of slides to scroll
        autoplay: true,
        autoplaySpeed: 3000, // Interval between slides in milliseconds
        pauseOnFocus: false,
        pauseOnHover: false,
    };

    const slider = banners.map((banner, index) => {
        return <div>
            <img className={bannerClassName} src={banner.src} alt={"banner " + index}/>
        </div>
    })

    return (
        <Slider className={className} {...settings}>
        {slider}
        </Slider>
    )
}

export default BannerSlider
