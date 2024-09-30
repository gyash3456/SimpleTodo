import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./component/counterSlice";
import cartSlice from "./Cart/cartSlice";

const store = configureStore({
  reducer: {
    counterState: counterSlice.reducer,
    cartState: cartSlice.reducer,
  },
});
export default store;
