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
    let audioPlayer = document.getElementById("audio-element");

    this.props.receiveCurrentTrack(track);

    if (
      this.props.playing &&
      this.props.track.id === this.props.currentTrackId
    ) {
      this.props.pauseTrack();
    
      audioPlayer.pause();
    }
  }

  handlePlay(track) {
    let audioPlayer = document.getElementById("audio-element");

    if (
      this.props.playing &&
      this.props.track.id !== this.props.currentTrackId
    ) {

      this.props.pauseTrack();
    
      audioPlayer.pause();
    }
    this.props.receiveCurrentTrack(track);
    this.props.playTrack();
    audioPlayer.setAttribute("autoPlay", "");
    audioPlayer.play();

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

  
      </div>
    );
  }
}

export default TrackButton;
