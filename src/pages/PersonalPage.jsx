import React from "react";
import Header from "../components/Header";
import PersonalForm from "../components/PersonalForm";
import { Container } from "@chakra-ui/react";
const PersonalPage = () => {
  return (
    <Container maxW="full" p="0px" m="0px" display={"flex"}>
      <Header />
      <PersonalForm />
    </Container>
  );
};

export default PersonalPage;
