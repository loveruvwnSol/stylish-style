import React, { useState } from 'react';
import { Box, Modal, useDisclosure } from '@chakra-ui/react';
import HeaderTitle from '../atoms/HeaderTitle';
import SubmitBtn from '../molecules/SubmitBtn';
import Post from '../molecules/Post';
import { ClothSettingModal } from '../molecules/ClothSettingModal';
import { PostModal } from '../organisms/PostModal';
import { on } from 'events';
import { AddClothModal } from '../organisms/AddClothModal';

const ShareBoard = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isUploaded, setIsUploaded] = useState(false);
  const [file, setFile] = useState<any>();
  const [preview, setPreview] = useState<string>('');

  const handleChangeFile = (newFile: any) => {
    setFile(newFile);
  };

  return (
    <>
      <Box
        w={1080}
        h={700}
        pl={'4rem'}
        pr={'4rem'}
        position={'relative'}
        overflowY={'scroll'}
      >
        <Box
          display={'flex'}
          justifyContent={'space-between'}
          alignItems={'end'}
          pb={'0.5rem'}
        >
          <HeaderTitle text={'Share'} />
        </Box>
        <Box>
          <Post />
          <Post />
          <Post />
        </Box>
        <Box
          position={'fixed'}
          bottom={20}
          right={32}
          onClick={onOpen}
        >
          <SubmitBtn text='Post' />
        </Box>
      </Box>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
      >
        <PostModal
          onClose={onClose}
          isOpen={isOpen}
        />
      </Modal>
    </>
  );
};

export default ShareBoard;
