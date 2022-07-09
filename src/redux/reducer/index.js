import { GET_BUDGETS, GET_USER, CLEAR_BUDGET } from "../constants"

const initialState = {
    budgets: [],
    user: []
}

const rootReducer = (state = initialState, action) => {
    const { payload, type } = action
    switch (type) {
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
        case GET_USER:
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
