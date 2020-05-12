import React from "react";
import styled from "styled-components";

import Layout from "../global/Layout";
import Section from "../containers/section";
import SiteNavbar from "../components/Nav/site-navbar";
import AboutSection from "../containers/About";
import ServicesSection from "../containers/Services";
import ContactForm from "../components/Forms/contact-form";

const Page = styled.div`
  width: 100%;
  height: 100vh;
`;
const IndexPage = () => (
  <Layout>
    <Page>
      <SiteNavbar />
      <AboutSection />
      <ServicesSection />
      <Section>
        <ContactForm />
      </Section>
    </Page>
  </Layout>
);

export default IndexPage;
