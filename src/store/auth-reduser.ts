import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthStateType } from './types/ayth-state-type';
import { UserType } from './types/user-type';

const initialState: AuthStateType = {
    user: null,
    token: localStorage.getItem('token'),
    isAuthenticated: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setToken: (state, action: PayloadAction<string>) => {
            state.token = action.payload;
            state.isAuthenticated = true;
        },
        setUser: (state, action: PayloadAction<UserType | null>) => {
            state.user = action.payload;
        },
        logout: (state) => {
            state.token = null;
            state.user = null;
            state.isAuthenticated = false;
        },
    },
});

export const { setToken, setUser, logout } = authSlice.actions;
export default authSlice.reducer;