import React from "react";
import styled from "styled-components";

import Layout from "../global/Layout";
import Button from "../components/Button";
import SiteNavbar from "../components/Nav/site-navbar";
import AboutSection from "../containers/About";

const Page = styled.div`
  width: 100%;
  height: 100vh;
`;
const IndexPage = () => (
  <Layout>
    <Page>
      <SiteNavbar />
      <AboutSection />
    </Page>
  </Layout>
);

export default IndexPage;
