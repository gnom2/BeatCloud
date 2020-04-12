import { connect } from "react-redux";
import TrackShow from "./track_show";
import { fetchUser } from "../../actions/user_actions";
import { fetchTrack } from "../../actions/track_actions";
import { currentUser } from "../../util/selectors";
import {
  receiveCurrentTrack,
  pauseTrack,
  playTrack,
} from "../../actions/track_player_actions";
import { withRouter } from "react-router-dom";

const msp = (state, ownProps) => {
  let track = state.entities.tracks[ownProps.match.params.trackId] || {};
  let artist = state.entities.users[track.artist_id] || {};
  return {
    track,
    artist,
    currentUser: currentUser(state),
    playing: state.ui.trackPlayer.playing,
  };
};

const mdp = (dispatch) => ({
  fetchTrack: (trackId) => dispatch(fetchTrack(trackId)),
  fetchUser: (account_id) => dispatch(fetchUser(account_id)),
  receiveCurrentTrack: (track) => dispatch(receiveCurrentTrack(track)),
  playTrack: () => dispatch(playTrack()),
  pauseTrack: () => dispatch(pauseTrack()),
});

export default connect(msp, mdp)(TrackShow);
