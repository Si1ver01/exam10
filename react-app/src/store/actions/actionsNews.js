import axios from "axios";
export const GET_NEWS = "GET_NEWS";
export const GET_ONE_NEWS = "GET_ONE_NEWS";
export const ADD_NEWS = "ADD_NEWS";
export const DELETE_NEWS = "DELETE_NEWS";
export const NEWS_LOADING = "NEWS_LOADING";
export const SET_ERROR = "SET_ERROR";

export const getNews = news => ({ type: GET_NEWS, payload: news });
export const getOneNews = news => ({ type: GET_ONE_NEWS, payload: news });
export const addNews = news => ({ type: ADD_NEWS, payload: news });
export const deleteNews = id => ({ type: DELETE_NEWS, payload: id });

export const newsLoading = () => ({ type: NEWS_LOADING });
export const setErrror = e => ({ type: SET_ERROR, payload: e });

export const requestGetNews = () => async dispatch => {
  try {
    dispatch(newsLoading());
    const response = await axios.get("/news");
    const { data } = response.data;
    dispatch(getNews(data));
  } catch (e) {
    dispatch(setErrror(e.response.data.data));
  }
};

export const requestGetOneNews = id => async dispatch => {
  try {
    dispatch(newsLoading());
    const response = await axios.get(`/news/${id}`);
    const { data } = response.data;
    dispatch(getOneNews(data));
  } catch (e) {
    console.log(e);
    dispatch(setErrror(e.response.data.data));
  }
};

export const requestAddNews = news => async dispatch => {
  try {
    // dispatch(newsLoading());
    // await fetch("/news", { method: "POST", body: news });
    await axios.post("/news", news);
    // const data = await response.json();
    // dispatch(getNews(data));
  } catch (e) {
    // console.log(e.response.data);
    dispatch(setErrror(e.response.data.data));
  }
};

export const requestDeleteNews = id => async dispatch => {
  try {
    await axios.delete(`/news/${id}`);
    dispatch(deleteNews(id));
  } catch (e) {
    dispatch(setErrror(e.response.data.data));
  }
};
