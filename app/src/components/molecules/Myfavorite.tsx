import { Box, Text } from '@chakra-ui/react';
import Clothes from './Clothes';
import { IoIosStar } from 'react-icons/io';

const Myfavorite = () => {
  return (
    <>
      <Box display={'flex'}>
        <IoIosStar
          size={30}
          color={'#FFF500'}
          stroke={'#000'}
          strokeWidth={'35px'}
        />
        <Text
          fontSize={28}
          fontWeight={'semibold'}
          pl={2}
        >
          My favorite
        </Text>
      </Box>
      <Clothes />
    </>
  );
};

export default Myfavorite;
