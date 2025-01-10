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
    //for empty categories
    removeCategories: (state, action) => {
      state.category = state.category.filter((category) => {
        category.id != action.payload;
      });
    },
// ------------------------------------------------------------------------------------------
    getSubCateogries: (state, action) => {
      state.subCategory = action.payload;
    },
    //for empty subcategories
    removeSubCategories: (state, action) => {
      state.subCategory = state.subCategory.filter((subCategory) => {
        subCategory.id != action.payload;
      });
    },
// ----------------------------------------------------------------------------------------------
    getProduct: (state, action) => {
      state.product = action.payload;
    },
    //for empty products
    removeProduct: (state, action) => {
      state.product = state.product.filter(
        (product) => product.id != action.payload
      );
    },
  },
});

export const {
  getCategories,
  getSubCateogries,
  getProduct,
  removeCategories,
  removeSubCategories,
  removeProduct,
} = categorySlice.actions;
export default categorySlice.reducer;
