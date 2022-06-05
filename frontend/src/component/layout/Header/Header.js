import React from "react";
import { ReactNavbar } from "overlay-navbar";
import logo from "../../../images/logo.png";
import { FaHouseUser } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  return (
    <ReactNavbar
      burgerColorHover="#eb4034"
      logo={logo}
      logoWidth="20vmax"
      navColor1="white"
      logoHoverSize="10px"
      logoHoverColor="#eb4034"
      link1Text="Home"
      link2Text="Products"
      link3Text="Contact"
      link4Text="About"
      link1Url="/"
      link2Url="/products"
      link3Url="/contact"
      link4Url="/about"
      link1Size="1.3vmax"
      link1Color="rgba(35, 35, 35,0.8)"
      nav1justifyContent="flex-end"
      nav2justifyContent="flex-end"
      nav3justifyContent="flex-start"
      nav4justifyContent="flex-start"
      link1ColorHover="#eb4034"
      link1Margin="1vmax"
      profileIconUrl="/login"
      profileIcon={true}
      ProfileIconElement={FaHouseUser}
      profileIconColor="rgba(35, 35, 35,0.8)"
      profileIconColorHover="#eb4034"
      searchIcon={true}
      SearchIconElement={FaSearch}
      searchIconColor="rgba(35, 35, 35,0.8)"
      searchIconColorHover="#eb4034"
      cartIcon={true}
      CartIconElement={FaShoppingCart}
      cartIconColor="rgba(35, 35, 35,0.8)"
      cartIconColorHover="#eb4034"
      cartIconMargin="1vmax"
      cartIconSize="1.5vmax"
      searchIconSize="1.5vmax"
      profileIconSize="1.5vmax"
    />
  );
};

export default Header;
