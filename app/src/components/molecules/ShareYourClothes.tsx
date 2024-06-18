import { Box, Text } from '@chakra-ui/react';
import React from 'react';

const ShareYourClothes = () => {
  return (
    <Box
      w={600}
      h={150}
      bgColor={'#EAF5F4'}
      borderRadius={30}
      mt={'0.5rem'}
      cursor={'pointer'}
    >
      <Box
        pt={'0.8rem'}
        pl={'3rem'}
      >
        <Text
          fontSize={40}
          fontWeight={'bold'}
        >
          Share your
        </Text>
        <Text
          fontSize={45}
          fontWeight={'bold'}
        >
          clothes
        </Text>
      </Box>
    </Box>
  );
};

export default ShareYourClothes;
