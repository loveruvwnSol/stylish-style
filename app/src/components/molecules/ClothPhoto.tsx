import { Box } from '@chakra-ui/react';
import ClothName from '../atoms/ClothName';

const ClothPhoto = () => {
  return (
    <Box
      w={'8rem'}
      h={'8rem'}
      border={'solid 1px'}
      borderRadius={30}
      mr={10}
      display={'flex'}
      justifyContent={'center'}
      alignItems={'end'}
    >
      <ClothName />
    </Box>
  );
};

export default ClothPhoto;
