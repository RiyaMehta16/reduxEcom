import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import StatusCode from "../utils/statusCode";
const initialState = {
  data: [],
  status: "idle",
};
export const getProducts = createAsyncThunk(
  "products/getProducts",
  async () => {
    const data = await fetch("https://fakestoreapi.com/products");
    const result = await data.json();
    return result;
  }
);

const productSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        // Add the new reducers for executeEmails
        state.status = StatusCode.LOADING;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        // Add the new reducers for executeEmails
        state.status = StatusCode.IDLE;
        state.data = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
        // Add the new reducers for executeEmails

        state.status = StatusCode.ERROR;
      });
  },
});
export const {} = productSlice.actions;
export default productSlice.reducer;
