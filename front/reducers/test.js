import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import axios from "axios";
const initialState = {
  testLoading: false,
  testDone: false,
  testError: null,
}; // 초기 상태 정의

export const testAction = createAsyncThunk("test/response", async (data) => {
  const response = await axios.get(`http://localhost:3065/`);
  return response.data;
});
const testSlice = createSlice({
  name: "test",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(HYDRATE, (state, action) => ({
        ...state,
        ...action.payload.test,
      }))
      .addCase(testAction.pending, (state, action) => {
        state.testLoading = true;
        state.testDone = false;
        state.testError = null;
      })
      .addCase(testAction.fulfilled, (state, action) => {
        state.testLoading = false;
        state.testDone = true;
      })
      .addCase(testAction.rejected, (state, action) => {
        state.testLoading = false;
        state.testError = action.error;
      }),
});

export default testSlice.reducer; // 리듀서
