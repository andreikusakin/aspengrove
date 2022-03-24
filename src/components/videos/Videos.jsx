import React, { useState } from 'react'
import './videos.css'
import { videosData } from './videosData'
import VideosCard from '../VideosCard/VideosCard'

const Videos = () => {
    return(
        <div className='videos-wrapper'>
            <h2>Videos</h2>
            <div className='video-card'>
                
                {videosData.map(element=>(
                <VideosCard 
                key={element.title}
                title={element.title}
                linkToVideo={element.link}
                />))}
                
                
            
            </div>
        </div>
    )
}

export default Videos