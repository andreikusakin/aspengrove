import "./about.css";
import { BsInstagram, BsYoutube, BsSpotify } from "react-icons/bs";
import { SiApplemusic, SiAmazon } from "react-icons/si";

const About = () => {
  return (
    <div id="about" className="about-wrapper">
      <h2>About</h2>
      <div className="about-flexbox">
        <div className="about-photo">
          {/* <img src="images/agphoto.jpg" alt="Aspen Grove Photo" /> */}
        </div>

        <div className="about-text">
          
          <p>
            <b>Daniel Isaenko</b>, known as <b>Aspen Grove</b>, was born in
            Crimea, Ukraine. Daniel's homeland is an infinite source of
            inspiration and creative freedom. From an early age, Daniel was
            involved in the music world. He joined the local choir and learned
            to play the accordion in an orchestra.
          </p>
          <p>
            After his father bought Daniel his first guitar at 16 years old, a
            future artist began writing his first songs. In 2018, he released
            his first album "Delirium", performed as an opening artist for Tom
            Odell and Lera Lynn. Best described as intimate and soothing, his
            style takes inspiration from the works of Nick Drake and Mark
            Kozelek.
          </p>
          <p>
            Daniel appreciates the authenticity and uniqueness of sounds, so it
            is not uncommon for him to seek out grandma's dusty accordion,
            out-of-tune piano, toy flute, and xylophone for recordings. The
            rustling leaves, acacia pods, the roar of thunder - Daniel hears the
            music in every sound and eloquently integrates them into his own
            compositions. The patterns woven from personal stories and simple
            yet powerful lyrics allow his songs to be universally understood.
          </p>
          <p>
            Lately, Daniel has been focusing on discovering the beauty of the
            Ukrainian language - his mother tongue. These songs are full of pure
            sincerity and maturity.
          </p>

          <p>
            As of right now, Daniel is on the road, far away from his homeland,
            but he doesn't stop writing songs. He believes that he will soon be
            able to return to Ukraine, where his songs will be heard again, now
            sounding with renewed vigor.
          </p>
          <div className="btn-socials">
            <a href="mailto:st.aspengrove@gmail.com">
              <button className="about-btn-email">Contact email</button>
            </a>

            <div className="socials-about">
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
      </div>
    </div>
  );
};

export default About;
