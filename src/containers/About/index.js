import React from "react";
import { Col } from "reactstrap";
import Section from "../section";

import Card from "../../components/Card";

const AboutSection = () => (
  <Section>
    <p className="text-center description m-5">
      From electrical and mechanical component overhauls for surface and
      underground equipment through to billion-dollar mine and port construction
      projects, G&S Engineering offer comprehensive services that encompass the
      project lifestyle from construction, through maintenance and optimization
      to final decommissioning and deconstruction.
    </p>

    <Col>
      <Card
        type="primary"
        title="Services"
        text="Our services cover the entire project life cycle"
        specialText="Get to know"
        buttonText="Read More"
        imgUrl="https://picsum.photos/400/400"
      />
    </Col>
    <Col>
      <Card
        type="primary"
        title="Services"
        text="Our services cover the entire project life cycle"
        specialText="Get to know"
        buttonText="Read More"
        imgUrl="https://picsum.photos/400/400"
      />
    </Col>
    <Col>
      <Card
        type="primary"
        title="Services"
        text="Our services cover the entire project life cycle"
        specialText="Get to know"
        buttonText="Read More"
        imgUrl="https://picsum.photos/400/400"
      />
    </Col>
  </Section>
);

export default AboutSection;
