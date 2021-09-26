import React from "react";
// import css
import "./Header.css";
// import image
import img from "../../images/undraw_Real_time_sync_re_nky7 (1).svg";
const Header = () => {
  return (
    <div>
      {/* header container  */}
      <div className="containers">
        {/* left side container  */}
        <div>
          <h4 style={{ textTransform: "uppercase" }}>
            welcome to our special seminar
          </h4>
          <h1>Programming in Bangladesh</h1>
          <p style={{ width: "400px" }}>
            We have organized a seminar with the top programmers of Bangladesh.
            Nice list of those who have participated in our seminar so far.
          </p>
          {/* our total budget  */}
          <h2>seminar budget $4000000</h2>
        </div>

        <div className="header-img-container">
          {/* right side image  */}
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  );
};
// export component
export default Header;
