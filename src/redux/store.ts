import { configureStore } from '@reduxjs/toolkit'

import sliceResult from './sliceResult';
import sliceUser from './sliceUser';
import sliceRepos from './sliceRepos';

export const store = configureStore({
  reducer: {
    resultData: sliceResult,
    userData: sliceUser,
    reposData: sliceRepos,
  }
})