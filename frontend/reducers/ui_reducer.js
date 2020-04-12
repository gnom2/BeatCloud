import { combineReducers } from "redux";

import trackPlayerReducer from "./track_player_reducer";
import modalReducer from "./modal_reducer";

const uiReducer = combineReducers({
  trackPlayer: trackPlayerReducer,
  modal: modalReducer,
});

export default uiReducer;
