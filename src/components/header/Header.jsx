/* eslint-disable no-unused-vars */
import React from "react";
import logo from "../../assets/logo.png";
import "./style.css";
import Typewriter from "typewriter-effect";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="header">
        <div className="container">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="title">
            <Typewriter
              className="typewriter"
              onInit={(typewriter) => {
                typewriter
                  .typeString("Cryptoverse .")

                  .pauseFor(5000)
                  .deleteAll()
                  .typeString("Cryptoverse .")
                  .deleteAll()
                  .start();
              }}
              options={{
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </div>
        <hr />
      </div>
      <div className="navbar">
        <ul>
          <li
            onClick={() => {
              navigate("/");
            }}
          >
            Home
          </li>
          <li
            onClick={() => {
              navigate("/crypto");
            }}
          >
            Cryptocurrencies
          </li>
          <li
            onClick={() => {
              navigate("/exchanges");
            }}
          >
            Exchanges
          </li>
          <li
            onClick={() => {
              navigate("/news");
            }}
          >
            News
          </li>
        </ul>
        <hr />
      </div>
    </>
  );
};

export default Header;
