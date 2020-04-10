import * as TrackAPIUtil from "../util/track_api_util";

export const RECEIVE_TRACKS = "RECEIVE_TRACKS";
export const RECEIVE_TRACK = "RECEIVE_TRACK";
export const REMOVE_TRACK = "REMOVE_TRACK";

export const receiveTracks = (tracks) => ({
  type: RECEIVE_TRACKS,
  tracks,
});

export const receiveTrack = (track) => ({
  type: RECEIVE_TRACK,
  track,
});

export const removeTrack = (trackId) => ({
  type: REMOVE_TRACK,
  trackId,
});

export const fetchTracks = () => (dispatch) =>
  TrackAPIUtil.fetchTracks().then((tracks) => dispatch(receiveTracks(tracks)));

export const fetchTrack = (trackId) => (dispatch) =>
  TrackAPIUtil.fetchTrack(trackId).then((track) =>
    dispatch(receiveTrack(track))
  );

export const uploadTrack = (track) => (dispatch) =>
  TrackAPIUtil.uploadTrack(track).then((track) =>
    dispatch(receiveTrack(track))
  );

export const deleteTrack = (trackId) => (dispatch) =>
  TrackAPIUtil.deleteTrack(trackId).then((trackId) =>
    dispatch(removeTrack(trackId))
  );
