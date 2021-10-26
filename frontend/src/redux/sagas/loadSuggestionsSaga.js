import { put, call, takeEvery } from 'redux-saga/effects'
import { loadSuggestions, resetLoading, setLoading } from '../actions/actions';
import { GET_SUGGESTIONS } from '../actions/types';
import { getSearch } from './api/requests';

function* loadSuggestionsWorker({ payload }) {
    yield put(setLoading())
    const data = yield call(getSearch, payload);

    yield put(loadSuggestions(data))
    yield put(resetLoading())
}

export function* loadSuggestionsSaga() {
    yield takeEvery(GET_SUGGESTIONS, loadSuggestionsWorker)
}