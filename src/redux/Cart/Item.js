import React, { useEffect } from "react";

// import counterSlice from "../component/counterSlice";
import cartSlice from "./cartSlice";

import { useDispatch, useSelector } from "react-redux";
import { getData } from "./cartSlice";
import { useApi } from "./hooks/useApi";
const { addToCart } = cartSlice.actions;

const Item = ({ name, price, id }) => {
  // const { status, dynamicData } = useSelector((store) => store.cartState);
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getData());
  // }, []);
  const { status, dynamicData } = useApi(getData, "cartState");
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
      <div>{status === "PENDING" ? "LOADING" : dynamicData}</div>
      {/* <button>Increase quantity</button> */}
    </div>
  );
};

export default Item;
