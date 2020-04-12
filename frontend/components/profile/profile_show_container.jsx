import { connect } from "react-redux";
import ProfileShow from "./profile_show";
import { fetchUser, fetchUsers } from "../../actions/user_actions";
import { fetchTracks } from "../../actions/track_actions";
import {
  receiveCurrentTrack,
  pauseTrack,
  playTrack,
} from "../../actions/track_player_actions";
import { withRouter } from "react-router-dom";

const msp = (state, ownProps) => {
  let userId = ownProps.match.params.userId;
  let user = state.entities.users[userId];
  return {
    userId,
    user,
    tracks: Object.values(state.entities.tracks),
    playing: state.ui.trackPlayer.playing,
    currentTrackId: state.ui.trackPlayer.track_id,
  };
};

const mdp = (dispatch) => {
  return {
    fetchUser: (userId) => dispatch(fetchUser(userId)),
    fetchUsers: () => dispatch(fetchUsers()),
    fetchTracks: () => dispatch(fetchTracks()),
    receiveCurrentTrack: (track) => dispatch(receiveCurrentTrack(track)),
    playTrack: () => dispatch(playTrack()),
    pauseTrack: () => dispatch(pauseTrack()),
  };
};

export default connect(msp, mdp)(ProfileShow);
