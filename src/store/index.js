import AsyncStorage from '@react-native-community/async-storage';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { reducer as formReducer } from 'redux-form';
import createSagaMiddleware from 'redux-saga';
import { persistReducer, persistStore } from 'redux-persist';
import { all } from 'redux-saga/effects';

import { moviesReducer } from './movies/reducers';
import watchLoadMoviesSaga from './movies/saga';

function* rootSaga() {
  yield all([watchLoadMoviesSaga()]);
}

const rootReducer = combineReducers({
  form: formReducer,
  movies: moviesReducer,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['movies'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const sagaMiddleware = createSagaMiddleware();

const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));

const persistor = persistStore(store);
sagaMiddleware.run(rootSaga);

persistor.purge();

export { store, persistor };
