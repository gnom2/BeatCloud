import { connect } from "react-redux";
import CommentForm from "./comment_form";
import { createComment, fetchComments } from "../../actions/comment_actions";

const msp = (state) => ({
  currentUser: state.session,
});

const mdp = (dispatch) => ({
  createComment: (comment) => dispatch(createComment(comment)),
  fetchComments: (trackId) => dispatch(fetchComments(trackId)),
});

export default connect(msp, mdp)(CommentForm);
