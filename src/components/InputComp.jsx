import { FormControl, FormErrorMessage, Input } from "@chakra-ui/react";
import React from "react";

const InputComp = ({ value, type, name, placeholder, isInvalid, onChange }) => {
  return (
    <FormControl isRequired isInvalid={isInvalid} my="30px">
      <Input
        placeholder={placeholder}
        name={name}
        type={type}
        required
        onChange={onChange}
        size={"lg"}
      />
      {value === "" &&
        (type === "number" ? (
          <FormErrorMessage>
            {placeholder} should have 10 digits
          </FormErrorMessage>
        ) : (
          <FormErrorMessage>{placeholder} is required.</FormErrorMessage>
        ))}
    </FormControl>
  );
};

export default InputComp;
