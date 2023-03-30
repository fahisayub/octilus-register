import { Center, Container, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { BsCheckCircle } from "react-icons/bs";
const SuccessPage = () => {
  return (
    <Container maxW="full" textAlign={"center"} p="100px">
      <Center>
        <BsCheckCircle fontSize={"300px"} color="lightgreen" />
      </Center>
      <Heading my="10px">Application Submitted</Heading>
      <Text my="10px">Thank you for your interest</Text>
      <Text my="10px">
        Our review team will review your application and call you for interview
      </Text>
    </Container>
  );
};

export default SuccessPage;
