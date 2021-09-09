import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';
import {combineReducers} from 'redux';
import logger from 'redux-logger';
import {all, fork} from '@redux-saga/core/effects';

import numbersReducer from '../redux/Numbers/Numbers.reducer';
import pokemonsReducer from '../redux/Pokemons/Pokemons.reducer';
// import {numbersRootSaga} from '../redux/Numbers/Numbers.saga';
import createSagaMiddleware from '@redux-saga/core';
import {pokemonsRootSaga} from '../redux/Pokemons/Pokemons.saga';

export const reducers = combineReducers({
  number: numbersReducer,
  pokemon: pokemonsReducer,
});

export const rootSaga = function* rootSaga() {
  yield all([fork(pokemonsRootSaga)]);
};

export const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  reducer: reducers,
  middleware: getDefaultMiddleware => {
    const reduxDefaultMiddleware = getDefaultMiddleware();
    return [...reduxDefaultMiddleware, sagaMiddleware];
  },
});

sagaMiddleware.run(rootSaga);

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
// export const useAppDispatch = useDispatch<AppDispatch>();
