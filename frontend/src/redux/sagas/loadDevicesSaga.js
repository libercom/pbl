import { put, call, takeEvery } from 'redux-saga/effects'
import { loadDevices, resetLoading, setLoading } from '../actions/actions';
import { GET_DEVICES } from '../actions/types';
import { getDevices } from './api/requests';

export function* loadDevicesWorker({ payload }) {
    yield put(setLoading())
    const data = yield call(getDevices, payload);

    yield put(loadDevices(data))
    yield put(resetLoading())
}

export function* loadDevicesSaga() {
    yield takeEvery(GET_DEVICES, loadDevicesWorker)
}