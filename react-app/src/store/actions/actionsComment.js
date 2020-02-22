import axios from "axios";

export const GET_COMMENTS = "GET_COMMENTS";
export const DELETE_COMMENT = "DELETE_COMMENT";
export const ADD_COMMENT = "ADD_COMMENT";
export const COMMENTS_LOADING = "COMMENTS_LOADING";
export const ERROR_COMMENTS = "ERROR_COMMENTS";

export const getComments = comments => ({
  type: GET_COMMENTS,
  payload: comments
});
export const deleteComment = id => ({ type: DELETE_COMMENT, payload: id });
export const addComment = comment => ({ type: ADD_COMMENT, payload: comment });

export const commentsLoading = () => ({ type: COMMENTS_LOADING });
export const errorComments = error => ({
  type: ERROR_COMMENTS,
  payload: error
});

export const requestGetComment = id => async dispatch => {
  try {
    dispatch(commentsLoading());
    const response = await axios.get(`/comments/?news_id=${id}`);
    const data = response.data;
    dispatch(getComments(data));
  } catch (e) {
    dispatch(errorComments(e.message));
  }
};

export const requestAddComment = comment => async dispatch => {
  try {
    dispatch(commentsLoading());
    const response = await fetch("/comments", {
      method: "POST",
      body: JSON.stringify(comment),
      headers: { "Content-Type": "application/json" }
    });
    const data = await response.json();

    dispatch(getComments(data));
  } catch (e) {
    dispatch(errorComments(e.message));
  }
};

export const requestDeleteComment = id => async dispatch => {
  try {
    await fetch(`/comments/${id}`, { method: "DELETE" });
    dispatch(deleteComment(id));
  } catch (e) {
    dispatch(errorComments(e.message));
  }
};
