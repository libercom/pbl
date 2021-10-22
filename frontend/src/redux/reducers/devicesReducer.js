import { CLEAR_DETAILS, LOAD_DETAILS, LOAD_DEVICES } from "../actions/types"

const initialState = {
    devices: [],
    details: {}
}

export const devicesReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_DEVICES:
            return { ...state, devices: action.payload }
        case LOAD_DETAILS:
            return { ...state, details: action.payload }
        case CLEAR_DETAILS:
            return { ...state, details: {} }
        default:
            return state
    }
}