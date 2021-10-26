import { combineReducers } from 'redux'
import { devicesReducer } from './devicesReducer.js'
import { popularDevicesReducer } from './popularDevicesReducer.js'
import { searchReducer } from './searchReducer.js'
import { loadingReducer } from './loadingReducer.js'
import { detailsReducer } from './detailsReducer.js'

export const rootReducer = combineReducers({
    devices: devicesReducer,
    search: searchReducer,
    popular: popularDevicesReducer,
    loading: loadingReducer,
    details: detailsReducer
})