import { useCallback } from "react";
import { useDispatch } from "react-redux";

import { testAction } from "../reducers/test";
export default function Test() {
  const dispatch = useDispatch();

  const clickResponseTest = useCallback(() => {
    dispatch(testAction());
  }, [dispatch]);

  return (
    <div>
      <h1>testButton</h1>
      <button onClick={() => clickResponseTest()}>+</button>
    </div>
  );
}
