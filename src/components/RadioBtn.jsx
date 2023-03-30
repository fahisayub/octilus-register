import { Box, Radio } from "@chakra-ui/react";
import React from "react";

const RadioBtn = ({ value }) => {
  return (
    <Box border={"1px solid lightgray"} borderRadius={"10px"} w="130px">
      <Radio
        sx={{
          padding: ".6rem",
          width: "20px",
          height: "20px",
          borderRadius: "5px",
        }}
        value={`${value}`}
        m="20px"
      >
        {value}
      </Radio>
    </Box>
  );
};

export default RadioBtn;
