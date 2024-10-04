import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchData = async () => {
  const result = await new Promise((res, rej) => {
    setTimeout(() => {
      res("Hello");
    }, 3000);
  });
  return result;
};
export const getData = createAsyncThunk("HI", fetchData);

const cartSlice = createSlice({
  name: "cartSlice1", //only used as a marker while seeing redux devtools action will be called as cartSlice1/addToCart
  //or cartSlice1/applyCoupon etc.
  initialState: {
    cartItems: [],
    cartTotal: 0,
    status: "PENDING",
    dynamicData: "",
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

      state.cartTotal = state.cartTotal + item.price;
    },
    applyCoupon: (state, data) => {
      state.cartTotal =
        state.cartTotal - data.payload.discount * state.cartTotal;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getData.pending, (state, action) => {
        state.status = "PENDING";
      })
      .addCase(getData.fulfilled, (state, action) => {
        state.status = "FULFILLED";
        state.dynamicData = action.payload;
      })
      .addCase(getData.rejected, (state, action) => {
        state.status = "REJECTED";
      });
  },
});
export default cartSlice;
