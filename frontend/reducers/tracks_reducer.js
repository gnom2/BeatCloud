import { 
    RECEIVE_TRACKS,
    RECEIVE_TRACK,
    REMOVE_TRACK
} from '../actions/track_actions';

const tracksReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_TRACKS:
            return Object.assign({}, state, action.tracks);
        case RECEIVE_TRACK:
            return Object.assign({}, state, action.track);
        case REMOVE_TRACK:
            let newState = Object.assign({}, state);
            delete newState[action.trackId];
            return newState;
        default:
            return state;
    }
};

export default tracksReducer;