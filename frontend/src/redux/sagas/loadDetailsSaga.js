import { put, call, takeEvery } from 'redux-saga/effects'
import { loadDetails, resetLoading, setLoading } from '../actions/actions';
import { GET_DETAILS } from '../actions/types';
import { getDetails } from './api/requests';

function* loadDetailsWorker({ payload }) {
    yield put(setLoading())
    const data = yield call(getDetails, payload);

    yield put(loadDetails(data))
    yield put(resetLoading())
}

export function* loadDetailsSaga() {
    yield takeEvery(GET_DETAILS, loadDetailsWorker)
}