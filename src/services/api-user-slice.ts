import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { UserType } from '../store/types/user-type';

export const apiUser = createApi({
    reducerPath: 'apiUser',
    baseQuery: fetchBaseQuery({ 
        baseUrl: 'https://dummyjson.com/',
        prepareHeaders: async (headers) => {
			const token = localStorage.getItem('token');
			if (token) {
				headers.set('Authorization', `Bearer ${token}`);
			}
			return headers;
		},
    }),
    endpoints: (builder) => ({
        authUser: builder.mutation<{token: string}, {username: string, password: string}>({
			query: (user) => ({
				url: 'auth/login',
				method: 'POST',
				body: user,
			}),
		}),
		getUser: builder.query<UserType, void>({
			query: () => 'auth/me',
		}),
        
    }),
});

export const { useAuthUserMutation, useGetUserQuery } = apiUser;