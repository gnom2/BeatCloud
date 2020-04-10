import { connect } from "react-redux";
import ProfileShow from "./profile_show";
import { fetchUser, fetchUsers } from "../../actions/user_actions";
import { fetchTracks } from "../../actions/track_actions";
import { withRouter } from "react-router-dom";

const msp = (state, ownProps) => {
  let userId = ownProps.match.params.userId;
  let user = state.entities.users[userId];
  return {
    userId,
    user,
    tracks: Object.values(state.entities.tracks),
  };
};

const mdp = (dispatch) => {
  return {
    fetchUser: (userId) => dispatch(fetchUser(userId)),
    fetchUsers: () => dispatch(fetchUsers()),
    fetchTracks: () => dispatch(fetchTracks()),
  };
};

export default connect(msp, mdp)(ProfileShow);
