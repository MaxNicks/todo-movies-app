import {
  MOVIES_ADD_FROM_SERVER,
  START_REQUEST_MOVIES,
  FINISH_REQUEST_MOVIES,
  CHANGE_FILTER_TEXT,
} from './constants';

const defaultState = {
  moviesData: [],
  isLoading: false,
  filterText: '',
};

export const moviesReducer = (state = defaultState, action) => {
  switch (action.type) {
    case MOVIES_ADD_FROM_SERVER: {
      return {
        ...state,
        moviesData: action.movies,
      };
    }

    case START_REQUEST_MOVIES: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case FINISH_REQUEST_MOVIES: {
      return {
        ...state,
        isLoading: false,
      };
    }

    case CHANGE_FILTER_TEXT: {
      return {
        ...state,
        filterText: action.filterText,
      };
    }

    default:
      return state;
  }
};
