import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <div>
      <div class="containers">
        <div>
          <h4 style={{ textTransform: "uppercase" }}>
            Hire world's best & most affordable
          </h4>
          <h1>Programming in Bangladesh</h1>
          <p style={{ width: "400px" }}>
            We have organized a seminar with the top programmers of Bangladesh.
            Nice list of those who have participated in our seminar so far.
          </p>
          <h2>seminar budget $4000000</h2>
        </div>

        <div>
          <img
            src="https://preview.colorlib.com/theme/repair/img/xbanner-img.png.pagespeed.ic.XS9Hnga4Mj.webp"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
