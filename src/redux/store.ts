import { configureStore } from '@reduxjs/toolkit'

import sliceSearchUsers from './sliceSearchUsers';
import sliceUser from './sliceUser';
import sliceNameSearch from './sliceNameSearch';
import sliceRepos from './sliceRepos';

export const store = configureStore({
  reducer: {
    userData: sliceUser,
    reposData: sliceRepos,
    searchUsers: sliceSearchUsers,
    nameSearch: sliceNameSearch,
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch