import React from "react";
import "./music.css";
import MusicCard from "../musicCard/MusicCard";
import { musicData } from "./musicData";
import { useState } from "react";

const Music = () => {
  const [extendedView, setExtendedView] = useState(false);
  const musicDataReverse = musicData.slice(0).reverse();

  return (
    <div id="music" className="music" >
      <div className="music-wrapper">
        <h2>Music</h2>
        <div className="music-cards-grid">
          {(extendedView ? musicDataReverse : musicDataReverse.slice(0, 6)).map(
            (element) => (
              <MusicCard
                key={element.title}
                title={element.title}
                type={element.type}
                year={element.year}
                link={element.link}
                coverArt={element.img}
              />
            )
          )}
         
        </div>
        <button
          className="btn-show"
          onClick={() => setExtendedView(!extendedView)}
        >
          {extendedView ? `Show Less` : `Show More`}
        </button>
      </div>
    </div>
  );
};

export default Music;
