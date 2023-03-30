import React from "react";
import Header from "../components/Header";
import { Container } from "@chakra-ui/react";
import JobForm from "../components/JobForm";

const JobPositionPage = () => {
  return (
    <Container maxW="full" p="0px" m="0px" display={"flex"}>
      <Header />
      <JobForm />
    </Container>
  );
};

export default JobPositionPage;
