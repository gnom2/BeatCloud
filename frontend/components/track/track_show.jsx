import React from "react";
import { formatUploadTime } from "../../util/track_util";
import NavBarContainer from "../navbar/navbar_container";
import SideBarContainer from "../sidebar/sidebar_container";
import CommentFormContainer from "../comments/comment_form_container";
import CommentItemContainer from "../comments/comment_item_container";
import TrackButton from "../track/track_button_container";
// import WaveFormContainer from "./waveform/waveform_container";

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
    debugger;
    this.props.fetchComments(this.props.match.params.trackId);
  }

  // componentWillMount() {
  //   this.props.fetchComments(this.props.match.params.trackId);
  // }

  componentDidMount() {
    this.props.fetchTrack(this.props.match.params.trackId);

    debugger;
    this.setState({
      playing: false,
    });
  }

  componentWillReceiveProps() {
    this.setState({ state: this.state });
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
                    </div>
                  </div>
                  <div className="track-show-text-container">
                    <div className="track-show-text">
                      <div className="track-show-artist-name">
                        <Link
                          className="format-link"
                          to={`/users/${artist.id}`}
                        >
                          <span className="highlight">{artist.username}</span>
                        </Link>
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
                  <CommentFormContainer track={track} />
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
                    <div id="track-show-description">{track.description}</div>
                    <div className="track-show-comment-container">
                      <CommentItemContainer track={track} />
                    </div>
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
