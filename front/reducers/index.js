import { combineReducers } from "redux";
import { HYDRATE } from "next-redux-wrapper";
import counter from "./counter";
import test from "./test";
const rootReducer = (state, action) => {
  if (action.type === HYDRATE) {
    return {
      ...state,
      ...action.payload,
    };
  }
  return combineReducers({
    counter,
    test,
    // 여기에 추가
  })(state, action);
};
//cotak.tistory.com/164 [TaxFree:티스토리]

export default rootReducer;
