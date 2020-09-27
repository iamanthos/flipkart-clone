import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CarousalData from './Data/carousal.json';
import Deals from './Deals';

export default function DealsCarousel(){

  let settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    let dealSetting = {...settings, slidesToShow: 5};

  return (
    <Slider {...dealSetting} className="body__dealSlider">
      {
        CarousalData.map(({ image, heading, offer, details }) => (
        <Deals image={image} heading={heading} offer={offer} details={details}/>
        ))
      }
    </Slider>
  )
}