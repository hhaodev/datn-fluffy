import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: {},
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserdata: (state, action) => {
            state.user = action.payload
        }
    },
})

export const { setUserdata } = userSlice.actions

export default userSlice.reducer