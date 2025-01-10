import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
  name: "category",
  initialState: {
    category: [],
    subCategory: [],
    product: [],
  },
  reducers: {
    getCategories: (state, action) => {
      state.category = action.payload;
    },
    getSubCateogries: (state, action) => {
      state.subCategory = action.payload;
    },
    getProduct: (state, action) => {
      state.product = action.payload;
    },
    removeProduct: (state, action) => {
      state.product = state.product.filter(
        (product) => product.id != action.payload
      );
    },
  },
});

export const { getCategories, getSubCateogries, getProduct, removeProduct } =
  categorySlice.actions;
export default categorySlice.reducer;
