import React, { useMemo } from "react";
import Item from "./Item";
import { useDispatch, useSelector } from "react-redux";
import cartSlice from "./cartSlice";
const { applyCoupon } = cartSlice.actions;

const CartComponent = () => {
  const { cartItems, cartTotal } = useSelector((store) => store.cartState);
  const dispatch = useDispatch();
  const itemsList = useMemo(() => {
    return [
      {
        id: 1,
        name: "Mobile",
        price: 100,
      },
      {
        id: 2,
        name: "Laptop",
        price: 105,
      },
      {
        id: 3,
        name: "PC",
        price: 110,
      },
      {
        id: 4,
        name: "Mobile",
        price: 120,
      },
      {
        id: 5,
        name: "Mobile",
        price: 150,
      },
    ];
  }, []);
  const showItems = useMemo(() => {
    return itemsList.map((item, index) => {
      return (
        <Item name={item.name} price={item.price} key={item.id} id={item.id} />
      );
    });
  }, [itemsList]);

  const showCart = () => {
    console.log(cartItems);
    return (
      <div>
        {cartItems.map((item) => {
          return (
            <div key={item.id}>
              hello
              {item.name} {item.price} {item.quantity}
            </div>
          );
        })}
        total{cartTotal}{" "}
        <button
          onClick={() => {
            dispatch(applyCoupon({ discount: 0.2 }));
          }}
        >
          Apply Coupon
        </button>
      </div>
    );
  };
  return (
    <>
      <div>
        CartComponent
        {showItems}
      </div>
      <div>
        Cart
        {showCart()}
      </div>
    </>
  );
};

export default CartComponent;
