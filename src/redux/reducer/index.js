import { GET_BUDGETS, GET_USER, CLEAR_BUDGET, ERROR } from "../constants"

const initialState = {
    budgets: [],
    user: [],
    error: []
}

const rootReducer = (state = initialState, action) => {
    const { payload, type } = action
    switch (type) {
        case ERROR:
            return {
                ...state,
                error: payload
            }
        case GET_BUDGETS:
            return {
                ...state,
                budgets: payload
            }
        case GET_USER:
            return {
                ...state,
                user: payload
            }
        case CLEAR_BUDGET:
            return {
                ...state,
                budgets: []
            }

        default:
            return {
                ...state
            }
    }
}

export default rootReducer
