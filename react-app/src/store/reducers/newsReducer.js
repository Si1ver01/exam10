import {
  DELETE_NEWS,
  GET_NEWS,
  GET_ONE_NEWS,
  NEWS_LOADING,
  SET_ERROR
} from "../actions/actionsNews";

const initialState = {
  news: [],
  oneNews: null,
  loading: false,
  error: null
};

export default function newsReducer(state = initialState, { type, payload }) {
  switch (type) {
    case NEWS_LOADING:
      return { ...state, loading: true, error: null };
    case GET_NEWS:
      return { ...state, news: payload, loading: false };
    case GET_ONE_NEWS:
      return { ...state, oneNews: payload, loading: false };
    case DELETE_NEWS:
      return {
        ...state,
        news: [...state.news].filter(el => el.id !== payload)
      };
    case SET_ERROR:
      return { ...state, loading: false, error: payload };
    default:
      return state;
  }
}
