import React from "react";
import { storiesOf } from "@storybook/react";

import AboutSection from "./About";
import ServicesSection from "./Services";

storiesOf("Sections", module)
  .add("About", () => <AboutSection />)
  .add("Services", () => <ServicesSection />);
