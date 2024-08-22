import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './root-reducer.ts';
import { apiSlice } from '../services/api-slice.ts';
import { apiUser } from '../services/api-user-slice.ts';

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware, apiUser.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;