export const currentUser = ({ entities, session }) => {
  return entities.users[session.id];
};

export const findHomeTracks = ({ entities }) => {
  let trackLi = [];

  let tracksArr = Object.values(entities.tracks);
  for (let i = 0; i < tracksArr.length; i++) {
    if (tracksArr[i].genre.includes("HOMETEST")) {
      trackLi.push(tracksArr[i]);
    }
  }

  return trackLi;
};
