import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import searchSlice from './reducers/searchSlice'
import { productsApi } from './queries/products'
import authSlice from './reducers/authSlice'
import wishListSlice from './reducers/wishListSlice'

export const store = configureStore({
    reducer: {
        search: searchSlice,
        auth: authSlice,
        wishList: wishListSlice,
        [productsApi.reducerPath]: productsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productsApi.middleware)
})

setupListeners(store.dispatch)