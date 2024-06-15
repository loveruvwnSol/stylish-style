import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import { BiLogOut } from 'react-icons/bi';

const LogoutBotton = () => {
  return (
    <Box
      display={'flex'}
      alignItems={'center'}
      fontSize={16}
      pt={10}
      pb={6}
    >
      <BiLogOut />
      <Text ml={2}>Logout</Text>
    </Box>
  );
};

export default LogoutBotton;
