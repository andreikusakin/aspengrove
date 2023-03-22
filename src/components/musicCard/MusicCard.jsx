import React, { useState } from "react";
import "./musicCard.css";

const MusicCard = ({ title, type, year, link, coverArt }) => {
  return (
    <div className="musiccard-wrapper">
      <a href={link}>
        <img src={coverArt} alt={title + " Cover Art"} />
      </a>
      <div>
        <span className="musiccard-title">{title}</span>
      </div>
      <div>
        <span className="musiccard-type-year">
          {type} {year}
        </span>
      </div>
    </div>
  );
};

export default MusicCard;
