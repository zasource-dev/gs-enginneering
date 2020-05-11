import React from "react";
import MyButton from "../Button";

const Card = (props) => (
  <div class="card bg-dark text-white">
    <img src="https://picsum.photos/400/400" class="card-img" alt="..." />
    <div class="card-img-overlay">
      <h6 class="card-title">Card title</h6>
      <p class="card-text">This content is a little bit longer.</p>
      <MyButton class="btn btn-primary">Go somewhere</MyButton>
    </div>
  </div>
);

export default Card;
