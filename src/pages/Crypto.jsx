/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Crypto.css";
import videoData from "../components/Courses/Courses";
import VideoPop from "../components/VideoPop/VideoPop";

const Crypto = () => {
  const [show, setShow] = useState(false);
  const [videoId, setVideoId] = useState(null);

  return (
    <div>
      <div className="heading">
        <p className="h1">Want to know more about Cryptocurrency ?</p>
        <p className="h2">We've got you covered .... </p>
      </div>
      <div className="cards">
        {videoData?.map((video) => (
          <div
            key={video.videoId}
            onClick={() => {
              setShow(true);
              setVideoId(video.videoId);
            }}
            className="card"
          >
            <div className="imxg">
              <img className="img" src={video.thumbnailUrl}></img>
            </div>
            <div className="text">
              <p className="h3">{video.title}</p>
              <p className="p">{`${video.length}`}</p>
              <div className="icon-box"></div>
            </div>
          </div>
        ))}
      </div>
      <VideoPop
        show={show}
        setShow={setShow}
        videoId={videoId}
        setVideoId={setVideoId}
      />
    </div>
  );
};

export default Crypto;
