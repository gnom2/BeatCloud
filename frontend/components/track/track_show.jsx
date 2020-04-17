import React from "react";
import { formatUploadTime } from "../../util/track_util";
import NavBarContainer from "../navbar/navbar_container";
import TrackButton from "../track/track_button_container";

// import CommentItemContainer from "../comments/comment_item_container";
// import SideBarContainer from "../sidebar/sidebar_container";
// import CommentFormContainer from "../comments/comment_form_container";
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
  faTrash,
  faUserFriends,
  faHeadphonesAlt,
  faCommentAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReddit } from "@fortawesome/free-brands-svg-icons";

class TrackShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: "",
      track_id: this.props.match.params.trackId,
      author_id: this.props.currentUser.id,
    };
    // debugger;

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.update = this.update.bind(this);
  }

  // componentDidUpdate() {
  //   this.props.fetchTrackComments(this.state.track_id);
  // }

  // componentWillMount() {
  //   debugger;

  // }

  componentDidMount() {
    // debugger;
    this.props.fetchTrack(this.props.match.params.trackId);
    this.props.requestComments(this.props.match.params.trackId);

    // this.props.requestComments();
    // ;
    // this.setState({
    //   body: "",
    // });
  }

  handleSubmit(e) {
    e.preventDefault();
    // debugger;

    this.props.createComment(this.state).then(this.setState({ body: "" }));
  }

  handleDelete(e) {
    // debugger;
    this.props
      .deleteComment(e.currentTarget.value)
      .then(this.setState({ body: "" }));
  }

  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }

  render() {
    const { track, artist, currentUser, comments } = this.props;

    let commentLi;
    let commentCount = 0;

    if (Object.keys(comments).length !== 0) {
      // debugger;
      commentLi = Object.keys(comments).map((key) => {
        if (comments[key].track_id === track.id) {
          commentCount++;
          return (
            <div key={key} className="comment-item">
              <div className="comment-profile-icon">
                <Link
                  className="format-link"
                  to={`/users/${comments[key].author_id}`}
                >
                  <img
                    className="commenter-img"
                    src={this.props.users[comments[key].author_id].photoUrl}
                  ></img>
                </Link>
              </div>

              <div className="comment-content">
                <div className="comment-content-top">
                  <Link
                    className="format-link"
                    to={`/users/${comments[key].author_id}`}
                  >
                    <span>
                      {this.props.users[comments[key].author_id].username}
                    </span>
                  </Link>
                  <span>{formatUploadTime(comments[key].created_at)}</span>
                </div>

                <div className="comment-content-body">
                  <span>{comments[key].body}</span>
                  <button
                    className="trash-button"
                    value={comments[key].id}
                    onClick={this.handleDelete}
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </div>
              </div>
            </div>
          );
        } else {
          return;
        }
      });
    }
    // debugger;
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
                  <Link className="format-link" to={`/users/${artist.id}`}>
                    <img src={track.photoUrl} alt="" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="track-show-bottom-container">
              <div className="track-show-bottom-left">
                <div className="track-show-bottom-left-stats">
                  {/* <CommentFormContainer track={track} /> */}

                  {currentUser.id ? (
                    <section className="track-show-bottom-left-comment">
                      <Link
                        className="format-link"
                        to={`/users/${currentUser.id}`}
                      >
                        <img src={currentUser.photoUrl} alt="" />
                      </Link>
                      <form onSubmit={this.handleSubmit}>
                        <div id="comment-box">
                          <input
                            type="text"
                            onChange={this.update("body")}
                            placeholder="Write a comment"
                            value={this.state.body}
                          />
                        </div>
                      </form>
                    </section>
                  ) : (
                    <></>
                  )}

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
                    <div id="track-show-profile-picture">
                      <Link className="format-link" to={`/users/${artist.id}`}>
                        <img
                          id="artist-profile-pic"
                          src={artist.photoUrl}
                          alt=""
                        />
                      </Link>
                    </div>
                    <div id="track-show-profile-info">
                      <h2>{artist.username}</h2>
                      <div>
                        <span>
                          <FontAwesomeIcon icon={faUserFriends} />
                          <span>834</span>
                        </span>
                        <span>
                          <FontAwesomeIcon icon={faHeadphonesAlt} />

                          <span>3</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="track-show-bottom-profile-right">
                    <div id="track-show-description">{track.description}</div>
                    <div className="track-show-comment-container">
                      <div className="track-show-comment-header">
                        <span>
                          <FontAwesomeIcon icon={faCommentAlt} />
                        </span>

                        <span>{commentCount}</span>
                        <span>comment</span>
                      </div>

                      {commentLi ? commentLi : null}
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
