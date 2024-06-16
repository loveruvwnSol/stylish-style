import { Box, Text } from '@chakra-ui/react';

const AddYourClothes = () => {
  return (
    <Box
      bgColor={'#F2EBE1'}
      w={430}
      h={150}
      mt={10}
      borderRadius={'30'}
      cursor={'pointer'}
    >
      <Box
        pl={12}
        pt={5}
      >
        <Text
          fontSize={40}
          fontWeight={'bold'}
          mb={-2}
        >
          Add your
        </Text>
        <Text
          fontSize={40}
          fontWeight={'bold'}
        >
          clothes
        </Text>
      </Box>
    </Box>
  );
};

export default AddYourClothes;
