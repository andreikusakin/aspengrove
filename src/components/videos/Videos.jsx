import React, { useState } from 'react'
import './videos.css'
import { videosData } from './videosData'
import VideoItem from '../VideoItem/VideoItem'

const Videos = () => {
    return(
        <div id="videos" className='videos-wrapper'>
            <h2>Videos</h2>
            <div className='video-item'>
                
                {videosData.map(element=>(
                <VideoItem 
                key={element.title}
                title={element.title}
                linkToVideo={element.link}
                screenshot={element.img}
                year={element.year}
                />))}
            </div>
        </div>
    )
}

export default Videos