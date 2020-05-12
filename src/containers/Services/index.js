import React from "react";
import { Col } from "reactstrap";

import Section from "../section";
import Service from "../../components/Elements/service";
import MyButton from "../../components/Button";

const serviceList = [
  {
    name: "INDUSTRIAL",
    link: "#industrial",
  },
  {
    name: "WATER",
    link: "#water",
  },
  {
    name: "ENERGY",
    link: "#energy",
  },
  {
    name: "INFRASTRUCTURE",
    link: "#infracs",
  },
  {
    name: "METALS & MINERALS",
    link: "#minerals",
  },
];

const ServicesSection = () => (
  <Section className="section-container bg-grey p-5">
    <Col md={12}>
      <h1 className="section-title">Our Markets</h1>
    </Col>
    {serviceList.map(({ name }, i) => (
      <Col key={i}>
        <Service name={name} />
      </Col>
    ))}
    <Col md={12} className="text-center">
      <MyButton className="btn btn-primary" text="View All Indusries" />
    </Col>
  </Section>
);

export default ServicesSection;
