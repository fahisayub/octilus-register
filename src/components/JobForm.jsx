import {
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  Heading,
  Link,
  Radio,
  RadioGroup,
  Stack,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link as NavLink, useNavigate } from "react-router-dom";
import { updateUserApi } from "../store/userReducer/user.actions";
const JobForm = () => {
  const [isAccept, setAccept] = useState(false);
  const [position, setPos] = useState("Frondend Developer");
  const { userId } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useToast();
  const onChangeValueHandler = (e) => {
    setPos(e);
  };
  const onSubmitHandler = () => {
    if (isAccept) {
      console.log(position);
      let payload = {
        id: userId,
        job_title: position,
      };
      console.log(payload);
      dispatch(updateUserApi(payload));
      navigate("/success");
    } else {
      toast({
        title: "Please Accept T&C!",
        description: "You need to accept T&C to submit",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
    }
  };

  return (
    <Container px="100px" py="50px" maxW={"50%"} border={"1px solid black"}>
      <Button
        mb="20px"
        p="0px"
        textAlign={"left"}
        variant={"ghost"}
        color="gray"
        to="/"
        as={NavLink}
      >
        {" "}
        <FaArrowLeft />
        PREVIOUS STEP
      </Button>
      <Heading>Select Job Position</Heading>
      <Divider my="50px" borderColor={"gray.400"} />
      <RadioGroup
        defaultValue={position}
        onChange={onChangeValueHandler}
        colorScheme="green"
      >
        <Stack textAlign={"left"} direction={"column"} spacing={"20px"}>
          <Radio value="Frondend Developer">Frondend Developer</Radio>
          <Radio value="Wordpress Developer">WordPress Developer</Radio>
          <Radio value="UI/UX Designer">UI/UX Designer</Radio>
          <Radio value="Support Engineer">Support Engineer</Radio>
          <Radio value="Graphic Designer">Graphic Designer</Radio>
        </Stack>
      </RadioGroup>
      <Checkbox
        mt="40px"
        mb="20px"
        size={"lg"}
        checked={isAccept}
        colorScheme="green"
        onChange={(e) => setAccept(e.target.checked)}
      >
        I Accept The{" "}
        <Link color="green.400" href="#">
          Terms Of Conditions
        </Link>{" "}
        And{" "}
        <Link color="green.400" href="#">
          Privacy Policy
        </Link>
      </Checkbox>
      <Box>
        <Button
          size={"lg"}
          w="150px"
          colorScheme="green"
          onClick={onSubmitHandler}
        >
          SUBMIT
        </Button>
      </Box>
    </Container>
  );
};

export default JobForm;
