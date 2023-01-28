import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IRepos } from '../types/interfaces';

const initialState = [] as IRepos[];

const sliceRepos = createSlice({
  name: 'result',
  initialState,
  reducers: {
    saveRepos(_state, { payload }: PayloadAction<IRepos[]>) {
      return [...payload];
    },
  },
});

export default sliceRepos.reducer;

export const { saveRepos } = sliceRepos.actions;

export const useDataRepos = (state: any) => {
  return state.reposData as IRepos[];
};

export const useDataReposPagination = (state: any, page: number) => {
  const repos = state.reposData as IRepos[];
  const data = repos.slice(page - 1, 10);
  return data;
};

export const useCountRepos = (state: any): string[] => {
  const repos = state.reposData as IRepos[];
  const numbers = Object.keys(
    new Array(Math.ceil(repos.length / 10)).fill(null),
  );

  return numbers;
};
