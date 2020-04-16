import { connect } from "react-redux";
import { openModal } from "../../actions/modal_actions";
import { login, signup } from "../../actions/session_actions";
import { findHomeTracks } from "../../util/selectors";
import { fetchUsers } from "../../actions/user_actions";

import { fetchTracks } from "../../actions/track_actions";
import {
  receiveCurrentTrack,
  pauseTrack,
  playTrack,
} from "../../actions/track_player_actions";
import Home from "./home";

const msp = (state) => ({
  currentUser: state.entities.users[state.session.id],
  errors: state.entities.errors,
  users: state.entities.users,
  tracks: findHomeTracks(state),
});

const mdp = (dispatch) => ({
  fetchTracks: () => dispatch(fetchTracks()),
  fetchUsers: () => dispatch(fetchUsers()),
  receiveCurrentTrack: (track) => dispatch(receiveCurrentTrack(track)),
  playTrack: () => dispatch(playTrack()),
  pauseTrack: () => dispatch(pauseTrack()),
  login: (user) => dispatch(login(user)),
  signup: (user) => dispatch(signup(user)),
  openModal: (modal) => dispatch(openModal(modal)),
});

export default connect(msp, mdp)(Home);
