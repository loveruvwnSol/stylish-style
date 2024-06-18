import { Box, Checkbox, ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import theme from '../atoms/theme';
import DecideStyleSelect from './DecideStyleSelect';

const DecideStyleBody: React.FC = () => {
  return (
    <ChakraProvider theme={theme}>
      <Box>
        <Checkbox>Only your favorite</Checkbox>
      </Box>
      <Box>
        <DecideStyleSelect text={'Tops color'} />
      </Box>
      <Box>
        <DecideStyleSelect text={'Bottoms color'} />
      </Box>
    </ChakraProvider>
  );
};

export default DecideStyleBody;
