import React from "react";

const MyButton = (props) => (
  <a className="btn" {...props}>
    {props.text || "Hello World"}
  </a>
);

export default MyButton;
