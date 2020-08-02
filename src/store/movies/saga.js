import { Alert } from 'react-native';
import { call, put, takeLatest } from 'redux-saga/effects';

import { MOVIES_FETCH_REQUESTED } from './constants';
import { loadMoviesFromServer, requestMovies, finishRequestMovies } from './actions';
import apiClient from '../../services/api';

function* fetchMovies() {
  try {
    yield put(requestMovies());

    const data = yield call(apiClient.getMovies);
    yield put(loadMoviesFromServer(data.data));
  } catch (e) {
    yield call(Alert.alert, 'Loading failed', 'Movies loading failed.');
  } finally {
    yield put(finishRequestMovies());
  }
}

function* watchLoadMoviesSaga() {
  yield takeLatest(MOVIES_FETCH_REQUESTED, fetchMovies);
}

export default watchLoadMoviesSaga;
