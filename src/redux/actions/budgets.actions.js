import { postBudget, getBudget } from "../../services/budgets.service";
import { GET_BUDGETS, CLEAR_BUDGET } from "../constants";

export const createBudget = (newBudget, token) => {
    return async (dispatch) => {
        try {
            const data = await postBudget(newBudget, token)

            dispatch({
                type: GET_BUDGETS,
                payload: data
            })
        } catch (error) {
            return error
        }
    }
}

export const getUserBudget = (id, token) => {
    return async (dispatch) => {
        try {
            const data = await getBudget(id, token)
            
            dispatch({
                type: GET_BUDGETS,
                payload: data
            })
        } catch (error) {
            return error
        }
    }
}

export const clearBudget = () => {
    return async (dispatch) => {
        try {
            dispatch({
                type:CLEAR_BUDGET,
            })
        } catch (error) {
            return error
        }
    }
}