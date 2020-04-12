import React from "react";
import NavBarContainer from "../navbar/navbar_container";
import SidebarContainer from "../sidebar/sidebar_container";
import TrackButton from "../track/track_button_container";
import ProfileMenu from "./profile_menu";
import { formatUploadTime } from "../../util/track_util";
import { Link } from "react-router-dom";

import {
  faCaretSquareRight,
  faPlayCircle,
  faPauseCircle,
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
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.fetchTracks();
  }

  handleClick() {
    let audioEl = document.getElementById("audio-element");

    if (this.props.playing) {
      this.props.pauseTrack();
      audioEl.pause();
    } else {
      this.props.receiveCurrentTrack(track);
      this.props.playTrack();
      audioEl.play();
    }
  }

  handlePicUpload(e) {
    const file = e.target.files[0];
    const reader = new FileReader();
    debugger;
    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        this.setState({
          photoFile: file,
          photoUrl: reader.result,
        });
      };
    } else {
      this.setState({ photoFile: null, photoUrl: null });
    }
  }

  findFileInput() {
    document.getElementById("file").click();
  }

  render() {
    const artist = this.props.user;
    debugger;
    const trackLis = this.props.tracks.map((track) => {
      if (track.artist_id === artist.id) {
        return (
          <li key={track.id}>
            <div className="track-container">
              <div className="track-album-cover">
                <div className="album-image">
                  <img src={track.photoUrl} alt="" />
                </div>
              </div>
              <div className="track-main-wrapper">
                <div className="track-top-wrapper">
                  <div className="track-play-btn-container">
                    <div className="track-play-btn">
                      <TrackButton track={track} />

                      <div className="audioplayer-container">
                        <audio
                          id="audio-element"
                          className="audioplayer"
                          controlsList="nodownload"
                          controls
                          volume="0.5"
                          onPause={() => this.props.pauseTrack()}
                          onPlay={() => this.props.playTrack()}
                          src={track.trackUrl}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="track-text-container">
                    <div className="track-text">
                      <div className="track-artist-name">
                        <Link to={`/users/${artist.id}`}>
                          {artist.username}
                        </Link>
                      </div>
                      <div className="track-track-title">
                        <Link to={`/tracks/${track.id}`}>{track.title}</Link>
                      </div>
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
      } else {
        return null;
      }
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
