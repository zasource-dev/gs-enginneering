import React from "react";
import { Container, Row } from "reactstrap";

const Section = (props) => (
  <section className="section-container">
    <Container>
      <Row>{props.children}</Row>
    </Container>
  </section>
);

export default Section;
