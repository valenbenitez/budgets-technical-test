import { postAuth } from "../../services/auth.service";
import { GET_USER } from "../constants";

export const signIn = (input) => {
    return async (dispatch) => {
        try {
            const data = await postAuth(input)
            dispatch({
                type: GET_USER,
                payload: data
            })
        } catch (error) {
            console.log(error)
            return error
        }
    }
}