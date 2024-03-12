/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import List from "../components/list/List";
import "./home.css";
import loaderImg from "../assets/loader.gif";
import { useNavigate } from "react-router-dom";
const Home = ({ setProgress }) => {
  const [coins, setCoins] = useState(null);
  const [page, setPage] = useState(1);
  const [clicked, setClicked] = useState(1);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchdata = async () => {
    try {
      const { data } = await axios.get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=${page}&sparkline=false`
      );
      setCoins(data);
      setLoading(false);
      setProgress(100);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchdata();
    // setLoading(true);
  }, [page]);

  return (
    <>
      <div>
        <Header />
        {loading ? (
          <div className="load-img">
            <img src={loaderImg} />
          </div>
        ) : (
          <div className="heading">
            <table>
              <tr>
                <th className="right">#</th>
                <th className="right ">Coin</th>
                <th>Price</th>
                <th>24h</th>
                <th>24h Volume</th>
                <th className="mkt">Mkt Cap</th>
              </tr>

              {coins &&
                coins?.map((coin, index) => (
                  <>
                    <tr
                      key={index}
                      onClick={() => {
                        navigate(`/detail/${coin?.id}`);
                      }}
                    >
                      <td className="right" scope="row">
                        {coin?.market_cap_rank}
                      </td>

                      <td className="right">
                        <img src={coin.image} className="img" alt="" />
                        {coin?.name}
                      </td>
                      <td>${coin?.current_price}</td>
                      <td
                        className={
                          coin?.price_change_percentage_24h < 0
                            ? "red"
                            : "green"
                        }
                      >
                        {coin?.price_change_percentage_24h}%
                      </td>
                      <td>
                        $
                        {coin?.total_volume.toLocaleString(undefined, {
                          maximumFractionDigits: 0,
                        })}
                      </td>
                      <td>${coin?.market_cap.toLocaleString()}</td>
                    </tr>
                  </>
                ))}
            </table>
          </div>
        )}
      </div>

      <div className="pagination">
        <ul>
          <li>
            <span
              className={page == 1 ? "clicked" : ""}
              onClick={() => {
                setPage(1);
              }}
            >
              1
            </span>
          </li>
          <li>
            <span
              className={page == 2 ? "clicked" : ""}
              onClick={() => {
                setPage(2);
              }}
            >
              2
            </span>
          </li>
          <li>
            <span
              className={page == 3 ? "clicked" : ""}
              onClick={() => {
                setPage(3);
              }}
            >
              3
            </span>
          </li>
          <li>
            <span
              className={page == 4 ? "clicked" : ""}
              onClick={() => {
                setPage(4);
              }}
            >
              4
            </span>
          </li>
          <li>
            <span
              className={page == 5 ? "clicked" : ""}
              onClick={() => {
                setPage(5);
              }}
            >
              5
            </span>
          </li>
        </ul>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Home;
