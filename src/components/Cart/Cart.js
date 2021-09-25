import React from "react";
import "./Cart.css";
const Cart = (props) => {
  // console.log(props);
  const { cart } = props;

  let total = 0;
  for (let programmer of cart) {
    total += programmer.income;
  }
  console.log(cart.length);
  return (
    <div className="mt-5">
      <h4 className="cart-programmers">
        Added <span style={{ color: "tomato" }}> {cart.length}</span>
      </h4>
      <h4>total : ${total}</h4>
    </div>
  );
};

export default Cart;
