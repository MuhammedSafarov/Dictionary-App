import React from "react";
import "./Footer.scss";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="social-media">
        <a href="https://www.linkedin.com/in/muhammed-safarov-ba0498246/">
          <FaLinkedin className="social-media-icon" src />
        </a>
        <a href="https://github.com/MuhammedSafarov">
          <FaGithub className="social-media-icon" />
        </a>
        <a href="https://www.instagram.com/_iamsafarov/">
          <FaInstagram className="social-media-icon" />
        </a>
      </div>
      <div className="copyright">© 2023 Developed by Muhammed Safarov</div>
    </div>
  );
};

export default Footer;
