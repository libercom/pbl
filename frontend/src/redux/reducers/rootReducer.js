import { combineReducers } from 'redux'
import { devicesReducer } from './devicesReducer.js'
import { searchReducer } from './searchReducer.js'

export const rootReducer = combineReducers({
    devices: devicesReducer,
    search: searchReducer
})