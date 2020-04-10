import React from "react";
import NavBarContainer from "../navbar/navbar_container";
import SidebarContainer from "../sidebar/sidebar_container";
import ProfileMenu from "./profile_menu";

import { faCaretSquareRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class ProfileShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchTracks();
  }

  render() {
    const artist = this.props.user;
    const trackLis = this.props.tracks.map((track) => {
      return (
        <li key={track.id}>
          {track.title} - {artist.username}
        </li>
      );
    });
    debugger;

    return (
      <>
        <section className="profile-main">
          <div className="profile-nav">
            <NavBarContainer />
          </div>

          <div className="profile-main-container">
            <div className="profile-main-banner">
              <div id="profile-picture"></div>
              <div id="profile-banner"></div>
            </div>
            <ProfileMenu />
            <div className="profile-main-content">
              <div className="main-content-tracklist">
                <ul>{trackLis}</ul>
              </div>
              <div className="main-content-sidebar">
                <div className="main-content-sidebar-profile">
                  <div className="sidebar-stats">
                    <span id="stats-item">
                      Followers
                      <span>834</span>
                    </span>
                    <span id="stats-item">
                      Following
                      <span>421</span>
                    </span>
                    <span id="stats-item">
                      Tracks
                      <span>3</span>
                    </span>
                  </div>
                  <div className="sidebar-description">
                    <p>
                      Welcome to Demo user's profile page. <br />
                      Tracks uploaded by users will be shown here. <br />
                      Hopefully by this week!
                    </p>
                  </div>
                  <div className="sidebar-links">
                    <div id="sidebar-links-left">
                      <FontAwesomeIcon icon={faCaretSquareRight} />
                    </div>
                    <div id="sidebar-links-right">
                      <a href="https://github.com/gnom2/BeatCloud/wiki">
                        GNOMEE's Wiki
                      </a>
                    </div>
                  </div>
                </div>
                <SidebarContainer />
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default ProfileShow;
