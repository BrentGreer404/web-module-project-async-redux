import { GET_IMAGE_ERROR, GET_IMAGE_SUCCESS, SET_IS_FETCHING } from "../actions";

const initialState = {
    image: "",
    description: "",
    title: "",
    isFetching: false,
    error: ""
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_IS_FETCHING:
          return {...state, isFetching: action.payload};
        case GET_IMAGE_SUCCESS:
          return {...state, isFetching: false, image: action.payload.url, title: action.payload.title, description: action.payload.explanation}
        case GET_IMAGE_ERROR:
          return {...state, isFetching: false, error: action.payload}
        default:
          return state;
      }
}