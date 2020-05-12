import React from "react";

import {
  Container,
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Table,
} from "reactstrap";

import Card from "../Card";
const ContactForm = () => (
  <Container class="section">
    <Row>
      <Col md={5}>
        <Card imgUrl="https://picsum.photos/500/500" />
      </Col>
      <Col md={{ size: 6, offset: 1 }}>
        <Form>
          <legend className="form-legend">
            Complete the form to get in touch
          </legend>
          <FormGroup>
            <Label for="name">Your Name</Label>
            <Input type="text" name="name" id="name" />
          </FormGroup>
          <FormGroup>
            <Label for="email">Email Address</Label>
            <Input type="email" name="email" id="email" />
          </FormGroup>
          <FormGroup>
            <Label for="phoneNumber">Phone number</Label>
            <Input type="tel" name="phoneNumber" id="phoneNumber" />
          </FormGroup>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="startDate">Start Date</Label>
                <Input type="date" name="startDate" id="exampleEmail" />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="endDate">End Date</Label>
                <Input type="date" name="endDate" id="endDate" />
              </FormGroup>
            </Col>
          </Row>
          <span className="form-submit">
            <Button className="btn btn-primary ">Submit</Button>
          </span>
        </Form>
      </Col>
    </Row>
  </Container>
);

export default ContactForm;
