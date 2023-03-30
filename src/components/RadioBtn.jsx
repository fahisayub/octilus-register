import { Box, Radio } from '@chakra-ui/react';
import React from 'react';

const RadioBtn = ({value}) => {
    return (
        <Box  border={'1px solid gray'} borderRadius={'10px'}w='130px' > 

        <Radio  value={`${value}`}  m='20px'  >{value}</Radio>
      </Box>
    );
};

export default RadioBtn;