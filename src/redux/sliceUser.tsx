import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IUser } from '../types/interfaces';
import { RootState } from './store';

const initialState = {} as IUser;

const sliceUser = createSlice({
  name: 'user',
  initialState,
  reducers: {
    saveUser(_state, { payload }: PayloadAction<IUser>) {
      return { ...payload };
    },
  },
});

export default sliceUser.reducer;

export const { saveUser } = sliceUser.actions;
export const useDataUser = (state: RootState) => {
  return state.userData;
};

export const useCountRepos = (
  state: RootState,
): { perpage: number; total: number } => {
  const count = state.userData.public_repos;
  return {
    perpage: Math.ceil(count / 10),
    total: count,
  };
};
