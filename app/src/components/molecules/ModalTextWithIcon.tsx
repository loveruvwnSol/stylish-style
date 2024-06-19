import { Box, Icon } from '@chakra-ui/react';
import { BsStars } from 'react-icons/bs';
import ModalText from '../atoms/ModalText';

const ModalTextWithIcon = () => {
  return (
    <Box>
      <Box position='relative'>
        <ModalText text="Today's" />
        <ModalText text='Stylish Style!' />
        <Icon
          as={BsStars}
          boxSize={5}
          color='yellow.300'
          position='absolute'
          left={-5}
          top={-4}
        />
        <Icon
          as={BsStars}
          boxSize={5}
          color='yellow.300'
          position='absolute'
          left={'100%'}
          top={'100%'}
        />
        <Box
          position='absolute'
          left={-5}
          top={-4}
        ></Box>
      </Box>
    </Box>
  );
};

export default ModalTextWithIcon;
