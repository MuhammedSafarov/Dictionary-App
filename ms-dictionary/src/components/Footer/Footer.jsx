import React from "react";
import "./Footer.scss";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="social-media">
        <FaLinkedin className="social-media-icon" />
        <FaGithub className="social-media-icon" />
        <FaInstagram className="social-media-icon" />
      </div>
      <div className="copyright">© 2023 by Muhammed Safarov</div>
    </div>
  );
};

export default Footer;
