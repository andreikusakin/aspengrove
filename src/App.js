import React from 'react'
import './App.css'
import MainWrapper from './components/mainWrapper/MainWrapper'
import Music from './components/music/Music'
import Videos from './components/videos/Videos'



const App = () => {
  return (
    <div className="App"> 
        <div>
            {/* <ConditionalMenu /> */}
            <MainWrapper />
            <Music />
            <Videos />
            
        </div>
        
    </div>
  )
}

export default App