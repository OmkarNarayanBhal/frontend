import React from "react";
import "./footer.css";
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillInstagram,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <p>
          &copy; 2024 Your E-Learning Platform. All rights reserved. <br /> Made
          with ❤️‍🩹 <a href="https://omkar-portfolio-1.onrender.com">Omkar bhal</a>
        </p>
        <div className="social-links">
          <a href="https://omkar-portfolio-1.onrender.com">
            <AiFillFacebook />
          </a>
          <a href="https://omkar-portfolio-1.onrender.com">
            <AiFillTwitterSquare />
          </a>
          <a href="https://www.instagram.com/_14omkar/">
            <AiFillInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
