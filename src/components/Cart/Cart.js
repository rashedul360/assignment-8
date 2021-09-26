import { useState } from "react";
import "./Cart.css";
const Cart = (props) => {
  const { cart } = props;
  let total = 0;
  for (let programmer of cart) {
    total += programmer.income;
  }

  return (
    <div className="mt-5">
      <h4 className="cart-programmers">
        Added <span style={{ color: "tomato" }}> {cart.length}</span>
      </h4>
      <h4>Total Cost : ${total}</h4>
      {cart.map((programmer) => (
        <ul className="list-item">
          <li>{programmer.name}</li>
        </ul>
      ))}
    </div>
  );
};

export default Cart;
