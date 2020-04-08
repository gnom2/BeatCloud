import React from "react";

const Home = ({ login, signup, openModal }) => {

  return (
    <div className="home">
      <header className="home-header">
        <nav className="home-nav">
          <section
            className="home-nav-content"
            style={{ backgroundImage: `url(require(${window.navURL}))` }}
          >
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
        </nav>
      </header>
      <div className="body-search-content">
        <form className="body-search-input">
          <input
            id="search-bar"
            type="text"
            placeholder="Search for Artists, bands, tracks, podcasts"
          />
          <button className="body-search-btn" />
        </form>
        <p>or</p>
        <button className="body-search-upload">Upload your own</button>
      </div>
      <h2 className="body-trending-header">
        Hear what's trending for free in the BeatCloud community
      </h2>
      <div className="body-trending-content">
        <div id="track-item">
          <img src={window.track1aURL} />
          <span id="track-title">Armin van Buuren</span>
          <br />
          <span id="track-artist">This Is What It Feels Like</span>
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
          <h1 className="teaser-header"></h1>
          <p className="teaser-info"> </p>
          <button className="teaser-btn">Find out more</button>
        </div>
      </div>
      <div className="body-signup-content"></div>
    </div>
  );
};

export default Home;
