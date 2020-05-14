import { connect } from "react-redux";
import TrackPlayer from "./track_player";
import {
  playTrack,
  pauseTrack,
  restartTrack,
  updatePlaypoint,
  receiveCurrentTrack,
} from "../../../actions/track_player_actions";
import { fetchUser } from "../../../actions/user_actions";

const msp = (state, ownProps) => {

  return {
    currentUser: state.entities.users[state.session.id],
    trackPlayer: state.entities.tracks[state.ui.trackPlayer.track_id],
    timeElapsed: state.ui.trackPlayer.timeElapsed,
    users: state.entities.users,
    playing: state.ui.trackPlayer.playing,
    audioPlayer: ownProps.audioPlayer,
    weeklyTrack: ownProps.trackUrl,
    tracks: state.entities.tracks,
  };
};

const mdp = (dispatch) => {
  return {
    playTrack: () => dispatch(playTrack()),
    pauseTrack: () => dispatch(pauseTrack()),
    restartTrack: () => dispatch(restartTrack()),
    updatePlaypoint: (newTime) => dispatch(updatePlaypoint(newTime)),
    receiveCurrentTrack: (track) => dispatch(receiveCurrentTrack(track)),
    fetchUser: (id) => dispatch(fetchUser(id)),
  };
};

export default connect(msp, mdp)(TrackPlayer);
