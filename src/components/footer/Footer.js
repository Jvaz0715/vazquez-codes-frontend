import React from "react";

import linkedin from "./images/linkedin.png";
import twitter from "./images/twitter.png";
import github from "./images/github.png";

import "./Footer.css";

function Footer() {
   const twitterURL = "https://twitter.com/";
   const linkedinURL = "https://www.linkedin.com/in/jamesvazquez01/";
   const githubURL = "https://github.com/Jvaz0715";
   return (
      <div className="footer">
         <div className="logos-container">
            <a href={twitterURL} target="_blank"><img src={twitter} className="contact-logos" /></a>
            <a href={linkedinURL} target="_blank"><img src={linkedin} className="contact-logos"/></a>
            <a href={githubURL} target="_blank"><img src={github} className="contact-logos" /></a>
         </div>
         <div className="copyright">
            <p>Copyright 2021</p>
         </div>
         
      </div>
   )
};

export default Footer;

