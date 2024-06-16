import { Box } from '@chakra-ui/react';
import React from 'react';
import Title from '../atoms/Title';
import AddYourClothes from './AddYourClothes';

const Header = () => {
  return (
    <Box
      display={'flex'}
      justifyContent={'space-between'}
    >
      <Title text={'Dashbord'} />
      <AddYourClothes />
    </Box>
  );
};

export default Header;
