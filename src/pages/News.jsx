/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import "./news.css";
import axios from "axios";
import aayeVoice from "../assets/aaye.mp3";
import Header from "../components/header/Header";
const News = ({setProgress}) => {
  const [news, setNews] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const [loading, setLoading] = useState(true);

  const audio = new Audio({ aayeVoice });
  const aayeUrl =
    "https://memeheist.com/wp-content/uploads/2023/09/aayein-meme-1-758x442.jpg";
  const fetchdata = async () => {
    try {
      const { data } = await axios.get(`https://api.coingecko.com/api/v3/news`);
      setNews(data.data);
      setLoading(false);
      setProgress(100)
      console.log(news);
    } catch (e) {
      console.log(e);
    }
  };

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  // Function to handle mouseout event
  const handleMouseOut = () => {
    setIsHovered(false);
  };

  useEffect(() => {
    fetchdata();
    // setLoading(true);
  }, []);

  return (
    <>
    {loading?(<></>):(  <>
      <Header />
      <div className="content-wrapper">
        {news?.map((info, index) => (
          <div
            className="news-card"
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            key={index}
          >
            {isHovered && info.thumb_2x === null && (
              <audio autoPlay>
                <source src={aayeVoice} type="audio/mpeg" />.
              </audio>
            )}
            <a href="#" className="news-card__card-link" />
            <img
              src={info.thumb_2x === null ? aayeUrl : info.thumb_2x}
              alt={aayeUrl}
              className="news-card__image"
            />
            <div className="news-card__text-wrapper">
              <h2 className="news-card__title">{info?.title}</h2>
              <div className="news-card__post-date">{info?.author}</div>
              <div className="news-card__details-wrapper">
                <p className="news-card__excerpt"></p>
                <a className="news-card__read-more" href={info.url}>
                  Visit Page{" "}
                  <i
                    className="fa fa-long-arrow-right fa-lg "
                    aria-hidden="true"
                  ></i>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>)}
  
    </>
  );
};

export default News;
