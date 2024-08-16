import { combineReducers } from '@reduxjs/toolkit';
import { apiSlice } from './slices/api-slice';
import cartReducer from './slices/cart-slice';

const rootReducer = combineReducers({
    [apiSlice.reducerPath]: apiSlice.reducer,
    cart: cartReducer,
});

export default rootReducer;