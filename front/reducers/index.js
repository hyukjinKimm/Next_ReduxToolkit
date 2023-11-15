import { combineReducers } from "redux";
import { HYDRATE } from "next-redux-wrapper";
import counter from "./counter";
import test from "./test";
const rootReducer = (state, action) => {
  switch (action.type) {
    case HYDRATE:
      console.log("HYDRATE", action);
      return { ...action.payload };
    default: {
      const combinedReducer = combineReducers({
        test,
        counter,
      });
      return combinedReducer(state, action);
    }
  }
};
//cotak.tistory.com/164 [TaxFree:티스토리]

export default rootReducer;
