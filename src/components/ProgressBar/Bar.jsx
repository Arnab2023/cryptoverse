/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import "./bar.css";
const Bar = ({ width, score }) => {
  const color = score >= 7 ? "#32de84" : score < 4 ? "red" : "yellow";

  return (
    <div className="box">
      <div className="bar-container">
        <div
          className="bar"
          style={{ width: `${width}%`, backgroundColor: color }}
        ></div>
      </div>
      <span className="score">{score}</span>
    </div>
  );
};

export default Bar;
