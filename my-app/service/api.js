import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { api_products } from '../utils/keys';

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: api_products }),
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => 'productos.json',
        }),
        getProduct: builder.query({
            query: (id) => `productos/${id}.json` 
        })
    }),
});

export const { useGetProductsQuery, useGetProductQuery } = api;