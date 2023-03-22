import React, { useState } from "react";
import "./musicCard.css";
import { motion } from "framer-motion";

const MusicCard = ({ title, type, year, link, coverArt }) => {
  return (
    
    <motion.div 
      initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        exit={{ opacity: 0 }}
    
    className="musiccard-wrapper">
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
    </motion.div>
    
  );
};

export default MusicCard;
