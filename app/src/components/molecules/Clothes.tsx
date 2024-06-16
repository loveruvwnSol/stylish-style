import { Box, Text } from '@chakra-ui/react';
import ClothFhoto from '../atoms/ClothFhoto';

const Clothes = () => {
  return (
    <>
      <Box
        mt={10}
        display={'flex'}
      >
        <ClothFhoto />
        <ClothFhoto />
        <ClothFhoto />
        <ClothFhoto />
        <ClothFhoto />
        <Box
          display={'flex'}
          alignItems={'end'}
        >
          <Text
            pl={'1.5rem'}
            pb={'0.4rem'}
            color={'#36B8FD'}
            textDecoration={'underline'}
            cursor={'pointer'}
          >
            view more
          </Text>
        </Box>
      </Box>
    </>
  );
};

export default Clothes;
