import React, { useState } from 'react'
import './navbar.css'
import { BsInstagram, BsYoutube, BsSpotify } from "react-icons/bs"
import { SiApplemusic, SiAmazon } from "react-icons/si"


const Navbar = () => {
const links = [
    {href: "#home", linkBody: 'home'}, 
    {href: "#music", linkBody: 'music'}, 
    {href: "#videos", linkBody: 'videos'}, 
    {href: "#live", linkBody: 'live'},
    {href: "https://aspengrove.bandcamp.com/", linkBody: 'shop'},
    {href: "#about", linkBody: 'about'}
  ]
  const scroll = (link) => {
    let position = document.getElementById(link.href); 
    window.location.href = link.href; 
    position && position.scrollIntoView({ behavior: "smooth", block: "start" }) 
   }
function renderLinks () {
  return links.map(link => <a key={link.linkBody} href={link.href}  onClick={() => scroll(link)}><p className="link">{link.linkBody}</p></a>)
}

  const [toggleMenu, setToggleMenu] = useState(false)

  function handleToggleMenu() {
    setToggleMenu(!toggleMenu)
  }

  return (
    <div className="navbar fade-in">
        <div className="socials">
            <a href="https://www.instagram.com/aspengrove1/" target="_blank"><BsInstagram /></a>
            <a href="https://www.youtube.com/c/AspenGroveMusic/" target="_blank"><BsYoutube /></a>
            <a href="https://open.spotify.com/artist/3PvkzQ5mrZ0EGltVg6SDPY?si=WiZqpBhVSxa1L-waCKxGUQ" target="_blank"><BsSpotify /></a>
            <a href="https://music.apple.com/us/artist/aspen-grove/1423822709" target="_blank"><SiApplemusic /></a>
            <a href="https://music.amazon.com/artists/B07G9QMF18/aspen-grove" target="_blank"><SiAmazon /></a>
          </div>
          <div className="menu">
            {renderLinks()}
          </div>
        </div>
  )
}

export default Navbar