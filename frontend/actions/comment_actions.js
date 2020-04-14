import * as CommentApiUtil from "../util/comment_api_util";

export const RECEIVE_ALL_COMMENTS = "RECEIVE_ALL_COMMENTS";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";

const receiveComments = (comments) => ({
  type: RECEIVE_ALL_COMMENTS,
  comments,
});

const receiveComment = (comment) => ({
  type: RECEIVE_COMMENT,
  comment,
});

const removeComment = (commentId) => ({
  type: REMOVE_COMMENT,
  commentId,
});

export const requestComments = (trackId) => (dispatch) => {
  return CommentApiUtil.fetchComments(trackId).then((comments) =>
    dispatch(receiveComments(comments))
  );
};

export const createComment = (comment) => (dispatch) => {
  return CommentApiUtil.postComment(comment).then((comment) =>
    dispatch(receiveComment(comment))
  );
};

export const deleteComment = (commentId) => (dispatch) =>
  CommentApiUtil.deleteComment(commentId).then(() =>
    dispatch(removeComment(commentId))
  );
