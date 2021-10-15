import {
    SEARCH_CHANGE,
    SEARCH_DEVICES,
    CLEAR_SUGGESTIONS
} from "../actions/types"

const initialState = {
    search: '',
    suggestions: []
}

export const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_DEVICES:
            return { ...state, suggestions: action.payload }
        case SEARCH_CHANGE:
            return { ...state, search: action.payload }
        case CLEAR_SUGGESTIONS:
            return { ...state, suggestions: [] }
        default:
            return state
    }
}