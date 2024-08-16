import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { store } from "../store";
import { CartStateType } from "../types/cart-state";
export type RootState = ReturnType<typeof store.getState>;

const initialState: CartStateType = {
  items: [],
  status: "idle",
  error: null,
  totalQuantity: 0,
};

export const fetchCart = createAsyncThunk(
  "cart/fetchCart",
  async (userId: string) => {
    const response = await fetch(`https://dummyjson.com/carts/user/${userId}`);
    const data = await response.json();
    return data.carts[0].products;
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCart.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
        state.totalQuantity = state.items.reduce(
          (total, product) => total + product.quantity,
          0
        );
      })
      .addCase(fetchCart.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || null;
      });
  },
});

export const selectCartItems = (state: RootState) => state.cart.items;
export const selectCartStatus = (state: RootState) => state.cart.status;
export const selectCartError = (state: RootState) => state.cart.error;
export const selectTotalQuantity = (state: RootState) =>
  state.cart.totalQuantity;

export default cartSlice.reducer;
