import React from "react";
import { storiesOf } from "@storybook/react";

import Card from ".";

storiesOf("Cards/Card", module)
  .add("Default", () => (
    <Card
      type="primary"
      title="Services"
      text="Our services cover the entire project life cycle"
      specialText="Get to know"
      buttonText="Read More"
      imgUrl="https://picsum.photos/400/400"
    />
  ))
  .add("Primary", () => (
    <Card
      type="primary"
      title="Services"
      text="Our services cover the entire project life cycle"
      specialText="Get to know"
      buttonText="Read More"
      imgUrl="https://picsum.photos/400/400"
    />
  ))
  .add("Success", () => (
    <Card
      type="success"
      title="Services"
      text="Our services cover the entire project life cycle"
      specialText="Get to know"
      buttonText="Read More"
      imgUrl="https://picsum.photos/400/400"
    />
  ))
  .add("Warning", () => (
    <Card
      type="warning"
      title="Services"
      text="Our services cover the entire project life cycle"
      specialText="Get to know"
      buttonText="Read More"
      imgUrl="https://picsum.photos/400/400"
    />
  ));
