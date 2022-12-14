import axios from "axios"

const URL = "https://api.nasa.gov/planetary/apod"
const API_KEY = "SfLl7iVpzHmLWDqrtK3RLLHRfs4XDBmufuohgJah"

export const GET_IMAGE = "GET_IMAGE"
export const GET_IMAGE_SUCCESS = "GET_IMAGE_SUCCESS"
export const GET_IMAGE_ERROR = "GET_IMAGE_ERROR"
export const SET_IS_FETCHING = "SET_IS_FETCHING"

export const getImage = () => dispatch => {
    dispatch(setIsFetching(true))
    axios.get(URL+"?api_key="+API_KEY+"&count=1")
    .then(res => {
        const image = res.data[0]
        console.log(image)
        dispatch(getImageSuccess(image))
    })
    .catch((err) => dispatch(getImageError(err)))
    return {type: GET_IMAGE, payload: {data: "hello"}}
}

const setIsFetching = (isFetching) => {
    return {type: SET_IS_FETCHING, payload: isFetching}
}

const getImageSuccess = (image) => {
    return {type: GET_IMAGE_SUCCESS, payload: image}
}

const getImageError = (error) => {
    return {type: GET_IMAGE_ERROR, payload: error}
}