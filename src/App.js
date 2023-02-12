import React, { useState } from 'react'
import './App.css'
import MainWrapper from './components/mainWrapper/MainWrapper'
import Music from './components/music/Music'
import Videos from './components/videos/Videos'
import Live from './components/live/Live'
import About from './components/about/About'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <div className="App"> 
        <div>
            <MainWrapper  />
            <Music />
            <Videos />
            <Live />
            <About />
            <Footer />
        </div> 
    </div> 
  )
}

export default App