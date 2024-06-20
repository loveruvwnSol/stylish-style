import ClothesName from '../molecules/ClothesName';
import { Box } from '@chakra-ui/react';

const MyFavoriteClothes = () => {
  return (
    <Box mt={10}>
      <ClothesName
        text={'My favorite'}
        w={'155px'}
        h={'155px'}
        isShow={true}
      />
    </Box>
  );
};

export default MyFavoriteClothes;
