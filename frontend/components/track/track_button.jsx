import React from "react";
import { faPlayCircle, faPauseCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class TrackButton extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
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
    return (
      <div className="track-show-btn" onClick={(e) => e.stopPropagation()}>
        {this.props.playing &&
        this.props.track.id === this.props.currentTrackId ? (
          <FontAwesomeIcon
            id="show-pause-btn"
            icon={faPauseCircle}
            onClick={this.handleClick}
          ></FontAwesomeIcon>
        ) : (
          <FontAwesomeIcon
            id="show-play-btn"
            icon={faPlayCircle}
            onClick={this.handleClick}
          ></FontAwesomeIcon>
        )}

        <div className="audioplayer-container">
          <audio
            id="audio-element"
            className="audioplayer"
            controlsList="nodownload"
            controls
            volume="0.5"
            src={this.props.track.trackUrl}
          />
        </div>
      </div>
    );
  }
}

export default TrackButton;
