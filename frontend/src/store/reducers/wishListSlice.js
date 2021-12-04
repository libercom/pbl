import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    wishList: []
}

export const wishListSlice = createSlice({
    name: 'wishList',
    initialState,
    reducers: {
        addItemToWishList: (state, action) => {
            state.wishList.push(action.payload)
        },
        removeItemFromWishList: (state, action) => {
            state.wishList = state.wishList.filter(item => item.id != action.payload)
        }
    }
})

export const { addItemToWishList, removeItemFromWishList } = wishListSlice.actions

export default wishListSlice.reducer