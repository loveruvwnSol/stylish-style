import { Box, Button } from '@chakra-ui/react';
import React from 'react';

type SubmitBtnProps = {
  text: string;
};

const SubmitBtn: React.FC<SubmitBtnProps> = ({ text }) => {
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
        bg={'none'}
        _hover={{ bg: 'transparent' }}
        border={'none'}
      >
        {text}
      </Button>
    </Box>
  );
};

export default SubmitBtn;
