import {createSlice} from '@reduxjs/toolkit';

export type NumberState = {
  count: number;
};

export const INITIAL_STATE: NumberState = {
  count: 0,
};

const numberReducer = createSlice({
  name: 'number',
  initialState: INITIAL_STATE,
  reducers: {
    incrementCounter: state => {
      state.count += 1;
    },
    decrementCounter: state => {
      state.count -= 1;
    },
  },
});

export const {incrementCounter, decrementCounter} = numberReducer.actions;

export default numberReducer.reducer;
