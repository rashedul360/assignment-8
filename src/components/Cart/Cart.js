import { useState } from "react";
// import css
import "./Cart.css";
const Cart = (props) => {
  const { cart } = props;
  // calculate sumation
  let total = 0;
  for (let programmer of cart) {
    total += programmer.income;
  }

  return (
    <div className="mt-5">
      {/* cart UI update start */}
      <h4 className="cart-programmers fas fa-user-check">
        Added <span style={{ color: "tomato" }}> {cart.length}</span>
      </h4>
      <h4>Total Cost : ${total}</h4>
      {cart.map((programmer) => (
        <ul key={programmer.key} className="list-item">
          <div className="cart-details-container">
            <img src={programmer.img} alt="" />
            <li>{programmer.name}</li>
          </div>
        </ul>
      ))}
      {/* cart UI update ends */}
    </div>
  );
};
// export component
export default Cart;
