import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: {
    cartItems: [],
    cartTotal: 0,
  },
  reducers: {
    addToCart: (state, data) => {
      const item = data.payload;
      const itemIndex = state.cartItems.findIndex((element) => {
        return element.id === item.id;
      });
      if (itemIndex === -1) {
        const newItem = { ...item, quantity: 1 };
        state.cartItems.push(newItem);
      } else {
        let cartItem = state.cartItems[itemIndex];
        cartItem = { ...cartItem, quantity: cartItem.quantity + 1 };
        state.cartItems[itemIndex] = cartItem;
      }
      let sum = 0;

      state.cartTotal = state.cartTotal + item.price;
    },
    applyCoupon: (state, data) => {
      state.cartTotal =
        state.cartTotal - data.payload.discount * state.cartTotal;
    },
  },
});
export default cartSlice;
