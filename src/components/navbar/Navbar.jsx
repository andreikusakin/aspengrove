import React, { useState } from 'react'
import './navbar.css'

const Navbar = () => {
const links = [
    {href: "#home", linkBody: 'home'}, 
    {href: "#music", linkBody: 'music'}, 
    {href: "#videos", linkBody: 'videos'}, 
    {href: "#live", linkBody: 'live'},
    {href: "#shop", linkBody: 'shop'},
    {href: "#about", linkBody: 'about'}
  ]

function renderLinks () {
  return links.map(link => <a href={link.href}><p className="link">{link.linkBody}</p></a>)
}


  // const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <div className="navbar">
      
      <div className="menu-logo-wrapper fade-in">
          <div className="menu">
            {renderLinks()}
          </div>
        {/* <div className="mobile-menu" onClick={() => setToggleMenu(!toggleMenu)}> */}

          {/* <div className="mobile-toggle">
            <span></span>
            <span></span>
          </div> */}

          
        </div>
      </div>
    
      
    
  )
}

export default Navbar