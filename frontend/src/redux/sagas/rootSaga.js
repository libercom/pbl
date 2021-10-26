import { call, all, spawn } from 'redux-saga/effects'
import { loadDetailsSaga } from './loadDetailsSaga';
import { loadDevicesSaga } from './loadDevicesSaga';
import { loadPopularDevicesSaga } from './loadPopularDevicesSaga';
import { loadSuggestionsSaga } from './loadSuggestionsSaga';

export function* rootSaga() {
    const sagas = [
        loadDevicesSaga,
        loadSuggestionsSaga,
        loadDetailsSaga,
        loadPopularDevicesSaga
    ];

    yield all(sagas.map(saga =>
        spawn(function* () {
            while (true) {
                try {
                    yield call(saga)
                    break
                } catch (e) {
                    console.log(e)
                }
            }
        })
    ))
}