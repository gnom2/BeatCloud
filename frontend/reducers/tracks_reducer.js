import merge from "lodash/merge";

import {
  RECEIVE_TRACKS,
  RECEIVE_TRACK,
  REMOVE_TRACK,
} from "../actions/track_actions";

import { RECEIVE_ALL_COMMENTS } from "../actions/comment_actions";

const tracksReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ALL_COMMENTS:
   
      return merge({}, state, action.comments.comments);
    case RECEIVE_TRACKS:
      return action.tracks;
    case RECEIVE_TRACK:
     
      return Object.assign({}, state, {
        [action.track.track.id]: action.track.track,
      });
    case REMOVE_TRACK:
      let newState = Object.assign({}, state);
      delete newState[action.trackId];
      return newState;
    default:
      return state;
  }
};

export default tracksReducer;
