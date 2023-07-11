import { configureStore, createSlice } from "@reduxjs/toolkit";
// import { createStore } from "redux";
import counterReducer from './counterStore'
import authReducer from './authStore'


const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer },
});


export default store;

// const counterReducer = (state = initState, action) => {
//   if (action.type === "increment") {
//     return {
//       counter: state.counter + 1,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === "decrement") {
//     return {
//       counter: state.counter - 1,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === "increase") {
//     return {
//       counter: state.counter + action.amount,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "toggle") {
//     return {
//       counter: state.counter,
//       showCounter: !state.showCounter,
//     };
//   }

//   if (action.type === "rest") {
//     return {
//       counter: 0,
//       showCounter: true,
//     };
//   }

//   return state;
// };

// const store = createStore(counterReducer);

// export default store;
