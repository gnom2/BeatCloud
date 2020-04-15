import React from "react";
import { connect } from "react-redux";
import CommentItem from "./comment_item";
import {
  fetchTrackComments,
  deleteComment,
} from "../../actions/comment_actions";
import { fetchTrack } from "../../actions/track_actions";

const msp = (state) => {
  // debugger;
  return {
    comments: state.entities.comments,
    currentUser: state.entities.users[state.session.id],
    track: Object.values(state.entities.tracks)[0],
  };
};

const mdp = (dispatch) => ({
  fetchTrack: (trackId) => dispatch(fetchTrack(trackId)),
  fetchTrackComments: (trackId) => dispatch(fetchTrackComments(trackId)),
  deleteComment: (commentId) => dispatch(deleteComment(commentId)),
});

export default connect(msp, mdp)(CommentItem);
