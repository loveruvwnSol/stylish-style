import { Box } from '@chakra-ui/react';
import ClothName from '../atoms/ClothName';

const ClothPhoto = () => {
  return (
    <Box
      w={'160px'}
      h={'208px'}
      border={'solid 1px'}
      borderRadius={20}
      // mr={10}

      display={'flex'}
      justifyContent={'center'}
      alignItems={'end'}
    >
      <ClothName />
    </Box>
  );
};

export default ClothPhoto;
