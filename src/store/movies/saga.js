import { Alert } from 'react-native';
import { call, put, takeLatest, delay } from 'redux-saga/effects';

import config from '../../../config.json';
import { MOVIES_FETCH_REQUESTED } from './constants';
import { loadMoviesFromServer, requestMovies, finishRequestMovies } from './actions';
import apiClient from '../../services/api';

function* fetchMovies() {
  try {
    yield put(requestMovies());
    yield delay(config.server_delay);

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
