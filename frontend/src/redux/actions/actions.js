import 'regenerator-runtime/runtime'
import {
    LOAD_DEVICES,
    GET_SUGGESTIONS,
    LOAD_SUGGESTIONS,
    SEARCH_CHANGE,
    CLEAR_SUGGESTIONS,
    GET_DETAILS,
    LOAD_DETAILS,
    CLEAR_DETAILS,
} from "./types"

export const loadDevices = (devices) => {
    return {
        type: LOAD_DEVICES,
        payload: devices
    }
}

export const getSuggestions = (search) => {
    return {
        type: GET_SUGGESTIONS,
        payload: search
    }
}

export const loadSuggestions = (suggestions) => {
    return {
        type: LOAD_SUGGESTIONS,
        payload: suggestions
    }
}

export const getDetails = (device) => {
    return {
        type: GET_DETAILS,
        payload: device
    }
}

export const loadDetails = (details) => {
    return {
        type: LOAD_DETAILS,
        payload: details
    }
}

export const changeSearch = (search) => {
    return {
        type: SEARCH_CHANGE,
        payload: search
    }
}

export const clearSuggestions = () => {
    return {
        type: CLEAR_SUGGESTIONS
    }
}

export const clearDetails = () => {
    return {
        type: CLEAR_DETAILS
    }
}