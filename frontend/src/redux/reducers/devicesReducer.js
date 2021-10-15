import { LOAD_DEVICES } from "../actions/types"

const initialState = {
    devices: []
}

export const devicesReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_DEVICES:
            return { ...state, devices: action.payload }
        default:
            return state
    }
}