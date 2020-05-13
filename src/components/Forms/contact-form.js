import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import moment from "moment";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormFeedback,
  Alert,
} from "reactstrap";

import Card from "../Card";

const ContactFormSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(100, "Too Long!")
    .required("Name is a required field"),
  email: Yup.string()
    .email("Invalid email")
    .required("email is a required field"),
  phoneNumber: Yup.string()
    .min(10, "Phone number is too Short!")
    .required("Phone number is a required field"),
  startDate: Yup.date()
    .min(moment().format(), "Start Date must start from tommorrow")
    .max(Yup.ref("endDate"), "Start date must be less than End Date")
    .required("Start Date is required"),
  endDate: Yup.date()
    .min(moment().format(), "Start Date must start from tommorrow")
    .min(Yup.ref("startDate"), "End Date must be greater Start Date")
    .required("End Date is required"),
});

const ContactForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phoneNumber: "",
      startDate: "",
      endDate: "",
    },
    validationSchema: ContactFormSchema,

    onSubmit: (values) => {
      handleSubmit(values);
    },
  });

  const validateField = ({ errors, touched }, field) =>
    errors[field] && touched[field];

  const validateDates = (startDate, endDate) => {
    console.log(endDate);
    let error;
    if (new Date(startDate) > new Date(endDate)) {
      error = "End Date must be greater than Start Date";
    }
    return error;
  };

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
          <Form method="POST" onSubmit={formik.handleSubmit}>
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
                invalid={validateField(formik, "name")}
                valid={formik.touched.name}
              />
              {validateField(formik, "name") ? (
                <FormFeedback invalid={validateField(formik, "name")}>
                  {formik.errors.name}
                </FormFeedback>
              ) : null}
            </FormGroup>
            <FormGroup>
              <Label for="email">Email Address</Label>
              <Input
                type="email"
                name="email"
                id="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                invalid={validateField(formik, "email")}
                valid={formik.touched.email}
              />
              {validateField(formik, "email") ? (
                <FormFeedback invalid={validateField(formik, "email")}>
                  {formik.errors.email}
                </FormFeedback>
              ) : null}
            </FormGroup>
            <FormGroup>
              <Label for="phoneNumber">Phone number</Label>
              <Input
                type="tel"
                name="phoneNumber"
                id="phoneNumber"
                onChange={formik.handleChange}
                value={formik.values.phoneNumber}
                invalid={validateField(formik, "phoneNumber")}
                valid={formik.touched.phoneNumber}
              />
              {validateField(formik, "phoneNumber") ? (
                <FormFeedback invalid={validateField(formik, "phoneNumber")}>
                  {formik.errors.phoneNumber}
                </FormFeedback>
              ) : null}
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
                    invalid={validateField(formik, "startDate")}
                    valid={formik.touched.startDate}
                  />
                  {validateField(formik, "startDate") ? (
                    <FormFeedback invalid={validateField(formik, "startDate")}>
                      {formik.errors.startDate}
                    </FormFeedback>
                  ) : null}
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="endDate">End Date</Label>
                  <Input
                    type="date"
                    name="endDate"
                    id="endDate"
                    onChange={formik.handleChange}
                    value={formik.values.endDate}
                    invalid={validateField(formik, "endDate")}
                    valid={formik.touched.endDate}
                  />
                  {validateField(formik, "endDate") ? (
                    <FormFeedback invalid={validateField(formik, "endDate")}>
                      {formik.errors.endDate}
                    </FormFeedback>
                  ) : null}
                </FormGroup>
              </Col>
            </Row>
            <span className="form-submit">
              <Button className="btn btn-primary ">Submit</Button>
            </span>
          </Form>
          <pre>{JSON.stringify(formik, null, 4)}</pre>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactForm;
