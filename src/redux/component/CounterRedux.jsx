import React from "react";
import { useDispatch, useSelector } from "react-redux";

import counterSlice from "./counterSlice";
//actions and reducers are part of slice and
//counterState is a part of store.
//You can access every variable using name of that variable  store.counterState.count
const { increment, decrement } = counterSlice.actions;
const CounterRedux = () => {
  const count = useSelector((store) => {
    return store.counterState.count;
  });
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(increment())}>+</button>
      {count}
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
};

export default CounterRedux;
