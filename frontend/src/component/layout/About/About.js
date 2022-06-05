import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedinIcon from "@material-ui/icons/LinkedIn"
const About = () => {
  const visitInstagram = () => {
    window.location = "https://www.instagram.com/goyal_tarun4463";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://res.cloudinary.com/dzzdhs03t/image/upload/v1651145044/avatars/aogyzcfmjpp1ryiuutds.jpg"
              alt="Founder"
            />
            <Typography>Tarun Goyal</Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit Instagram
            </Button>
            <span>
              This is a MagicTel wesbite made by @tarungoyal. here u can buy any MagicTel product on very low cost with discount and coupns     
              Thanks....
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Our Brands</Typography>
            <a
              href="https://www.linkedin.com/in/tarun-goyal-137899194/"
              target="blank"
            >
              <LinkedinIcon className="youtubeSvgIcon" />
            </a>

            <a href="https://www.instagram.com/goyal_tarun4463" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;