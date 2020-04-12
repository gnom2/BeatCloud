import React from "react";
import { formatUploadTime } from "../../util/track_util";
import NavBarContainer from "../navbar/navbar_container";
import SideBarContainer from "../sidebar/sidebar_container";
import TrackButton from "../track/track_button_container";
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
  faPauseCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class TrackShow extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.fetchTrack(this.props.match.params.trackId);
    this.setState({
      playing: false,
    });
  }

  handleClick() {
    let audioEl = document.getElementById("audio-element");

    if (this.props.playing) {
      this.props.pauseTrack();
      audioEl.pause();
    } else {
      this.props.receiveCurrentTrack(this.props.track);
      this.props.playTrack();
      audioEl.play();
    }
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
                      <TrackButton track={track} />

                      <div className="audioplayer-container">
                        <audio
                          id="audio-element"
                          className="audioplayer"
                          controlsList="nodownload"
                          controls
                          volume="0.5"
                          onPause={() => this.pauseTrack()}
                          onPlay={() => this.playTrack()}
                          src={track.trackUrl}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="track-show-text-container">
                    <div className="track-show-text">
                      <div className="track-show-artist-name">
                        {artist.username}
                      </div>
                      <div className="track-show-track-title">
                        {track.title}
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
                  <img src={track.photoUrl} alt="" />
                </div>
              </div>
            </div>
            <div className="track-show-bottom-container">
              <div className="track-show-bottom-left">
                <div className="track-show-bottom-left-stats">
                  <div className="track-show-bottom-left-comment">
                    <img
                      src="https://i1.sndcdn.com/avatars-000638743965-twchqj-t500x500.jpg"
                      alt=""
                    />
                    <div id="comment-box">
                      <input type="text" placeholder="Write a comment" />
                    </div>
                  </div>
                  <div className="track-show-bottom-stats-flex">
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
