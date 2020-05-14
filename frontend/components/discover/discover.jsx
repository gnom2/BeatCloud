import React from "react";
import NavBarContainer from "../navbar/navbar_container";
import SidebarContainer from "../sidebar/sidebar_container";
import TrackButtonContainer from "../track/track_button_container";
import {
  faChartBar,
  faUserFriends,
  faRedo,
  faHeart,
  faRetweet,
  faShareSquare,
  faEllipsisH,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TrackButton from "../track/track_button";

class Discover extends React.Component {
  constructor(props) {
    super(props);

    this.handlePlay = this.handlePlay.bind(this);
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
    // this.audioRef.current.play();
  }

  render() {
    let trackLi = [
      {
        id: 1,
        title: "Shelter",
        genre: "Electronic",
        artist: "Porter Robinson & Madeon",
        trackUrl:
          "https://www50.zippyshare.com/d/sqHbJSA3/19959/Porter%20Robinson%20amp%3b%20Madeon%20-%20Shelter%20%28Original%20Mix%29.mp3",
      },
      { id: 2, title: "Mountain Hunter", artist: "Fractal", trackUrl: "" },
      {
        id: 3,
        title: "Need To Feel Loved (Adam K & Soha Remix)",
        artist: "Reflekt",
        trackUrl: "",
      },
      {
        id: 4,
        title: "Counting The Points",
        artist: "Andrew Bayer",
        trackUrl: "",
      },
      { id: 5, title: "The Sky", artist: "Mat Zo", trackUrl: "" },
      {
        id: 6,
        title: "On My Way",
        artist: "Alan Walker ft. Sabrina Carpenter",
        trackUrl: "",
      },
      {
        id: 7,
        title: "To The Six (Matt Lange Remix)",
        artist: "Boom Jinx",
        trackUrl: "",
      },
      {
        id: 8,
        title: "All I Need",
        artist: "Aurosonic & Frainbreeze",
        trackUrl: "",
      },
      { id: 9, title: "Strobe", artist: "Deadmau5", trackUrl: "" },
      { id: 10, title: "The Darkness", artist: "Xilent", trackUrl: "" },
      { id: 11, title: "Infinite", artist: "Notaker", trackUrl: "" },
      {
        id: 12,
        title: "Days To Come",
        artist: "Seven Lions ft Fiora",
        trackUrl: "",
      },
    ];

    let playlistLi = [
      {
        photoUrl:
          "https://active-storage-beatcloud-seeds.s3.amazonaws.com/playlists/art1.png",
        title: "Work From Home ...",
      },
      {
        photoUrl:
          "https://active-storage-beatcloud-seeds.s3.amazonaws.com/playlists/art2.png",
        title: "The Latest Uploads ...",
      },
      {
        photoUrl:
          "https://active-storage-beatcloud-seeds.s3.amazonaws.com/playlists/art3.png",
        title: "Introspective Rap",
      },
      {
        photoUrl:
          "https://active-storage-beatcloud-seeds.s3.amazonaws.com/playlists/art4.png",
        title: "Good Morning Groove",
      },
      {
        photoUrl:
          "https://active-storage-beatcloud-seeds.s3.amazonaws.com/playlists/art5.png",
        title: "Chill Bedroom Pop",
      },
      {
        photoUrl:
          "https://active-storage-beatcloud-seeds.s3.amazonaws.com/playlists/art6.png",
        title: "Anti-Anxiety Ambient",
      },
      {
        photoUrl:
          "https://active-storage-beatcloud-seeds.s3.amazonaws.com/playlists/art7.png",
        title: "Sublime Beats ",
      },
      {
        photoUrl:
          "https://active-storage-beatcloud-seeds.s3.amazonaws.com/playlists/art8.png",
        title: "Soul for Self-Care",
      },
      {
        photoUrl:
          "https://active-storage-beatcloud-seeds.s3.amazonaws.com/playlists/art9.png",
        title: "Indoor Indie",
      },
    ];

    let carouselLi = playlistLi.map((playlist, i) => {
      return (
        <li key={i} id="playlist-carousel-item">
          <img src={playlist.photoUrl} alt="" />
          <div>{playlist.title}</div>
        </li>
      );
    });

    let scrollLi = trackLi.map((track, idx) => {
      return (
        <li id="weekly-track-item" key={idx}>
          <div className="weekly-track-info">
            <p className="artist">{track.artist}</p> -{" "}
            <p className="track">{track.title}</p>
          </div>

          <div className="weekly-track-icons">
            <div>
              <FontAwesomeIcon icon={faHeart} />
            </div>
            <div>
              <FontAwesomeIcon icon={faShareSquare} />
            </div>
            <div>
              <FontAwesomeIcon icon={faRetweet} />
            </div>
            <div>
              <FontAwesomeIcon icon={faEllipsisH} />
            </div>
          </div>
        </li>
      );
    });

    return (
      <section className="discover">
        <div className="discover-nav">
          <NavBarContainer />
        </div>
        <section className="discover-main">
          <section className="discover-main-content-container">
            <div className="discover-main-weekly-module">
              <h2>BeatCloud Weekly</h2>
              <h3>All of BeatCloud. Just for you.</h3>
              <div className="discover-weekly-container">
                <div className="discover-weekly-album-cover">
                  <TrackButtonContainer track={trackLi[0]} />
                  {/* background album img */}
                </div>
                <div className="discover-weekly-track-scroller">
                  <ul id="weekly-track-list">
                    {scrollLi}
                    {/* list of tracks to scroll through  */}
                  </ul>
                </div>
              </div>

              <div className="discover-weekly-footer">
                <img
                  src="https://active-storage-beatcloud-seeds.s3.amazonaws.com/profileart.png"
                  alt=""
                />
                {/* ^ should have current user's profile pic */}

                <div className="discover-weekly-footer-content">
                  <h3>Based on your listening history</h3>
                  <button id="discover-weekly-playlist-btn">
                    Go to playlist
                  </button>
                </div>
              </div>
            </div>

            <div className="discover-playlists-container">
              <h2>Stay Home</h2>
              <h3>Tunes for isolation and self-care</h3>

              <ul id="playlist-carousel">{carouselLi}</ul>
            </div>
          </section>
          <div className="discover-sidebar">
            <SidebarContainer />
          </div>
        </section>
      </section>
    );
  }
}

export default Discover;
