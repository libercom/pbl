import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAuthenticated: false
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        toggleAuthStatus: state => {
            state.isAuthenticated = !state.isAuthenticated
        }
    }
})

export const { toggleAuthStatus } = authSlice.actions

export default authSlice.reducer