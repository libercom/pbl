import { LOAD_DETAILS } from "../actions/types"

const initialState = {
    details: {}
}

export const detailsReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_DETAILS:
            return { details: action.payload }
        default:
            return state
    }
}