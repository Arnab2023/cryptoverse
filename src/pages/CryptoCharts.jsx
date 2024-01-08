/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import "./cryptochart.css";
import Chart from "../components/Chart/Chart";
import axios from "axios";
import { useParams } from "react-router-dom";
import Details from "../components/details/Details";
const CryptoCharts = ({ name }) => {
  const [prices, setPrices] = useState(null);
  const [market, setMarket] = useState(null);
  const [activeButton, setActiveButton] = useState("price");

  const fetchdata = async () => {
    try {
      const { data } = await axios.get(
        `https://api.coingecko.com/api/v3/coins/${name}/market_chart?vs_currency=usd&days=1`
      );
      setPrices(data.prices);
      setMarket(data.market_caps);
    } catch (e) {
      console.log(e);
    }
  };
  const price_labels = prices?.map((x) => "|");
  const price_datas = prices?.map((x) => x[1]);
  const market_labels = market?.map((x) => "|");
  const market_datas = market?.map((x) => x[1]);
  // console.log(datas);
  // console.log(labels);

  useEffect(() => {
    console.log(name);
    fetchdata();
  }, []);

  return (
    <div className="Page-box">
      <div className="chart-container">
        <div className="button-container">
          <button
            className={activeButton == "price" ? "btn click" : "btn"}
            onClick={() => setActiveButton("price")}
          >
            <span className="btn-span">Prices</span>{" "}
          </button>
          <button
            className={activeButton == "market" ? "btn click" : "btn"}
            onClick={() => setActiveButton("market")}
          >
            <span className="btn-span">Market-Prices</span>{" "}
          </button>
        </div>
        {activeButton == "price" ? (
          <div className="chart">
            <Chart datas={price_datas} labels={price_labels} text="Price" />
          </div>
        ) : (
          <div className="chart">
            <Chart
              datas={market_datas}
              labels={market_labels}
              text="Market_cap"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default CryptoCharts;
