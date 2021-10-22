import { put, call, takeEvery } from 'redux-saga/effects'
import { loadDetails } from '../actions/actions';
import { GET_DETAILS } from '../actions/types';
import { getDetails } from './api/requests';

function* loadDetailsWorker({ payload }) {
    const data = yield call(getDetails, payload);

    yield put(loadDetails(data))
}

export function* loadDetailsSaga() {
    yield takeEvery(GET_DETAILS, loadDetailsWorker)
}