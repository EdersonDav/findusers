import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IResultSearch } from "../types/interfaces";

const initialState: IResultSearch = {
  users: [],
  count: 0,
};

const sliceResult = createSlice({
  name: "result",
  initialState,
  reducers: {
    saveResult(_state, { payload }: PayloadAction<IResultSearch>) {
      return { ...payload };
    },
    clearResult() {
      return initialState;
    },
  },
});

export default sliceResult.reducer;

export const { saveResult, clearResult } = sliceResult.actions;
export const useDataResult = (state: any) => {
  return state.resultData as IResultSearch;
};
