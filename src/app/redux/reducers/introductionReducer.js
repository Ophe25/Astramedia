import { createSlice } from '@reduxjs/toolkit'

const initialState = { isFirstConnection: true };

export const setConnection = createSlice({
    name: 'connection',
    initialState,
    reducers: {
        setIsFirstConnection: (state, action) => {
            state.isFirstConnection = action.payload
        },

    }
})

export const { setIsFirstConnection } = setConnection.actions

export default setConnection.reducer