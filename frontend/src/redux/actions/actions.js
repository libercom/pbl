import 'regenerator-runtime/runtime'
import {
    LOAD_DEVICES,
    SEARCH_DEVICES,
    SEARCH_CHANGE,
    CLEAR_SUGGESTIONS
} from "./types"
import axios from "axios"

export function loadDevices() {
    return async dispatch => {
        const result = await axios.get('/api/devices')
        const json = result.data
        dispatch({ type: LOAD_DEVICES, payload: json })
    }
}

export function searchDevices(search) {
    return async dispatch => {
        const result = await axios.get(`/api/devices/search/${search}`)
        const json = result.data
        dispatch({ type: SEARCH_DEVICES, payload: json })
    }
}

export function changeSearch(search) {
    return {
        type: SEARCH_CHANGE,
        payload: search
    }
}

export function clearSuggestions() {
    return {
        type: CLEAR_SUGGESTIONS
    }
}