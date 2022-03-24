import React, { useState } from 'react'
import './mainWrapper.css'
import Navbar from '../navbar/Navbar'



const MainWrapper = () => {
    return (
        <div className='main-wrapper'>
            
            <span className='title-wrapper fade-in'><p>Aspen Grove</p></span>
            <Navbar />
        </div>
    )
}

export default MainWrapper