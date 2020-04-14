import { combineReducers } from "redux";

import usersReducer from "./users_reducer";
import tracksReducer from "./tracks_reducer";
import commentsReducer from './comment_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  tracks: tracksReducer,
  comments: commentsReducer,
});

export default entitiesReducer;
