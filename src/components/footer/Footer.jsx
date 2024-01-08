/* eslint-disable no-unused-vars */
import React from "react";
import "./style.css";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-container">
      <footer className="footer">
        <ul className="menuItems">
          <li className="menuItem">Terms Of Use</li>
          <li className="menuItem">Privacy-Policy</li>
          <li className="menuItem">About</li>
          <li className="menuItem">Blog</li>
          <li className="menuItem">FAQ</li>
        </ul>
        <div className="infoText">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </div>
        <div className="socialIcons">
          <ul>
            <li>
              <a href="#" className="icon-container">
                <i className="icon">
                  <FaFacebookF />
                </i>
              </a>
            </li>
            <li>
              <a href="#" className="icon-container">
                <i className="icon">
                  <FaInstagram />
                </i>
              </a>
            </li>
            <li>
              <a href="#" className="icon-container">
                <i className="icon">
                  <FaTwitter />
                </i>
              </a>
            </li>
            <li>
              <a href="#" className="icon-container">
                <i className="icon">
                  <FaLinkedin />
                </i>
              </a>
            </li>
          </ul>
        </div>

        {/* Other elements can be added here */}

        <div className="contact-info">
          <p>Contact us: contact@example.com</p>
          <p>Phone: +1 123-456-7890</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
