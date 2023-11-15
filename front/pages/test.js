import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { wrapper } from "../store/configureStore";
import { testAction, serverSideAction } from "../reducers/test";

export default function Test() {
  const dispatch = useDispatch();
  const { serverSideActionData } = useSelector((state) => state.test);
  const clickResponseTest = useCallback(() => {
    dispatch(testAction());
  }, [dispatch]);

  return (
    <div>
      <h1>testButton</h1>
      <button onClick={() => clickResponseTest()}>+</button>
      <div>{serverSideActionData}</div>
    </div>
  );
}
export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req }) => {
      await store.dispatch(serverSideAction());
    }
);
