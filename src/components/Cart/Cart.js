import React from "react";

const Cart = (props) => {
  // console.log(props);
  const { cart } = props;

  let total = 0;
  for (let programmer of cart) {
    total += programmer.income;
  }
  console.log(cart.length);
  return (
    <div>
      <h4>added {cart.length}</h4>
      <h4>total : {total}</h4>
    </div>
  );
};

export default Cart;
