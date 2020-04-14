import { connect } from "react-redux";
import CommentForm from "./comment_form";
import {
  createComment,
  fetchTrackComments,
} from "../../actions/comment_actions";

const msp = (state) => ({
  currentUser: state.session,
});

const mdp = (dispatch) => ({
  createComment: (comment) => dispatch(createComment(comment)),
  // fetchTrackComments: (trackId) => dispatch(fetchTrackComments(trackId)),
});

export default connect(msp, mdp)(CommentForm);
