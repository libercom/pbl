import {
    SEARCH_CHANGE,
    CLEAR_SUGGESTIONS,
    LOAD_SUGGESTIONS
} from "../actions/types"

const initialState = {
    search: '',
    suggestions: []
}

export const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_CHANGE:
            return { ...state, search: action.payload }
        case LOAD_SUGGESTIONS:
            return { ...state, suggestions: action.payload }
        case CLEAR_SUGGESTIONS:
            return { ...state, suggestions: [] }
        default:
            return state
    }
}