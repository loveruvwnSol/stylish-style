import { Box, ModalBody, ModalCloseButton, ModalContent, ModalOverlay } from '@chakra-ui/react';
import ModalPhoto from '../atoms/ModalPhoto';
import ModalTextWithIcon from './ModalTextWithIcon';

const TodaysStyleModal = () => {
  return (
    <>
      <ModalOverlay />
      <ModalContent
        maxWidth={'860px'}
        width={'90%'}
        borderRadius={20}
      >
        <Box ml={'60px'}>
          <Box>
            <Box>
              <ModalCloseButton
                mt={'8px'}
                mr={'10px'}
              />
            </Box>
            <ModalBody>
              <Box
                display={'flex'}
                alignItems={'center'}
                justifyContent={'space-around'}
              >
                <ModalTextWithIcon />
                <Box>
                  <ModalPhoto />
                  <ModalPhoto />
                </Box>
              </Box>
            </ModalBody>
          </Box>
        </Box>
      </ModalContent>
    </>
  );
};

export default TodaysStyleModal;
