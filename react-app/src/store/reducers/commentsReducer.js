import {
  ADD_COMMENT,
  COMMENTS_LOADING,
  DELETE_COMMENT,
  ERROR_COMMENTS,
  GET_COMMENTS
} from "../actions/actionsComment";

const initialState = {
  comments: [],
  loading: false,
  error: null
};

export default function commentReducer(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    case GET_COMMENTS:
      return {
        ...state,
        comments: payload,
        loading: false
      };
    case ADD_COMMENT:
      return {
        ...state,
        comments: [...state.comments, ...payload],
      };
    case DELETE_COMMENT:
      return {
        ...state,
        loading: false,
        comments: state.comments.filter(elem => elem.id !== payload)
      };
    case COMMENTS_LOADING:
      return { ...state, loading: true, error: null };
    case ERROR_COMMENTS:
      return { ...state, error: payload, loading: false };

    default:
      return state;
  }
}
