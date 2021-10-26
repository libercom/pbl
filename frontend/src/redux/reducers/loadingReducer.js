import { SET_LOADING, RESET_LOADING } from "../actions/types"

const initialState = {
    loading: false
}

export const loadingReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOADING:
            return { loading: true }
        case RESET_LOADING:
            return { loading: false }
        default:
            return state
    }
}