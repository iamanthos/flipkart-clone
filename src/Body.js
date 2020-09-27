import React from 'react';
import Slider from 'react-slick';
import './Body.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Deals from './Deals';
import CarousalData from './Data/carousal.json';
import BannerData from './Data/banner.json';
import DealsCarousel from './DealsCarousel';
import ThreeDeals from './ThreeDeals';

export default function Body(){

  let settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    let dealSetting = {...settings, slidesToShow: 5};

  return(
    <div className="body">
      <div className="body__bannerCarousel">
        <Slider {...settings}>
          {BannerData.map(({image}) => (
             <img className="body__banner" src={image} alt="slickImg"/>
          ))}
        </Slider>
      </div>
      <div className="body__dayDeals">
        <div className="body__deals">
          <div className="body__dealsHeader">
            <h3>
              Deals of the Day
            </h3>
            <span>
              Timer
            </span>
          </div>
          <hr />
          <div className="body__dealsMain">
            <DealsCarousel />
          </div>
        </div>
        <div className="body__dealFeature">
          <img src="https://rukminim1.flixcart.com/flap/464/708/image/8e3c8c.jpg?q=70" alt="feature" />
        </div>
      </div>
      <div className="body__bannerThree">
        <img className="body__imageThree" src="https://rukminim1.flixcart.com/flap/960/960/image/5e8194a63cc5a56e.jpg?q=50" alt=""/>
        <img className="body__imageThree" src="https://rukminim1.flixcart.com/flap/960/960/image/9581455d64cad13b.jpg?q=50" alt=""/>
        <img className="body__imageThree" src="https://rukminim1.flixcart.com/flap/960/960/image/084789479074d2b2.jpg?q=50" alt=""/>
      </div>
    </div>  

  )
}