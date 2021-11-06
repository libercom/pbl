import { CLEAR_POPULAR_DEVICES, LOAD_POPULAR_DEVICES } from "../actions/types"

const initialState = {
    popular: []
}

export const popularDevicesReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_POPULAR_DEVICES:
            return { popular: action.payload }
        default:
            return state
    }
}