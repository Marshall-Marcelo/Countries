import React from "react";
import Input from "../components/Input";
import { PageWrapper, ContentWrapper } from "../layout/Wrapper";

const Home = () => {
  return (
    <>
      <PageWrapper>
        <ContentWrapper>
          <span>Home</span>
          <Input></Input>
        </ContentWrapper>
      </PageWrapper>
    </>
  );
};

export default Home;
