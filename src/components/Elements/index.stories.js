import React from "react";
import { storiesOf } from "@storybook/react";

import Service from "./service";

storiesOf("Elements/Services", module).add("Default", () => (
  <Service name="Industrial" icon="" />
));
