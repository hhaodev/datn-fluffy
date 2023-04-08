import { configureStore } from '@reduxjs/toolkit'
import userSlice from './features/userSlice'
import verifySlice from './features/verifySlice'
import schoolsSlice from './features/schoolsSlice'

export const store = configureStore({
  reducer: 
  {
    verify: verifySlice,
    user : userSlice,
    schools: schoolsSlice
  },
})