import { useState } from "react";
import "./navbarFullScreen.css";
import { BsInstagram, BsYoutube, BsSpotify } from "react-icons/bs";
import { SiApplemusic, SiAmazon } from "react-icons/si";
import { motion } from "framer-motion";

const NavbarFullScreen = ({ inView }) => {
  const links = [
    { href: "#home", linkBody: "home" },
    { href: "#music", linkBody: "music" },
    { href: "#videos", linkBody: "videos" },
    { href: "#live", linkBody: "live" },
    { href: "https://aspengrove.bandcamp.com/", linkBody: "shop" },
    { href: "#about", linkBody: "about" },
  ];

  const scroll = (link) => {
    let position = document.getElementById(link.href);
    window.location.href = link.href;
    position && position.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  function renderLinksFS() {
    return links.map((link) => (
      <motion.a
        whileHover={{ x: -5, scale: 1.05, color: "#e9c1c1"  }}
        transition={{ duration: 0.3 }}
        href={link.href}
        onClick={() => {
          scroll(link);
          setMenuBtn(!menuBtn);
        }}
      >
        <p className="link-fs">{link.linkBody}</p>
      </motion.a>
    ));
  }

  const [menuBtn, setMenuBtn] = useState(false);

  return (
    <div>
      <div className="menu-btn_wrapper">
        <div
          onClick={() => {
            setMenuBtn(!menuBtn);
          }}
          className={`menu-btn fade-in ${menuBtn ? "open" : ""} ${
            inView ? "menu-btn-blend" : ""
          }`}
        >
          <div className="menu-btn_hamburger"></div>
        </div>
      </div>
      {menuBtn ? (
        <div className="fs-navbar_wrapper fade-in">
          <div className="fs-navbar-flex">
            {renderLinksFS()}
            <div className="socials-fs">
              <a href="https://www.instagram.com/aspengrove1/" target="_blank">
                <BsInstagram />
              </a>
              <a
                href="https://www.youtube.com/c/AspenGroveMusic/"
                target="_blank"
              >
                <BsYoutube />
              </a>
              <a
                href="https://open.spotify.com/artist/3PvkzQ5mrZ0EGltVg6SDPY?si=WiZqpBhVSxa1L-waCKxGUQ"
                target="_blank"
              >
                <BsSpotify />
              </a>
              <a
                href="https://music.apple.com/us/artist/aspen-grove/1423822709"
                target="_blank"
              >
                <SiApplemusic />
              </a>
              <a
                href="https://music.amazon.com/artists/B07G9QMF18/aspen-grove"
                target="_blank"
              >
                <SiAmazon />
              </a>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default NavbarFullScreen;
