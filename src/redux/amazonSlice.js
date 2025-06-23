import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  userInfo: null,
};

export const amazonSlice = createSlice({
  name: "amazon",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = state.products.find(
        (product) => product.id === action.payload.id
      ); // When the same products are added to the cart only the quantity must increase
      if (product) {
        product.quantity += action.payload.quantity;
      } else {
        state.products.push(action.payload);
      }
    },
    increamentQuantity: (state, action) => {
      const item = state.products.find((item) => item.id === action.payload);
      item.quantity++;
    },
    decreamentQuantity: (state, action) => {
      const item = state.products.find((item) => item.id === action.payload);
      if (item.quantity === 1) {
        item.quantity = 1;
      } else {
        item.quantity--;
      }
    },
    deleteItem: (state, action) => {
      state.products = state.products.filter(
        (item) => item.id !== action.payload
      );
    },
    resetCart: (state) => {
      state.products = [];
    },

    // ========== Product Reducers End here ==========
    // ========== UserInfo Reducers Start here ==========
    // User authentication
    setUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },

    //========== UserInfo Reducers End here ==========
    userSignOut: (state) => {
      state.userInfo = null;
    },
  },
});

export const {
  addToCart,
  deleteItem,
  resetCart,
  increamentQuantity,
  decreamentQuantity,
  setUserInfo,
  userSignOut,
} = amazonSlice.actions;
export default amazonSlice.reducer;
