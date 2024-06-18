import { Box, Button, Text } from '@chakra-ui/react';
import React from 'react';

type ButtonCompProps = {
  text: string;
};

const ButtonComp: React.FC<ButtonCompProps> = ({ text }) => {
  return (
    <Box
      w={'180px'}
      h={'48px'}
      bgColor={'#36B8FD'}
      borderRadius={50}
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
      cursor={'pointer'}
    >
      <Button
        color={'#FFF'}
        fontWeight={'bold'}
        bg={'transparent'}
        _hover={{ bg: 'transparent' }}
        border={'none'}
      >
        {text}
      </Button>
    </Box>
  );
};

export default ButtonComp;
