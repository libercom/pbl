import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import searchSlice from './reducers/searchSlice'
import { productsApi } from './queries/products'

export const store = configureStore({
    reducer: {
        search: searchSlice,
        [productsApi.reducerPath]: productsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productsApi.middleware)
})

setupListeners(store.dispatch)