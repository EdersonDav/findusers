import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from './store';

const initialState = '';

const sliceNameSearch = createSlice({
  name: 'name',
  initialState,
  reducers: {
    saveName(_state, { payload }: PayloadAction<string>) {
      return payload;
    },
  },
});

export default sliceNameSearch.reducer;

export const { saveName } = sliceNameSearch.actions;
export const useDataName = (state: RootState) => {
  return state.nameSearch;
};
