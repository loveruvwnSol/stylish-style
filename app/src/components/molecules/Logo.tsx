import { Box, Image, Text } from '@chakra-ui/react';
import StylishStyleIcon from '../../images/StylishStyleLogo.png';

export const Logo = () => {
  return (
    <Box
      display={'flex'}
      alignItems={'center'}
    >
      <Image
        src={StylishStyleIcon}
        boxSize='70px'
        objectFit='cover'
      />
      <Text
        fontWeight={'semibold'}
        fontSize={24}
      >
        Stylish Style
      </Text>
    </Box>
  );
};
