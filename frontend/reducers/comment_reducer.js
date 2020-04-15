import merge from "lodash/merge";

import {
  RECEIVE_ALL_COMMENTS,
  RECEIVE_COMMENT,
  REMOVE_COMMENT,
} from "../actions/comment_actions";

import { RECEIVE_TRACK } from "../actions/track_actions";

const commentsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  // debugger;
  switch (action.type) {
    // case RECEIVE_TRACK:
    //   return merge({}, state, action.track.comments);
    case RECEIVE_ALL_COMMENTS:
      // debugger;
      return merge({}, state, action.comments.comments);
    case RECEIVE_COMMENT:
      // debugger;
      newState = merge({}, state, action.comment);
      return newState;
    case REMOVE_COMMENT:
      // debugger;
      newState = merge({}, state);
      delete newState[action.commentId];
      return newState;
    default:
      return state;
  }
};

export default commentsReducer;
