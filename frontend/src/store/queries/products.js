import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/api/' }),
    endpoints: (builder) => ({
        getPopularDevices: builder.query({
            query: () => 'products/popular'
        }),
        getDetails: builder.query({
            query: name => `products/${name.replaceAll('-', ' ').replaceAll('_', '-')}`
        }),
        getDevices: builder.query({
            query: category => `${category}`
        }),
        getSearch: builder.query({
            query: search => `/products/search/${search}`
        })
    })
})

export const { useGetPopularDevicesQuery, useGetDetailsQuery, useGetDevicesQuery, useGetSearchQuery } = productsApi