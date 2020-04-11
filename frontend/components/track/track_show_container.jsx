import { connect } from "react-redux";
import TrackShow from "./track_show";
import { fetchUser } from "../../actions/user_actions";
import { fetchTrack } from "../../actions/track_actions";
import { currentUser } from "../../util/selectors";
import { withRouter } from "react-router-dom";

const msp = (state, ownProps) => {
  let track = state.entities.tracks[ownProps.match.params.trackId] || {};
  let artist = state.entities.users[track.artist_id] || {};
  return {
    track: track,
    artist: artist,
    currentUser: currentUser(state),
  };
};

const mdp = (dispatch) => ({
  fetchTrack: (trackId) => dispatch(fetchTrack(trackId)),
  fetchUser: (account_id) => dispatch(fetchUser(account_id)),
});

export default connect(msp, mdp)(TrackShow);
