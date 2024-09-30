import React from "react";

// import counterSlice from "../component/counterSlice";
import cartSlice from "./cartSlice";

import { useDispatch } from "react-redux";
const { addToCart } = cartSlice.actions;
const Item = ({ name, price, id }) => {
  const dispatch = useDispatch();
  return (
    <div>
      name: {name} price:{price}
      <button
        onClick={() => {
          dispatch(addToCart({ name, price, id }));
        }}
      >
        Add to Cart
      </button>
      {/* <button>Increase quantity</button> */}
    </div>
  );
};

export default Item;
