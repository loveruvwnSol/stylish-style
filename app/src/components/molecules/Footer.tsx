import { Box, useDisclosure } from '@chakra-ui/react';
import ShareYourClothes from './ShareYourClothes';
import SubmitBtn from './SubmitBtn';
import DecideStyleModal from './DecideStyleModal';
import React from 'react';

const Footer: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        display='flex'
        alignItems='end'
        justifyContent='space-between'
      >
        <ShareYourClothes />
        <Box onClick={onOpen}>
          <SubmitBtn text='Decide style' />
        </Box>
      </Box>
      <DecideStyleModal
        isOpen={isOpen}
        onClose={onClose}
      />
    </>
  );
};

export default Footer;
