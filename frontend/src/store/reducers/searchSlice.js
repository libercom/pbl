import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    search: ''
}

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        changeSearch: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { changeSearch } = searchSlice.actions

export default searchSlice.reducer