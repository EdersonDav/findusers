import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IUser } from "../types/interfaces";

const initialState = {} as IUser;

const sliceUser = createSlice({
  name: "user",
  initialState,
  reducers: {
    saveUser(_state, { payload }: PayloadAction<IUser>) {
      return { ...payload };
    },
  },
});

export default sliceUser.reducer;

export const { saveUser } = sliceUser.actions;
export const useDataUser = (state: any) => {
  return state.userData as IUser;
};
