export const fetchTrack = (trackId) =>
  $.ajax({
    method: "GET",
    url: `/api/tracks/${trackId}`,
  });

export const fetchTracks = () =>
  $.ajax({
    method: "GET",
    url: "/api/tracks",
  });

export const uploadTrack = (trackData) =>
  $.ajax({
    method: "POST",
    url: "/api/tracks",
    data: trackData,
  });

export const deleteTrack = (trackId) =>
  $.ajax({
    method: "DELETE",
    url: `/api/tracks/${trackId}`,
  });
