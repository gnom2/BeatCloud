import React from "react";
import { formatTrackTime } from "../../../util/track_util";
import { Link } from "react-router-dom";

import {
  faStepBackward,
  faStepForward,
  faPlay,
  faPause,
  faRandom,
  faRedo,
  faVolumeUp,
  faVolumeMute,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class TrackPlayer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      duration: "",
      timeElapsed: 0,
      playing: props.playing,
      volume: 1.0,
      mutedVolume: 0,
      volumeActive: false,
      trackLoaded: false,
      trackPlayer: this.props.trackPlayer,
    };

    this.handleMetaData = this.handleMetaData.bind(this);
    this.handlePlayPause = this.handlePlayPause.bind(this);
    this.restartTrack = this.restartTrack.bind(this);
    this.updatePlayTime = this.updatePlayTime.bind(this);
    this.changePlaypoint = this.changePlaypoint.bind(this);
    this.toggleMute = this.toggleMute.bind(this);
    this.changeVol = this.changeVol.bind(this);

    this.skipTrack = this.skipTrack.bind(this);
    this.scrollbar = React.createRef();
    this.volumebar = React.createRef();
  }

  handleMetaData(e) {
    e.preventDefault();
    let audioPlayer = document.getElementById("audio-element");

    this.setState({
      trackLoaded: true,
      duration: audioPlayer.duration,
      playing: this.props.playing,
      trackPlayer: this.props.trackPlayer,
    });
  }

  handlePlayPause() {
    let audioPlayer = document.getElementById("audio-element");
    clearInterval(this.intervalId);
    if (this.props.playing) {
      this.props.pauseTrack();
      audioPlayer.pause();
    } else {
      this.props.playTrack();
      audioPlayer.play();
    }
  }

  restartTrack() {
    let audioPlayer = document.getElementById("audio-element");

    this.setState(
      {
        timeElapsed: 0,
        playing: this.props.playing,
      },
      () => {
        audioPlayer.currentTime = 0;
        this.scrollbar.current.value = 0;
        this.props.updatePlaypoint(0);
        this.props.restartTrack();
      }
    );
  }

  changePlaypoint(e) {
    e.persist();
    let audioPlayer = document.getElementById("audio-element");

    this.setState({ timeElapsed: e.target.value }, () => {
      audioPlayer.currentTime = e.target.value;
    });
  }

  updatePlayTime() {
    let audioPlayer = document.getElementById("audio-element");

    if (audioPlayer.paused === false) {
      this.intervalId = setInterval(() => {
        this.scrollbar.current.value = audioPlayer.currentTime;
        this.setState({
          timeElapsed: audioPlayer.currentTime,
        });
        this.props.updatePlaypoint(this.state.timeElapsed);
      }, 50);
    }
  }

  toggleMute() {
    let vol = this.state.volume;
    let audioPlayer = document.getElementById("audio-element");

    if (vol !== 0.0) {
      this.setState(
        {
          mutedVolume: vol,
          volume: 0.0,
        },
        () => {
          audioPlayer.volume = this.state.volume;
          this.volumebar.current.value = 0;
        }
      );
    } else {
      this.setState(
        {
          volume: this.state.mutedVolume,
        },
        () => {
          audioPlayer.volume = this.state.volume;
          this.volumebar.current.value = this.state.volume * 1000;
        }
      );
    }
  }

  changeVol(e) {
    e.persist();
    let audioPlayer = document.getElementById("audio-element");

    this.setState({ volume: e.target.value / 1000.0 }, () => {
      this.volumebar.current.value = e.target.value;
      audioPlayer.volume = e.target.value / 1000.0;
    });
  }

  skipTrack() {
    let audioPlayer = document.getElementById("audio-element");
  
    this.setState(
      {
        playing: false,
        timeElapsed: 0,
      },
      () => {
      

        audioPlayer.currentTime = 0;
        this.scrollbar.current.value = 0;
        this.props.updatePlaypoint(0);
        this.props.pauseTrack();
        audioPlayer.pause();

      }
    );
  }

  render() {
    const {
      currentUser,
      trackPlayer,
      playing,
      audioPlayer,
      weeklyTrack,
      users,
      tracks,
    } = this.props;

    let trackUrl;
    if (trackPlayer) {
      trackUrl = trackPlayer.trackUrl;
    } else if (weeklyTrack) {
      trackUrl = weeklyTrack;
    } else {
      trackUrl = "";
    }

    return (
      <>
        <audio
          id="audio-element"
          ref={this.audioRef}
          className="audioplayer"
          controlsList="nodownload"
          controls
          volume="0.5"
          src={trackUrl}
          onLoadedMetadata={this.handleMetaData}
          onPlaying={this.updatePlayTime}
        />
        {trackPlayer && (
          <div className="track-player-main-container">
            <div className="track-player-content">
              <div className="track-player-buttons">
                <button className="track-prev-btn">
                  <FontAwesomeIcon
                    icon={faStepBackward}
                    onClick={this.restartTrack}
                  />
                </button>

                <button className="track-play-pause-btn">
                  {!this.props.playing ? (
                    <FontAwesomeIcon
                      icon={faPlay}
                      onClick={this.handlePlayPause}
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon={faPause}
                      onClick={this.handlePlayPause}
                    />
                  )}
                </button>

                <button className="track-skip-btn">
                  <FontAwesomeIcon
                    icon={faStepForward}
                    onClick={this.skipTrack}
                  />
                </button>
                <button className="track-shuffle-btn">
                  <FontAwesomeIcon icon={faRandom} />
                </button>
                <button className="track-repeat-btn">
                  <FontAwesomeIcon icon={faRedo} />
                </button>
              </div>
              <div className="track-playbar">
                <p>{formatTrackTime(this.state.timeElapsed)}</p>
                <input
                  className="audio-playbar"
                  type="range"
                  onInput={(e) => this.changePlaypoint(e)}
                  ref={this.scrollbar}
                  min="0"
                  defaultValue="0"
                  max={this.state.duration}
                />
                <p>{formatTrackTime(this.state.duration)}</p>
              </div>
              <div
                className="track-volume-btn"
                onMouseEnter={() => this.setState({ volumeActive: true })}
                onMouseLeave={() => this.setState({ volumeActive: false })}
              >
                {this.state.volumeActive && (
                  <div
                    className="volume-bar-wrapper"
                    onMouseEnter={() => this.setState({ volumeActive: true })}
                    onMouseLeave={() => this.setState({ volumeActive: false })}
                  >
                    <input
                      type="range"
                      id="volume-bar"
                      ref={this.volumebar}
                      min="0"
                      max="1000"
                      defaultValue={this.state.volume * 1000}
                      onChange={(e) => this.changeVol(e)}
                    />
                  </div>
                )}
                {this.state.volume === 0.0 ? (
                  <FontAwesomeIcon
                    icon={faVolumeMute}
                    className="volume-control-btn"
                    onClick={this.toggleMute}
                    onMouseEnter={() => this.setState({ volumeActive: true })}
                    onMouseLeave={() => this.setState({ volumeActive: false })}
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faVolumeUp}
                    className="volume-control-btn"
                    onClick={this.toggleMute}
                    onMouseEnter={() => this.setState({ volumeActive: true })}
                    onMouseLeave={() => this.setState({ volumeActive: false })}
                  />
                )}
                {/* <FontAwesomeIcon icon={faVolumeUp} /> */}
              </div>
              <div className="track-details-container">
                <div className="track-details-profile-pic">
                  <Link to={`/tracks/${trackPlayer.id}`}>
                    <img
                      className="track-cover-art"
                      src={trackPlayer.photoUrl}
                    />
                  </Link>
                </div>
                <div className="track-details-info">
                  <Link to={`/users/${trackPlayer.artist_id}`}>
                    <p className="track-details-artist-name">
                      {users[trackPlayer.artist_id].username}
                    </p>
                  </Link>
                  <Link
                    className="track-details-track-name"
                    to={`/tracks/${trackPlayer.id}`}
                  >
                    {trackPlayer.title}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
}

export default TrackPlayer;
