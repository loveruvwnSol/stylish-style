import { Box } from '@chakra-ui/react';
import ClothPhoto from './ClothPhoto';
import ViewMoreLink from './ViewMoreLink';

const Clothes = () => {
  return (
    <>
      <Box
        mt={10}
        display={'flex'}
        justifyContent={'space-between'}
      >
        <ClothPhoto />
        <ClothPhoto />
        <ClothPhoto />
        <ClothPhoto />
        <ClothPhoto />
      </Box>
      <ViewMoreLink />
    </>
  );
};

export default Clothes;
