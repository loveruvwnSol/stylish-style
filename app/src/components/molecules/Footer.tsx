import { Box } from '@chakra-ui/react';
import ShareYourClothes from './ShareYourClothes';
import ButtonComp from './ButtonComp';

const Footer = () => {
  return (
    <Box
      display={'flex'}
      alignItems={'end'}
      justifyContent={'space-between'}
    >
      <ShareYourClothes />
      <ButtonComp text='Decide style' />
    </Box>
  );
};

export default Footer;
