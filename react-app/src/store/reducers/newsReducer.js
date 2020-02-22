const initialState = {
    news : [],
    loading : false,
    error : null
};

export default function newsReducer (state = initialState, {type , payload}) {
  switch (type) {

  case typeName:
    return { ...state }

  default:
    return state
  }
}
