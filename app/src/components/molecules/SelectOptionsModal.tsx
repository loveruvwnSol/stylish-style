import React from 'react';
import {
  Box,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import SelectOptionsBody from './SelectOptionsBody';
import SubmitBtn from './SubmitBtn';

type SelectOptionsModalProps = {
  setIsDecide: React.Dispatch<React.SetStateAction<boolean>>;
};

const SelectOptionsModal: React.FC<SelectOptionsModalProps> = ({ setIsDecide }) => {
  const clickHandler = () => {
    setIsDecide(true);
  };

  return (
    <>
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
              <SelectOptionsBody />
            </ModalBody>
          </Box>
        </Box>
        <ModalFooter>
          <Box
            mb={'8px'}
            mr={'3px'}
            onClick={clickHandler}
          >
            <SubmitBtn text={'Decide style'} />
          </Box>
        </ModalFooter>
      </ModalContent>
    </>
  );
};

export default SelectOptionsModal;
