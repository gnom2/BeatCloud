import React from "react";
import NavBarContainer from "../navbar/navbar_container";
import SidebarContainer from "../sidebar/sidebar_container";
import ProfileMenu from "./profile_menu";
import { formatUploadTime } from "../../util/track_util";

import {
  faCaretSquareRight,
  faPlayCircle,
  faHeart,
  faShareSquare,
  faPencilAlt,
  faEllipsisH,
  faPlay,
  faRetweet,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";
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
          <div className="track-container">
            <div className="track-album-cover">
              <div className="album-image">
                <a href=""></a>
              </div>
            </div>
            <div className="track-main-wrapper">
              <div className="track-top-wrapper">
                <div className="track-play-btn-container">
                  <div className="track-play-btn">
                    <FontAwesomeIcon
                      id="play-btn"
                      icon={faPlayCircle}
                    ></FontAwesomeIcon>
                  </div>
                </div>
                <div className="track-text-container">
                  <div className="track-text">
                    <div className="track-artist-name">{artist.username}</div>
                    <div className="track-track-title">{track.title}</div>
                  </div>
                  <div className="track-creation-time">
                    {formatUploadTime(track.created_at)}
                  </div>
                </div>
              </div>
              <div className="track-waveform-wrapper"></div>
              <div className="track-bottom-wrapper">
                <div className="track-bottom-icons">
                  <div>
                    <FontAwesomeIcon icon={faHeart} />
                  </div>
                  <div>
                    <FontAwesomeIcon icon={faShareSquare} />
                  </div>
                  <div>
                    <FontAwesomeIcon icon={faPencilAlt} />
                  </div>
                  <div>
                    <FontAwesomeIcon icon={faEllipsisH} />
                  </div>
                </div>
                <div className="track-bottom-stats">
                  <div>
                    <FontAwesomeIcon id="bottom-icon" icon={faPlay} />
                    <span>273</span>
                  </div>
                  <div>
                    <FontAwesomeIcon id="bottom-icon" icon={faRetweet} />
                    <span>17</span>
                  </div>
                  <div>
                    <FontAwesomeIcon id="bottom-icon" icon={faDownload} />
                    <span>6</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
      );
    });

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
                <div className="tracklist-header">Recent</div>
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
