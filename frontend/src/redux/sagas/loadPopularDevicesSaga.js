import { put, call, takeEvery } from 'redux-saga/effects'
import { loadPopularDevices, resetLoading, setLoading } from '../actions/actions';
import { GET_POPULAR_DEVICES } from '../actions/types';
import { getPopularDevices } from './api/requests';

export function* loadPopularDevicesWorker() {
    yield put(setLoading())
    const data = yield call(getPopularDevices);

    yield put(loadPopularDevices(data))
    yield put(resetLoading())
}

export function* loadPopularDevicesSaga() {
    yield takeEvery(GET_POPULAR_DEVICES, loadPopularDevicesWorker)
}