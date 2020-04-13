import React from "react";
import { faPlayCircle, faPauseCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class TrackButton extends React.Component {
  constructor(props) {
    super(props);

    this.handlePause = this.handlePause.bind(this);
    this.handlePlay = this.handlePlay.bind(this);
  }

  handlePause(track) {
    let audioEl = document.getElementById("audio-element");
    debugger;
    this.props.receiveCurrentTrack(track);

    if (
      this.props.playing &&
      this.props.track.id === this.props.currentTrackId
    ) {
      this.props.pauseTrack();
      audioEl.pause();
    }
  }

  handlePlay(track) {
    let audioEl = document.getElementById("audio-element");
    debugger;
    if (
      this.props.playing &&
      this.props.track.id !== this.props.currentTrackId
    ) {
      debugger;
      this.props.pauseTrack();
      audioEl.pause();
    }
    this.props.receiveCurrentTrack(track);
    this.props.playTrack();
    audioEl.play();
  }

  render() {
    return (
      <div className="track-show-btn" onClick={(e) => e.stopPropagation()}>
        {this.props.playing &&
        this.props.track.id === this.props.currentTrackId ? (
          <FontAwesomeIcon
            id="show-pause-btn"
            icon={faPauseCircle}
            onClick={() => this.handlePause(this.props.track)}
          ></FontAwesomeIcon>
        ) : (
          <FontAwesomeIcon
            id="show-play-btn"
            icon={faPlayCircle}
            onClick={() => this.handlePlay(this.props.track)}
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
