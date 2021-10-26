import { CLEAR_DETAILS, CLEAR_DEVICES, LOAD_DETAILS, LOAD_DEVICES } from "../actions/types"

const initialState = {
    devices: [],
}

export const devicesReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_DEVICES:
            return { devices: action.payload }
        case CLEAR_DEVICES:
            return { devices: [] }
        default:
            return state
    }
}