import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { RootState } from './store';
import { gitHubApi } from '../services/GitHubAPI';
import { IResultSearch, IUsersResult } from '../types/interfaces';
import { returnArrayPages } from '../helpers/returnArrayPages';

interface IFetchResults {
  data: IResultSearch;
  loading: boolean;
  error: boolean;
}

const initialData = {
  users: [],
  count: 0,
};

const initialState: IFetchResults = {
  data: initialData,
  loading: false,
  error: false,
};

interface IGetUserParams {
  userName: string;
  page: number;
}

export const fetchSearchUser = createAsyncThunk(
  'user/searchUser',
  async ({ userName, page }: IGetUserParams) => {
    const response = await gitHubApi.searchUsers(userName, page);
    return response;
  },
);

const sliceResultFetch = createSlice({
  name: 'resultFetch',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchSearchUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchSearchUser.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = false;
    });
    builder.addCase(fetchSearchUser.rejected, (state) => {
      state.error = true;
    });
  },
  reducers: {},
});

export default sliceResultFetch.reducer;

export const useDataResult = (state: RootState) => {
  return state.searchUsers.data.users as IUsersResult[];
};

export const useCountResult = (
  state: RootState,
): { arrayPages: string[]; total: number } => {
  const count = state.searchUsers.data.count;
  return { arrayPages: returnArrayPages(count, 30), total: count };
};
