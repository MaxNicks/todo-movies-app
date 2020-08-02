import {
  START_REQUEST_MOVIES,
  FINISH_REQUEST_MOVIES,
  MOVIES_ADD_FROM_SERVER,
  MOVIES_FETCH_REQUESTED,
  CHANGE_FILTER_TEXT,
} from './constants';

export const loadMoviesFromServer = (movies) => ({
  type: MOVIES_ADD_FROM_SERVER,
  movies,
});

export const changeFilterText = (filterText) => ({
  type: CHANGE_FILTER_TEXT,
  filterText,
});

export const moviesFetchRequested = () => ({
  type: MOVIES_FETCH_REQUESTED,
});

export const requestMovies = () => ({
  type: START_REQUEST_MOVIES,
});

export const finishRequestMovies = () => ({
  type: FINISH_REQUEST_MOVIES,
});
