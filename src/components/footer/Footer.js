import React from "react";

import linkedin from "./images/linkedin.png";
import twitter from "./images/twitter.png";
import github from "./images/github.png";

import "./Footer.css";

function Footer() {
   return (
      <div className="footer">
         <img src={twitter} className="contact-logos" />
         <img src={linkedin} className="contact-logos"/>
         <img src={github} className="contact-logos" />

      </div>
   )
};

export default Footer;

