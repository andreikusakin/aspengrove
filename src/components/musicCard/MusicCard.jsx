import React, { useState } from 'react'
import './musicCard.css'




const MusicCard = ({title, type, year, listenLink, buyLink, coverArt}) => {
    return (
        // <div className='musiccard-wrapper'>
        //     <img src={coverArt} alt={title + " Cover Art"}/>
        //     <div><span className='musiccard-title'>{title}</span></div>
        //     <div><span className='musiccard-type-year'>{type} {year}</span></div>
        //     <div><a className='musiccard-btn' href={listenLink}>Listen</a>
        //     <a className='musiccard-btn' href={buyLink}>Buy</a></div>
            
        // </div>
        <div className='flex-item'>
        <img src={coverArt} alt={title + " Cover Art"}/>
        <div><span className='musiccard-title'>{title}</span></div>
        <div><span className='musiccard-type-year'>{type} {year}</span></div>
        <div><a className='musiccard-btn' href={listenLink}>Listen</a>
        <a className='musiccard-btn' href={buyLink}>Buy</a></div>
        
    </div>
    )
}

export default MusicCard