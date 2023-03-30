import {
  Button,
  Container,
  FormLabel,
  Heading,
  RadioGroup,
  Stack,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import RadioBtn from "./RadioBtn";
import { useDispatch } from "react-redux";
import { registerUserApi } from "../store/userReducer/user.actions";
import InputComp from "./InputComp";
import { useNavigate } from "react-router-dom";

const PersonalForm = () => {
  const [form, setForm] = useState({});
  const [value, setValue] = useState(null);
  const toast = useToast();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^\d{10}$/;
  const onChangeHandler = (e) => {
    let { name, value } = e.target;
    let paylaod = {
      ...form,
      [name]: value,
    };
    setForm(paylaod);
  };
  const onNextHandler = () => {
    if (
      form.name &&
      emailRegex.test(form.email) &&
      form.gender &&
      phoneRegex.test(form.phone)
    ) {
      dispatch(registerUserApi(form)).then(() => {
        navigate("/job");
      });
      console.log(form);
    } else {
      toast({
        title: "Incomplete Information or invalid data!",
        description: "All fields are required",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
    }
  };
  const onValueChange = (e) => {
    console.log(e);
    setValue(e);
    let payload = { ...form, gender: e };
    setForm(payload);
  };

  return (
    <Container maxW="50%" px="100px">
      <Heading my="20px">Personal Information</Heading>
      <InputComp
        placeholder="Name"
        name="name"
        type="text"
        value={form.name}
        isInvalid={form.name === ""}
        onChange={onChangeHandler}
      />
      <InputComp
        placeholder="Email"
        name="email"
        type="email"
        value={form.email}
        isInvalid={!emailRegex.test(form.email)}
        onChange={onChangeHandler}
      />

      <InputComp
        placeholder="Phone No."
        name="phone"
        type="tel"
        value={form.phone}
        isInvalid={!phoneRegex.test(form.phone)}
        onChange={onChangeHandler}
      />
      <FormLabel>Select Gender</FormLabel>
      <RadioGroup
        onChange={onValueChange}
        value={value}
        required
        colorScheme="green"
      >
        <Stack direction={"row"}>
          <RadioBtn value={"Male"} />
          <RadioBtn value={"Female"} />
        </Stack>
      </RadioGroup>
      <Button
        onClick={onNextHandler}
        colorScheme="green"
        size="lg"
        px="50px"
        w="150px"
        my="20px"
      >
        Next
      </Button>
    </Container>
  );
};

export default PersonalForm;
