// Auth Actions here
import axios from "axios";
import { AUTH_SIGN_IN_ERROR, AUTH_SIGN_IN_LOADING, AUTH_SIGN_IN_SUCCESS, AUTH_SIGN_OUT } from "./auth.types";

export const loginAPI = (creds) => async (dispatch) => {
    dispatch({type: AUTH_SIGN_IN_LOADING})
    try {
        let response = await axios.post("https://reqres.in/api/login", creds)
        dispatch({
            type: AUTH_SIGN_IN_SUCCESS,
            payload: response.data
        })

    } catch (e) {
        console.log(e);
        dispatch({ type: AUTH_SIGN_IN_ERROR })
    }
}

export const logoutAPI = () => ({ type: AUTH_SIGN_OUT })