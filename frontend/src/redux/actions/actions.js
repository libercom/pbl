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
    GET_DEVICES,
    SET_LOADING,
    RESET_LOADING,
    GET_POPULAR_DEVICES,
    LOAD_POPULAR_DEVICES,
    CLEAR_DEVICES,
    CLEAR_POPULAR_DEVICES,
} from "./types"

export const getDevices = (category) => {
    return {
        type: GET_DEVICES,
        payload: category
    }
}

export const loadDevices = (devices) => {
    return {
        type: LOAD_DEVICES,
        payload: devices
    }
}

export const getPopularDevices = () => {
    return {
        type: GET_POPULAR_DEVICES
    }
}

export const loadPopularDevices = (popularDevices) => {
    return {
        type: LOAD_POPULAR_DEVICES,
        payload: popularDevices
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

export const setLoading = () => {
    return {
        type: SET_LOADING
    }
}

export const resetLoading = () => {
    return {
        type: RESET_LOADING
    }
}

export const clearDevices = () => {
    return {
        type: CLEAR_DEVICES
    }
}

export const clearPopularDevices = () => {
    return {
        type: CLEAR_POPULAR_DEVICES
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