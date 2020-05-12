import React from "react";
import MyButton from "../Button";

const Card = ({ type, title, text, specialText, buttonText, imgUrl }) => (
  <div className="card bg-dark text-white">
    <img src={imgUrl} className="card-img img-fluid" alt="..." />
    <div className="card-img-overlay">
      <h6 className="card-title">{title}</h6>
      <p className="card-text">
        {text}
        <span className={`text-${type}`}>{specialText}</span>
      </p>
      <MyButton className={`btn btn-${type}`}>{buttonText}</MyButton>
    </div>
  </div>
);

export default Card;
