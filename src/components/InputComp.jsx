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
        value={value}
        onChange={onChange}
        size={"lg"}
      />
      {value === "" && (
        <FormErrorMessage>{placeholder} is required.</FormErrorMessage>
      )}
    </FormControl>
  );
};

export default InputComp;
