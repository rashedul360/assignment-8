import React from "react";
import "./Programmer.css";
const Programmer = (props) => {
  // console.log(props.programmer);
  const { img, job, joined, language, income, name, salaryScale } =
    props.programmer;
  return (
    <div>
      {/* <div class="card-group"> */}
      <div class="card programmer-container">
        <div style={{ textAlign: "center" }} className="mt-3 ">
          <img src={img} class="card-img-top" alt="..." />
        </div>
        <div class="card-body">
          <div className="text-center intro">
            <h5 class="card-title text-center">{name}</h5>
            <i class="fab fa-facebook"></i>
            <i class="fab fa-twitter"></i>
          </div>
          <p class="card-text"></p>
          <p class="card-text">
            <small class="text-muted">joined {joined}</small>
          </p>
          <h5>job : {job}</h5>
          <h5>language : {language}</h5>
          <h6>Income : ${income}</h6>
          <h5>selery scale: ${salaryScale}</h5>

          <div className="button-container">
            <button
              onClick={() => props.addToSeminar(props.programmer)}
              className="btn btn-warning fas fa-user-plus"
            >
              add to seminar{" "}
            </button>
          </div>
        </div>
      </div>
      {/* </div> */}
      {/* <div class="card" style={{ width: "18rem" }}>
        <div class="card-body">
          <h5 class="card-title">Special title treatment</h5>
          <p class="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
        </div>
      </div> */}
    </div>
  );
};

export default Programmer;
