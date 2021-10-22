import { call, all, spawn } from 'redux-saga/effects'
import { loadDetailsSaga } from './loadDetailsSaga';
import { loadDevicesSaga } from './loadDevicesSaga';
import { loadSuggestionsSaga } from './loadSuggestionsSaga';

export function* rootSaga() {
    const sagas = [
        loadDevicesSaga,
        loadSuggestionsSaga,
        loadDetailsSaga
    ];

    yield all(sagas.map(saga =>
        spawn(function* () {
            try {
                yield call(saga)
            } catch (e) {
                console.log(e)
            }
        })
    ))
}