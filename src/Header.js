import React from "react";
import "./Header.css";
import LowerHeader from './LowerHeader';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

export default function Header() {
  return (
    <div className="header">
      <div className="upper__header">
        <div className="main__header">
          {/* Logo */}
          <div className="main__header--section">
            <div className="main__header--sectionLogo">
              <img className="upper_header--logo" src="//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_4ee2f9.png" alt="flipkart"/>
            </div>
            <div className="main__header--link">
              <a href="https://www.flipkart.com/plus" target="logo-link">Explore
                <span className="main__header--linkplus">
                  Plus
                  <img src="//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/plus_b13a8b.png" alt="logo-image"/>
                </span>
              </a>
            </div>
          </div>

          {/* Search */}
          <div className="main__header--search">
            <input type="text" placeholder="Search for products, brands and more"></input>
            <SearchIcon className="main__header--searchIcon"/>
          </div>

          {/* Right Header UPPER */}
          <div  className="main__header--right">
            <div className="main__header--login">
              <h3>Login</h3>
            </div>
            <div className="main__header--More">
              <h3>More</h3>
              <ExpandMoreIcon fontSize="small"/>
            </div>
            <div className="main__header--Cart">
              <ShoppingCartIcon fontSize="small"/>
              <h3>Cart</h3>
            </div>
          </div>
        </div>
      </div>

    <div className="child__header">
      <div className="lower__header">
        <LowerHeader category = "Electronics"/>
        <LowerHeader category = "TV & Applicances"/>
        <LowerHeader category = "Men"/>
        <LowerHeader category = "Women"/>
        <LowerHeader category = "Baby & Kids"/>
        <LowerHeader category = "Home & Furniture"/>
        <LowerHeader category = "Sports, Books & More"/>
      </div>
    </div>
  </div>
  );
}
