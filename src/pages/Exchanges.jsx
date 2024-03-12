/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import loaderImg from "../assets/loader.gif";
// import ProgressBar from "@ramonak/react-progress-bar";
import Bar from "../components/ProgressBar/Bar";
import {useNavigate} from "react-router-dom"
const Exchanges = ({setProgress}) => {
  const [exchange, setExchange] = useState(null);
  const [page, setPage] = useState(1);
  const [clicked, setClicked] = useState(1);
  const [loading, setLoading] = useState(true);

  const navigate=useNavigate()

  const fetchdata = async () => {
    try {
      const { data } = await axios.get(
        `https://api.coingecko.com/api/v3/exchanges?per_page=20&page=${page}`
      );
      setExchange(data);
      setProgress(100)
      setLoading(false)
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
                <th className="right ">Exchange</th>
                <th className="right">Trust Score</th>
                <th>24h Volume(Normalized)</th>
                <th>24h Volume</th>
                <th className="mkt">Year Established</th>
              </tr>

              {exchange &&
                exchange?.map((exchange, index) => (
                  <>
                    <tr key={index}>
                      <td className="right" scope="row">
                        {exchange?.trust_score_rank}
                      </td>

                      <td className="right" >
                        <img src={exchange.image} className="img" alt="" />
                        {exchange?.name}
                      </td>

                      <td>
                        {/* <ProgressBar
                          completed={exchange?.trust_score * 10}
                          maxCompleted={100}
                          className="label"
                          style={{ backgroundColor: "green" }}
                        /> */}
                        <Bar
                          width={exchange?.trust_score * 10}
                          score={exchange?.trust_score}
                        />
                      </td>

                      <td className="center">
                        $
                        {exchange?.trade_volume_24h_btc_normalized.toLocaleString(
                          undefined,
                          {
                            maximumFractionDigits: 0,
                          }
                        )}
                      </td>
                      <td>
                        $
                        {exchange?.trade_volume_24h_btc.toLocaleString(
                          undefined,
                          {
                            maximumFractionDigits: 0,
                          }
                        )}
                      </td>
                      <td className="center">
                        {exchange?.year_established || "----"}
                      </td>
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

export default Exchanges;
