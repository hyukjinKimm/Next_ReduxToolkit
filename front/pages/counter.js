import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as counterActions from "../reducers/counter";
export default function Counter() {
  const dispatch = useDispatch();
  const value = useSelector(({ counter }) => counter.value);

  const plus = useCallback(() => {
    dispatch(counterActions.increment());
  }, [dispatch]);

  const minus = useCallback(() => {
    dispatch(counterActions.decrement());
  }, [dispatch]);

  return (
    <div>
      <h1>Counter</h1>
      <button onClick={() => minus()}>-</button>
      <span>{value}</span>
      <button onClick={() => plus()}>+</button>
    </div>
  );
}
