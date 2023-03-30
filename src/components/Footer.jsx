import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import {
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";
const Footer = () => {
  return (
    <Flex
      position={"fixed"}
      bottom={"0px"}
      p="30px"
      justifyContent={"space-between"}
      w="50%"
    >
      <Text>Copyright ©️ 2022 Octilus Technologies</Text>
      <Flex color={"white"} w="30%" justifyContent={"space-evenly"}>
        <FaFacebookF />
        <FaTwitter />
        <FaLinkedinIn />
        <FaInstagram />
      </Flex>
    </Flex>
  );
};

export default Footer;
