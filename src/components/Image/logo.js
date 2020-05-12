import React from "react";
import fullLogo from "../../assets/logos/full-g-s-logo.png";
import navTopLogo from "../../assets/logos/dra-logo.png";

export const Logo = (props) => (
  <img src={fullLogo} className="img-fluid mr-5" alt="GS Engineering Logo" />
);

export const NavTopLogo = (props) => (
  <img src={navTopLogo} className="img-fluid" alt="DRA Logo" />
);
