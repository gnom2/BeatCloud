import { connect } from "react-redux";
import TrackShow from "./track_show";
// import { fetchUser } from "../../actions/user_actions";
import { fetchTrack } from "../../actions/track_actions";
import { currentUser } from "../../util/selectors";
import {
  requestComments,
  createComment,
  deleteComment,
} from "../../actions/comment_actions";
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
    users: state.entities.users,
    tracks: state.entities.tracks,
    comments: state.entities.comments,
    currentUser: currentUser(state),
    playing: state.ui.trackPlayer.playing,
  };
};

const mdp = (dispatch) => ({
  fetchTrack: (trackId) => dispatch(fetchTrack(trackId)),
  receiveCurrentTrack: (track) => dispatch(receiveCurrentTrack(track)),
  requestComments: () => dispatch(requestComments()),
  createComment: (comment) => dispatch(createComment(comment)),
  playTrack: () => dispatch(playTrack()),
  pauseTrack: () => dispatch(pauseTrack()),
  deleteComment: (commentId) => dispatch(deleteComment(commentId)),
});

export default withRouter(connect(msp, mdp)(TrackShow));
