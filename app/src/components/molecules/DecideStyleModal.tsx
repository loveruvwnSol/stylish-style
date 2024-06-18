import {
  Box,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import React from 'react';
import SubmitBtn from './SubmitBtn';
import DecideStyleBody from './DecideStyleBody';

type DecideStyleModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const DecideStyleModal: React.FC<DecideStyleModalProps> = ({ isOpen, onClose }) => {
  return (
    <Modal
      isCentered
      isOpen={isOpen}
      onClose={onClose}
    >
      <ModalOverlay />
      <ModalContent
        maxWidth={'860px'}
        width={'90%'}
        borderRadius={20}
      >
        <Box
          ml={'60px'}
          display={'flex'}
          justifyContent={'start'}
        >
          <Box>
            <ModalHeader
              fontSize={35}
              mt={'35px'}
              mb={'20px'}
            >
              Select Options
            </ModalHeader>
            <Box
              mt={'4px'}
              mr={'4px'}
            >
              <ModalCloseButton
                mt={'8px'}
                mr={'10px'}
              />
            </Box>
            <ModalBody>
              <DecideStyleBody />
            </ModalBody>
          </Box>
        </Box>
        <ModalFooter>
          <Box
            mb={'8px'}
            mr={'3px'}
          >
            <SubmitBtn text={'Decide style'} />
          </Box>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default DecideStyleModal;
