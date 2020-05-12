import React, { useState } from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  Container,
  NavItem,
  NavLink,
} from "reactstrap";

import { Logo, NavTopLogo } from "../Image/logo";

const NavLinkList = (props) => {
  const navLinksData = [
    {
      name: "Home",
      relativeLink: "#home",
    },
    {
      name: "About",
      relativeLink: "#about",
    },
    {
      name: "Markets",
      relativeLink: "#markets",
    },
    {
      name: "Services",
      relativeLink: "#services",
    },
    {
      name: "Projects",
      relativeLink: "#projects",
    },
  ];
  return navLinksData.map((nav, i) => (
    <NavItem key={i}>
      <NavLink className={i == 0 ? "active" : ""}>
        <Link to={nav.relativeLink}>{nav.name}</Link>
      </NavLink>
    </NavItem>
  ));
};
const SiteNavbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md" className="bg-transparent border">
        <Container className="my-3">
          <div className="nav-top">
            <NavTopLogo />
          </div>
          <NavbarBrand href="/">
            <Logo />
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavLinkList {...props} />
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

SiteNavbar.propTypes = {
  siteTitle: PropTypes.string,
};

SiteNavbar.defaultProps = {
  siteTitle: `G & S Engineering`,
};

export default SiteNavbar;
