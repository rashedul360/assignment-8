import React, { useEffect, useState } from "react";
// import components
import Cart from "../Cart/Cart";
import Programmer from "../Programmer/Programmer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Programers = () => {
  // use state
  const [programmers, setProgrammers] = useState([]);
  const [cart, setCart] = useState([]);
  // load fake data form public
  useEffect(() => {
    fetch("Programmers.JSON")
      .then((res) => res.json())
      .then((data) => setProgrammers(data));
  }, []);
  // button event handeler
  const addToSeminar = (programmer) => {
    if (cart.indexOf(programmer) === -1) {
      let newCart = [...cart, programmer];
      setCart(newCart);
    } else {
      toast.error("already addedd, please try to click another");
    }
  };

  return (
    <>
      <div>
        <ToastContainer position="top-center" autoClose={4000} />
      </div>
      <div className="container d-flex justify-content-between">
        {/* Same as */}
        <div className="programmers">
          {/* call Programmer component  */}
          {programmers.map((programmer) => (
            <Programmer
              // delevery some API data
              key={programmer.key}
              addToSeminar={addToSeminar}
              programmer={programmer}
            ></Programmer>
          ))}
        </div>
        <div className="cart-container">
          {/* call Cart component  */}
          <Cart cart={cart}></Cart>
        </div>
      </div>
    </>
  );
};
// export component
export default Programers;
