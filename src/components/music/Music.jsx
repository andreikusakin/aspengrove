import React from 'react'
import './music.css'
import MusicCard from '../musicCard/MusicCard'
import { musicData } from './musicData'



const Music = () => {
    return (<div id="music" className='music-wrapper'>
            <h2>Music</h2>
                <div className='music-cards-wrapper'>
                {musicData.map(element=>(
                <MusicCard 
                key={element.title}
                title={element.title}
                type={element.type}
                year={element.year}
                listenLink={element.listenLink}
                buyLink={element.buyLink}
                coverArt={element.img}
                />))}
                <div className='last-item-dynamic'><p>More music coming soon</p></div>            
            </div>
        </div>
    )
}

export default Music