import { createSlice } from "@reduxjs/toolkit";


const initialCounterState = {
  counter: 0,
  showCounter: true,
};

//using Redux toolkit
const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increaseByAmount(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleShowCounter(state) {
      state.showCounter = !state.showCounter;
    },
    resetCount(state) {
      state.counter = initialCounterState.counter;
    },
  },
});

export const counterAction = counterSlice.actions;

export default counterSlice.reducer