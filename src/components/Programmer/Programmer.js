import React from "react";
import "./Programmer.css";
const Programmer = (props) => {
  const { img, job, joined, language, income, name, salaryScale } =
    props.programmer;
  return (
    <div>
      <div className="card programmer-container">
        <div style={{ textAlign: "center" }} className="mt-3 ">
          <img src={img} className="card-img-top" alt="..." />
        </div>
        <div className="card-body">
          <div className="text-center intro">
            <h5 className="card-title text-center">{name}</h5>
            <i className="fab fa-facebook"></i>
            <i className="fab fa-twitter"></i>
          </div>
          <p className="card-text"></p>
          <p className="card-text">
            <small className="text-muted">joined {joined}</small>
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
    </div>
  );
};

export default Programmer;
