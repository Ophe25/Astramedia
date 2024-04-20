import { createSlice } from '@reduxjs/toolkit'

const initialState = { menuIsOpen: false };

export const setMenu = createSlice({
    name: 'menu',
    initialState,
    reducers: {

        setMenuIsOpen: (state, action) => {
            state.menuIsOpen = action.payload
        }
    }
})

export const { setMenuIsOpen } = setMenu.actions

export default setMenu.reducer