/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import ReactPlayer from "react-player/youtube";
import { RxCross2 } from "react-icons/rx";

import "./style.css";

const VideoPop = ({ show, setShow, videoId, setVideoId }) => {
  const hidePopup = () => {
    setShow(false);
    setVideoId(null);
  };
  return (
    <div className={`videoPopup ${show ? "visible" : ""}`}>
      <div className="opacityLayer" onClick={hidePopup}></div>
      <div className="videoPlayer">
        <span className="closeBtn" onClick={hidePopup}>
          <RxCross2 size={32}/>
        </span>
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${videoId}`}
          controls
          width="100%"
          height="100%"
          // playing={true}
        />
      </div>
    </div>
  );
};

export default VideoPop;
