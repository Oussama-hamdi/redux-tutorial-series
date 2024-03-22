import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [
    {
      id: 1,
      name: "Product 1",
      price: 100,
    },
    {
      id: 2,
      name: "Product 2",
      price: 200,
    },
    {
      id: 3,
      title: "Product 3",
      price: 300,
    },
  ],
};

const productsSlice = createSlice({
  name: "productsSlice",
  initialState,
  reducers: {
    getProducts(state, action) {
      state.products = action.payload;
    },
    addProduct(state, action) {
      state.products.push(action.payload);
    },
    removeProduct(state, action) {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
    },
  },
});

export const { getProducts, addProduct, removeProduct } = productsSlice.actions;

export default productsSlice.reducer;
