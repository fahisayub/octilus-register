import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";
import PeoplesImg from "../assets/peoples.jpg";
import Footer from "./Footer";
const Header = () => {
  return (
    <Box
      h="100vh"
      bgPos={"center"}
      bgRepeat={"no-repeat"}
      bgClip={"border-box"}
      color={"white"}
      bgSize={"cover"}
      bgImage={`url(${PeoplesImg})`}
      w="50%"
    >
      <Box bg="black" w="full" h="100%" opacity={"0.7"} m="auto">
        <Box textAlign={"left"} m="auto" p="100px">
          <Heading py="50px" size={"2xl"}>
            Let's Join with us!
          </Heading>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum enim
            dolorum doloremque illo culpa molestias accusantium, asperiores
            exercitationem.
          </Text>
        </Box>
        <Footer />
      </Box>
    </Box>
  );
};

export default Header;
