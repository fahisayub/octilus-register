import {
  Button,
  Container,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  RadioGroup,
  Stack,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import RadioBtn from "./RadioBtn";
import { useDispatch } from "react-redux";
import { registerUserApi } from "../store/userReducer/user.actions";
import InputComp from "./InputComp";

const PersonalForm = () => {
  const [form, setForm] = useState({});
  const [value, setValue] = useState(null);
  const toast = useToast();
  const dispatch = useDispatch();
  const onChangeHandler = (e) => {
    let { name, value } = e.target;
    let paylaod = {
      ...form,
      [name]: value,
    };
    setForm(paylaod);
  };
  const onNextHandler = () => {
    if (form.name && form.email && form.gender && form.phone.length === 10) {
      dispatch(registerUserApi(form));
      console.log(form);
    } else {
      toast({
        title: "Incomplete Information!",
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
    <Container>
      <Heading>Personal Information</Heading>
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
        type="text"
        value={form.email}
        isInvalid={form.email === ""}
        onChange={onChangeHandler}
      />

      <InputComp
        placeholder="Phone No."
        name="phone"
        type="number"
        value={form.phone}
        isInvalid={form?.phone?.length !== 10}
        onChange={onChangeHandler}
      />
      <FormLabel>Select Gender</FormLabel>
      <RadioGroup onChange={onValueChange} value={value} required>
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
        m="20px"
      >
        Next
      </Button>
    </Container>
  );
};

export default PersonalForm;
