import { Box } from '@chakra-ui/react';
import ShareYourClothes from './ShareYourClothes';
import SubmitBtn from './SubmitBtn';

const Footer = () => {
  return (
    <Box
      display={'flex'}
      alignItems={'end'}
      justifyContent={'space-between'}
    >
      <ShareYourClothes />
      <SubmitBtn text='Decide style' />
    </Box>
  );
};

export default Footer;
