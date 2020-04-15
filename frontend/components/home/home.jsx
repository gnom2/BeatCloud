import React from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TrackButtonContainer from "../track/track_button_container";
import TrackButton from "../track/track_button";

const Home = ({ login, signup, openModal }) => {
  return (
    <div className="home">
      <header className="home-header">
        <nav className="home-nav">
          <section className="home-nav-content">
            <div className="nav-logo">
              <img src={window.logoURL} alt="" />
            </div>
            <div className="nav-login-form">
              <button id="login" onClick={() => openModal("login")}>
                Sign In
              </button>
              <button id="signup" onClick={() => openModal("signup")}>
                Create account
              </button>
              <span>For Creators</span>
            </div>
          </section>
          <section className="home-nav-info">
            <div id="nav-info">
              <h2 id="nav-info-header">Discover more with BeatCloud Go+</h2>
              <p id="nav-info-content">
                BeatCloud Go+ lets you listen offline, ad-free, with over 150{" "}
                <br />
                million tracks - and growing.
              </p>
              <button className="nav-link-sc">
                <a id="nav-info-sc-link" href="https://www.soundcloud.com">
                  SoundCloud
                </a>
              </button>
            </div>
          </section>
        </nav>
      </header>
      <div className="body-search-content">
        <form className="body-search-input">
          <input
            id="search-bar"
            type="text"
            placeholder="Search for Artists, bands, tracks, podcasts"
          />
          <button className="body-search-btn">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </form>
        <p>or</p>
        <button className="body-search-upload">Upload your own</button>
      </div>
      <h2 className="body-trending-header">
        Hear what's trending for free in the BeatCloud community
      </h2>
      <div className="body-trending-content">
        <div id="track-item">
          <div>
            <TrackButtonContainer />
            <img src={window.track1URL} />
          </div>

          <span id="track-title">Armin van Buuren</span>
          <br />
          <span id="track-artist">This Is What It Feels..</span>
        </div>
        <div id="track-item">
          <img src={window.track2URL} />
          <span id="track-title">Above & Beyond & S..</span>
          <br />
          <span id="track-artist">See The End</span>
        </div>
        <div id="track-item">
          <img src={window.track3URL} />
          <span id="track-title">Culture Shock</span>
          <br />
          <span id="track-artist">Bunker</span>
        </div>
        <div id="track-item">
          <img src={window.track4URL} />
          <span id="track-title">Feint</span>
          <br />
          <span id="track-artist">We Won't Be Alone</span>
        </div>
        <div id="track-item">
          <img src={window.track5URL} />
          <span id="track-title">Gareth Emery</span>
          <br />
          <span id="track-artist">You'll Be Ok</span>
        </div>
        <div id="track-item">
          <img src={window.track6URL} />
          <span id="track-title">Skrillex</span>
          <br />
          <span id="track-artist">Mumbai Power</span>
        </div>
        <div id="track-item">
          <img src={window.track7URL} />
          <span id="track-title">Eliminate</span>
          <br />
          <span id="track-artist">Mula</span>
        </div>
        <div id="track-item">
          <img src={window.track8URL} />
          <span id="track-title">Fred V & Grafix</span>
          <br />
          <span id="track-artist">Altitude</span>
        </div>
        <div id="track-item">
          <img src={window.track9URL} />
          <span id="track-title">Sub Focus</span>
          <br />
          <span id="track-artist">Solar System</span>
        </div>
        <div id="track-item">
          <img src={window.track10URL} />
          <span id="track-title">Porter Robinson</span>
          <br />
          <span id="track-artist">Divinity (REZZ Remix)</span>
        </div>
        <div id="track-item">
          <img src={window.track11URL} />
          <span id="track-title">No Mana</span>
          <br />
          <span id="track-artist">Bottle Service</span>
        </div>
        <div id="track-item">
          <img src={window.track12URL} />
          <span id="track-title">Above & Beyond</span>
          <br />
          <span id="track-artist">Blue Monday</span>
        </div>
        <button className="btn-format">Explore trending playlists</button>
      </div>
      <div className="body-mobile-content">
        <img src={window.mobileURL} alt="" />
        <div className="body-mobile-container">
          <h1 className="mobile-header">Never stop listening</h1>
          <p className="mobile-info">
            BeatCloud is available on <br />
            Web, iOS, Android, Sonos, <br />
            Chromecast, and Xbox One. <br />
          </p>
          <div id="mobile-icons">
            <img src={window.appleURL} alt="" />
            <img src={window.androidURL} alt="" />
          </div>
        </div>
      </div>
      <div className="body-teaser-content">
        <div className="body-teaser">
          <h1 className="teaser-header">Calling all creators</h1>
          <p className="teaser-info">
            Get on BeatCloud to connect with fans, <br />
            share your sounds, and grow your <br />
            audience. What are you waiting for?
          </p>
          <button className="teaser-btn">Find out more</button>
        </div>
      </div>
      <div className="body-signup-content">
        <div id="signup-header">Thanks for listening. Now join in.</div>
        <div id="signup-info">
          Save tracks, follow artists and build playlists. All for free.
        </div>
        <button className="btn-format" onClick={() => openModal("signup")}>
          Create account
        </button>
        <div className="signup-signin">
          <div id="signin-text">Already have an account?</div>
          <button className="signin-btn" onClick={() => openModal("login")}>
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
