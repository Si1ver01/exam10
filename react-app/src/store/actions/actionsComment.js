import axios from "axios";
import { setErrror } from "./actionsNews";

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
    const { data } = response.data;
    dispatch(getComments(data));
  } catch (e) {
    dispatch(errorComments(e.response.data.error));
  }
};

export const requestAddComment = comment => async dispatch => {
  try {
    const response = await axios.post("/comments", comment);
    const data = response.data;
    dispatch(addComment(data));
  } catch (e) {
    dispatch(setErrror(e.response.data.error));
  }
};

export const requestDeleteComment = id => async dispatch => {
  try {
    await axios.delete(`/comments/${id}`);
    dispatch(deleteComment(id));
  } catch (e) {
    dispatch(setErrror(e.response.data.error));
  }
};
