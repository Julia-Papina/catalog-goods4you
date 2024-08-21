import { combineReducers } from '@reduxjs/toolkit';
import { apiSlice } from './slices/api-slice';
import { apiUser } from './slices/api-user-slice';
import cartReducer from './slices/cart-slice';

const rootReducer = combineReducers({
    [apiSlice.reducerPath]: apiSlice.reducer,
    [apiUser.reducerPath]: apiUser.reducer,
    cart: cartReducer,
});

export default rootReducer;