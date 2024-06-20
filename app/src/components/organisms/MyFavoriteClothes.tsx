import React from 'react';
import Myfavorite from '../molecules/Myfavorite';
import { Box } from '@chakra-ui/react';

const MyFavoriteClothes = () => {
  return (
    <Box mt={10}>
      <Myfavorite
        text={'My favorite'}
        w={'155px'}
        h={'155px'}
        isShow={true}
      />
    </Box>
  );
};

export default MyFavoriteClothes;
