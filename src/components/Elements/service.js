import React from "react";
import Icon from "../../assets/icons/energy.png";

const Service = ({ name, icon }) => (
  <div className="service text-center">
    <a className="service-icon" href="">
      <img src={Icon} alt="" className="img-rounded img-fluid" />
    </a>
    <h5 className="service-title">
      <a href="#">{name}</a>
    </h5>
  </div>
);

export default Service;
