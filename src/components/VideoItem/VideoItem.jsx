import React from "react";
import "./videoItem.css";

const VideoItem = ({ title, linkToVideo, year, screenshot }) => {
  return (
    <div
      className="videoitem"
      onClick={() => window.open(linkToVideo, "_blank")}
    >
      <div className="v-disc">
        <p>{title}</p>
        <p>{year}</p>
      </div>
      <div
        className="b-image"
        style={{ backgroundImage: `url(${screenshot})` }}
      >
        {" "}
      </div>
    </div>
  );
};

export default VideoItem;
