import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Programmer from "../Programmer/Programmer";

const Programers = () => {
  const [programmers, setProgrammers] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("Programmers.JSON")
      .then((res) => res.json())
      .then((data) => setProgrammers(data));
  }, []);
  const addToSeminar = (programmer) => {
    if (cart.indexOf(programmer) === -1) {
      let newCart = [...cart, programmer];
      setCart(newCart);
    } else {
      alert("already added");
    }
  };

  return (
    <div className="container d-flex justify-content-between">
      <div className="programmers">
        {programmers.map((programmer) => (
          <Programmer
            key={programmer.key}
            addToSeminar={addToSeminar}
            programmer={programmer}
          ></Programmer>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Programers;
