import TrackButton from "./track_button";
import { connect } from "react-redux";
import {
  receiveCurrentTrack,
  playTrack,
  pauseTrack,
} from "../../actions/track_player_actions";

const msp = (state, ownProps) => ({
  track: ownProps.track,
  playing: state.ui.trackPlayer.playing,
  currentTrackId: state.ui.trackPlayer.track_id,
});

const mdp = (dispatch) => ({
  receiveCurrentTrack: (track) => dispatch(receiveCurrentTrack(track)),
  playTrack: () => dispatch(playTrack()),
  pauseTrack: () => dispatch(pauseTrack()),
});

export default connect(msp, mdp)(TrackButton);
