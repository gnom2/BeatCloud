import React from "react";
import { formatUploadTime } from "../../util/track_util";
import NavBarContainer from "../navbar/navbar_container";
import SideBarContainer from "../sidebar/sidebar_container";
import { Link } from "react-router-dom";
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

class TrackShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchTrack(this.props.match.params.trackId);
  }

  render() {
    const { track, artist, currentUser } = this.props;

    return (
      <>
        <NavBarContainer />
        <div className="track-show-main-container">
          <div className="track-show-main-content">
            <div className="track-show-track-wrapper">
              <div className="track-show-left">
                <div className="track-show-left-top">
                  <div className="track-show-btn-container">
                    <div className="track-show-btn">
                      <FontAwesomeIcon
                        id="show-play-btn"
                        icon={faPlayCircle}
                      ></FontAwesomeIcon>
                    </div>
                  </div>
                  <div className="track-show-text-container">
                    <div className="track-show-text">
                      <div className="track-show-artist-name">
                        {artist.username}
                        ARTIST
                      </div>
                      <div className="track-show-track-title">
                        {track.title}
                        Title
                      </div>
                    </div>
                    <div className="track-show-creation-time">
                      {formatUploadTime(track.created_at)}
                    </div>
                  </div>
                </div>
                <div className="track-show-waveform-wrapper"></div>
              </div>
              <div className="track-show-right">
                <div id="album-image">
                  <a href=""></a>
                </div>
              </div>
            </div>
            <div className="track-show-bottom-container">
              <div className="track-show-bottom-left">
                <div className="track-show-bottom-left-stats">
                  <div className="track-show-bottom-icons">
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
                  <div className="track-show-bottom-stats">
                    <div>
                      <FontAwesomeIcon id="bottom-icon" icon={faPlay} />
                      <span>273</span>
                    </div>
                    <div>
                      <FontAwesomeIcon id="bottom-icon" icon={faHeart} />
                      <span>24</span>
                    </div>
                    <div>
                      <FontAwesomeIcon id="bottom-icon" icon={faDownload} />
                      <span>6</span>
                    </div>
                  </div>
                </div>
                <div className="track-show-bottom-profile">
                  <div className="track-show-bottom-profile-left">
                    <div id="track-show-profile-picture"></div>
                    <div id="track-show-profile-info"></div>
                  </div>
                  <div className="track-show-bottom-profile-right">
                    <div id="track-show-description"> </div>
                  </div>
                </div>
              </div>
              <div className="track-show-bottom-right"></div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default TrackShow;
