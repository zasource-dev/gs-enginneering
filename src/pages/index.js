import React from "react";
import styled from "styled-components";

import Layout from "../global/Layout";
import Button from "../components/Button";

const Page = styled.div`
  width: 100%;
  height: 100vh;
  padding: 20px;
`;
const IndexPage = () => (
  <Layout>
    <Page>
      <h1>Hello This is a header</h1>
      <Button> View All Markets</Button>
    </Page>
  </Layout>
);

export default IndexPage;
