import { LOAD_DETAILS, CLEAR_DETAILS } from "../actions/types"

const initialState = {
    details: {}
}

export const detailsReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_DETAILS:
            return { details: action.payload }
        case CLEAR_DETAILS:
            return { details: {} }
        default:
            return state
    }
}