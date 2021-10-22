import { put, call } from 'redux-saga/effects'
import { loadDevices } from '../actions/actions';
import { getDevices } from './api/requests';

export function* loadDevicesSaga() {
    const data = yield call(getDevices);

    yield put(loadDevices(data))
}