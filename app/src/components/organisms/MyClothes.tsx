import React from 'react';
import Myfavorite from '../molecules/Myfavorite';
import { Box } from '@chakra-ui/react';

const MyClothes = () => {
  return (
    <Box mt={10}>
      <Myfavorite
        text={'My Clothes'}
        w={'155px'}
        h={'155px'}
        isShow={false}
      />
    </Box>
  );
};

export default MyClothes;
