import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { RootState } from './store';
import { gitHubApi } from '../services/GitHubAPI';
import { IRepos } from '../types/interfaces';

interface IFetchResults {
  repos: IRepos[];
  loading: boolean;
  error: boolean;
}

const initialState: IFetchResults = {
  repos: [],
  loading: false,
  error: false,
};

interface IGetUserParams {
  userName: string;
  page: number;
}

export const fetchRepos = createAsyncThunk(
  'user/getRepositories',
  async ({ userName, page }: IGetUserParams) => {
    const response = await gitHubApi.getRepos(userName, page);
    return response;
  },
);

const sliceRepos = createSlice({
  name: 'reposFetch',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchRepos.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchRepos.fulfilled, (state, action) => {
      state.loading = false;
      state.repos = action.payload;
      state.error = false;
    });
    builder.addCase(fetchRepos.rejected, (state) => {
      state.error = true;
    });
  },
  reducers: {},
});

export default sliceRepos.reducer;

export const useDataRepositories = (state: RootState) => {
  return state.reposData.repos;
};
