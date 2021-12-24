import { configureStore, createSlice } from "@reduxjs/toolkit";
const productSlice = createSlice({
  name: "products",
  initialState: {},
  reducers: {
    setProduct: (state, action) => {
      state["product"] = action.payload;
    },
  },
});
export const stateSelector = (state) => {
  return state.products || {};
};
export const product = (state) => {
  return state.products.product;
};

export const { setProduct } = productSlice.actions;
export default configureStore({
  reducer: {
    products: productSlice.reducer,
  },
});
