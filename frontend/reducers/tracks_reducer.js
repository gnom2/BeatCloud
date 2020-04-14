import {
  RECEIVE_TRACKS,
  RECEIVE_TRACK,
  REMOVE_TRACK,
} from "../actions/track_actions";

const tracksReducer = (state = {}, action) => {
  Object.freeze(state);
  debugger;
  switch (action.type) {
    case RECEIVE_TRACKS:
      return action.tracks;
    case RECEIVE_TRACK:
      debugger;
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
