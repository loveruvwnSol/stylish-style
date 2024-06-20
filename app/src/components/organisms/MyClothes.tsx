import ClothesName from '../molecules/ClothesName';
import { Box } from '@chakra-ui/react';

const MyClothes = () => {
  return (
    <Box mt={10}>
      <ClothesName
        text={'My Clothes'}
        w={'155px'}
        h={'155px'}
        isShow={false}
      />
    </Box>
  );
};

export default MyClothes;
