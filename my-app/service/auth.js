import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { api_key, auth_base_url } from '../utils/keys';

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({ baseUrl: auth_base_url }),
    endpoints: (builder) => ({
        Signup: builder.mutation({
            query: (user) => ({
                url: `accounts:signUp?key=${api_key}`,
                method: 'POST',
                body: user,
            }),
            onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
                const result = await queryFulfilled;
                dispatch(authApi.util.updateQueryData('Login', undefined, (draft) => {
                    draft.user = result.data;
                }));
            },
        }),
        Login: builder.mutation({
            query: (user) => ({
                url: `accounts:signInWithPassword?key=${api_key}`,
                method: 'POST',
                body: user,
            }),
            onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
                const result = await queryFulfilled;
                dispatch(authApi.util.updateQueryData('Login', undefined, (draft) => {
                    draft.user = result.data;
                }));
            },
        }),
    }),
});

export const { useSignupMutation, useLoginMutation } = authApi;