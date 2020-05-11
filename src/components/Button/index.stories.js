import React from "react";
import { storiesOf } from "@storybook/react";

import MyButton from ".";

storiesOf("Buttons/MyButton", module)
  .add("Default", () => <MyButton />)
  .add("Primary", () => <MyButton className="btn btn-primary" />)
  .add("Warning", () => <MyButton className="btn btn-warning" />)
  .add("Success", () => <MyButton className="btn btn-success" />);
