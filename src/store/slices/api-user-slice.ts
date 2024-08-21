import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { UserType } from '../types/user-type';

export const apiUser = createApi({
    reducerPath: 'apiUser',
    baseQuery: fetchBaseQuery({ 
        baseUrl: 'https://dummyjson.com/',
        prepareHeaders: async (headers) => {
			const accessToken = localStorage.getItem('token');
			if (accessToken) {
				headers.set('Authorization', `Bearer ${accessToken}`);
			}
			return headers;
		},
    }),
    endpoints: (builder) => ({
        authUser: builder.mutation<{accessToken: string}, UserType>({
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