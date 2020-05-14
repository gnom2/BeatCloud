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

  switch (action.type) {
   
    case RECEIVE_ALL_COMMENTS:
 
      return merge({}, state, action.comments.comments);
    case RECEIVE_COMMENT:
      
      newState = merge({}, state, action.comment);
      return newState;
    case REMOVE_COMMENT:
      
      newState = merge({}, state);
      delete newState[action.commentId];
      return newState;
    default:
      return state;
  }
};

export default commentsReducer;
