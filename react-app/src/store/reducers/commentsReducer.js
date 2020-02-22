const initialState = {
 comments : [],
    loading : false ,
    error : null
};

export default function commentsReducer (state = initialState, {type , payload}) {
  switch (type) {

  case typeName:
    return { ...state }

  default:
    return state
  }
}
