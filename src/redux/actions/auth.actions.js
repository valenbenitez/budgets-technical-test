import { postAuth } from "../../services/auth.service";
import { GET_USER, ERROR } from "../constants";

export const signIn = (input) => {
    return async (dispatch) => {
        try {
            const data = await postAuth(input)
            if (data.data) {
                dispatch({
                    type: GET_USER,
                    payload: data.data
                })
            } else {
                dispatch({
                    type: ERROR,
                    payload: data.response.data
                })
            }
        } catch (error) {
            return error
        }
    }
}