/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import _ from "lodash";
import "./Details.css";
import CryptoCharts from "../../pages/CryptoCharts";
import CryptoConverter from "./Converter";

const Details = () => {
  const { name } = useParams();
  const [detail, setDetail] = useState("");

  const fetchdata = async () => {
    try {
      console.log(name);
      const { data } = await axios.get(
        `https://api.coingecko.com/api/v3/coins/${name}`
      );
      console.log(data);
      setDetail(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <div className="details">
      <div className="decp-convt">
        <div className="decp">
          <div className="detail">
            <p>Rank: {detail?.market_cap_rank}</p>
            <p>{detail?.name}</p>

            <p>Symbol: {_.toUpper(detail?.symbol)}</p>
            <p>Price: ${detail?.market_data?.current_price?.usd}</p>
            <p>Market Cap: ${detail?.market_data?.market_cap?.usd}</p>
          </div>
          <div className="coin-img">
            <img src={detail?.image?.large} alt="" className="coin" />
          </div>
        </div>

        <CryptoConverter name={name} />
      </div>

      <CryptoCharts name={name} />
      <div className="info">
        <p dangerouslySetInnerHTML={{ __html: detail?.description?.en }} />
      </div>
    </div>
  );
};

export default Details;
