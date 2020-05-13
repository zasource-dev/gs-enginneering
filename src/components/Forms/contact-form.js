import React, { useState } from "react";
import { useFormik } from "formik";

import {
  Container,
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

import Card from "../Card";
const ContactForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phoneNumber: "",
      startDate: "",
      endDate: "",
    },
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });

  const handleSubmit = (values) => {
    fetch("http://localhost:3000/data", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    })
      .then((res) => {
        alert("Success!");
        console.log(res.data);
      })
      .catch((error) => console.log(error));

    e.preventDefault();
  };
  return (
    <Container>
      <Row>
        <Col md={5}>
          <Card imgUrl="https://picsum.photos/200/200" />
        </Col>
        <Col md={{ size: 6, offset: 1 }}>
          <Form name="contact" method="POST" onSubmit={formik.handleSubmit}>
            <legend className="form-legend">
              Complete the form to get in touch
            </legend>
            <FormGroup>
              <Label for="name">Your Name</Label>
              <Input
                type="text"
                name="name"
                id="name"
                onChange={formik.handleChange}
                value={formik.values.name}
              />
            </FormGroup>
            <FormGroup>
              <Label for="email">Email Address</Label>
              <Input
                type="email"
                name="email"
                id="email"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
            </FormGroup>
            <FormGroup>
              <Label for="phoneNumber">Phone number</Label>
              <Input
                type="tel"
                name="phoneNumber"
                id="phoneNumber"
                onChange={formik.handleChange}
                value={formik.values.phoneNumber}
              />
            </FormGroup>
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Label for="startDate">Start Date</Label>
                  <Input
                    type="date"
                    name="startDate"
                    id="startDate"
                    onChange={formik.handleChange}
                    value={formik.values.startDate}
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="endDate">End Date</Label>
                  <Input
                    type="date"
                    name="endDate"
                    id="endDate"
                    type="date"
                    name="endDate"
                    id="endDate"
                    onChange={formik.handleChange}
                    value={formik.values.endDate}
                  />
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
};

export default ContactForm;
