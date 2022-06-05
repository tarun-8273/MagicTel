import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/appstore.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" />
      </div>

      <div className="midFooter">
        <h1>MAGICTEL</h1>
        <p>High Quality Is Our First Priority</p>

        <h4>Owner: MohitRaj Agrawal</h4>
        <img src={appStore} alt="Appstore" />
        <p>Contact: 9358281007</p>

        <p>Copyrights 2022 &copy; Tarun Goyal</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="https://www.instagram.com/goyal_tarun4463">Instagram</a>
        <a href="https://www.linkedin.com/in/tarun-goyal-137899194/">Linkedin</a>
        <a href="https://www.facebook.com/profile.php?id=100026747165528">Facebook</a>
      </div>
    </footer>
  );
};


export default Footer;