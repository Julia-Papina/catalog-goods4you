import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
    endpoints: (builder) => ({
        getCartByUserId: builder.query({
            query: (userId) => `carts/user/${userId}`,
        }),
        getProductById: builder.query({
            query: (productId) => `/products/${productId}`,
        }),
        searchProducts: builder.query({
            query: () => `/products`,
        }),
    }),
});

export const { useGetCartByUserIdQuery, useGetProductByIdQuery ,useSearchProductsQuery } = apiSlice;