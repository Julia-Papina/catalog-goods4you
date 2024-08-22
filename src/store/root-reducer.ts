import { combineReducers } from '@reduxjs/toolkit';
import { apiSlice } from '../services/api-slice';
import { apiUser } from '../services/api-user-slice';
import cartReducer from './slices/cart-slice';
import authReduser from './auth-reduser';

const rootReducer = combineReducers({
    [apiSlice.reducerPath]: apiSlice.reducer,
    [apiUser.reducerPath]: apiUser.reducer,
    cart: cartReducer,
    auth: authReduser,
});

export default rootReducer;