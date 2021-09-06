// test-utils.jsx
import React, {FC, ReactElement} from 'react';
import {render as rtlRender} from '@testing-library/react-native';
import {Provider} from 'react-redux';
import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';
import logger from 'redux-logger';
import {all, fork} from '@redux-saga/core/effects';

import numbersReducer from '../redux/Numbers/Numbers.reducer';
import {numbersRootSaga} from '../redux/Numbers/Numbers.saga';
import createSagaMiddleware from '@redux-saga/core';

//Setting up the store
const reducers = combineReducers({
  number: numbersReducer,
});

const rootSaga = function* rootSaga() {
  yield all([fork(numbersRootSaga)]);
};

const sagaMiddleware = createSagaMiddleware();
export const testingStore = configureStore({
  reducer: reducers,
  middleware: getDefaultMiddleware => {
    const reduxDefaultMiddleware = getDefaultMiddleware();
    return [...reduxDefaultMiddleware, logger, sagaMiddleware];
  },
});

sagaMiddleware.run(rootSaga);

// Overriding the render method
function render(ui, {store = testingStore, renderOptions} = {}) {
  function Wrapper({children}) {
    return <Provider store={store}>{children}</Provider>;
  }
  return rtlRender(ui, {wrapper: Wrapper, ...renderOptions});
}

// re-export everything
export * from '@testing-library/react-native';
// override render method
export {render};
