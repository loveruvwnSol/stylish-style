import { Box } from '@chakra-ui/react';
import Title from '../atoms/HeaderTitle';
import AddYourClothes from './AddYourClothes';

const Header = () => {
  return (
    <Box
      display={'flex'}
      justifyContent={'space-between'}
    >
      <Title text={'Dashboard'} />
      <AddYourClothes />
    </Box>
  );
};

export default Header;
