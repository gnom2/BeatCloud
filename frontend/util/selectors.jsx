export const currentUser = ({ entities, session }) => {
  return entities.users[session.currentUserId];
};
