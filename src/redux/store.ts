import { configureStore } from '@reduxjs/toolkit'

import sliceResult from './sliceResult';

export const store = configureStore({
  reducer: {
    resultData: sliceResult,
  }
})