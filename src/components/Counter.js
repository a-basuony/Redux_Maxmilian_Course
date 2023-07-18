import classes from "./Counter.module.css";
import { useDispatch, useSelector } from "react-redux";
import { counterAction } from "./store/counterStore";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);

  const incrementHandler = () => {
    // dispatch({ type: "increment" });
    dispatch(counterAction.increment());
  };

  const decrementHandler = () => {
    // dispatch({
    //   type: "decrement",
    // });
    dispatch(counterAction.decrement());
  };

  const increaseHandler = () => {
    // dispatch({ type: "increase", amount: 10 });
    dispatch(counterAction.increaseByAmount(10));
  };

  const toggleHandler = () => {
    // dispatch({ type: "toggle" });
    dispatch(counterAction.toggleShowCounter());
  };
  const restHandler = () => {
    // dispatch({ type: "rest" });
    dispatch(counterAction.resetCount());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>

      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={increaseHandler}>Increase 10</button>
        <button onClick={incrementHandler}>Increment</button>
      </div>
      <button onClick={restHandler}>Rest Counter</button>
      <button onClick={toggleHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

// Redux with class component

// import React, { Component } from "react";
// import { connect } from "react-redux";

// class Counter extends Component {
//   incrementHandler() {
//     this.props.increment();
//   }

//   decrementHandler() {
//     this.props.decrement();
//   }

//   resetHandler() {
       // dispatch({ type: "rest" });
    // dispatch(counterAction.resetCount());
//     // Dispatch the action for resetting the counter
//   }

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>

//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//           <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//         </div>
//         <button onClick={this.resetHandler.bind(this)}>Reset Counter</button>
//       </main>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     counter: state.counter,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () => {
//       dispatch({ type: "INCREMENT" });
//     },
//     decrement: () => {
//       dispatch({ type: "DECREMENT" });
//     },
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
