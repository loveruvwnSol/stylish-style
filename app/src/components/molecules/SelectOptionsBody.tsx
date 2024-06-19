import { Box, Checkbox, ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import SelectStyleColor from './SelectStyleColor';

const SelectOptionsBody: React.FC = () => {
  return (
    <>
      <Box>
        <Checkbox>Only your favorite</Checkbox>
      </Box>
      <Box>
        <SelectStyleColor text={'Tops color'} />
      </Box>
      <Box>
        <SelectStyleColor text={'Bottoms color'} />
      </Box>
    </>
  );
};

export default SelectOptionsBody;
