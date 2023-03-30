import { configureStore } from '@reduxjs/toolkit'
import userSlice from './features/userSlice'
import verifySlice from './features/verifySlice'

export const store = configureStore({
  reducer: 
  {
    verify: verifySlice,
    user : userSlice,
  },
})