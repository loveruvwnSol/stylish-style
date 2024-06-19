import { Modal } from '@chakra-ui/react';
import React, { useState } from 'react';
import TodaysStyleModal from '../molecules/TodaysStyleModal';
import SelectColorModal from '../molecules/SelectOptionsModal';

type DecideStyleModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const DecideStyleModal: React.FC<DecideStyleModalProps> = ({ isOpen, onClose }) => {
  const [isDecide, setIsDecide] = useState<boolean>(false);

  return (
    <Modal
      isCentered
      isOpen={isOpen}
      onClose={onClose}
    >
      {isDecide ? <TodaysStyleModal /> : <SelectColorModal setIsDecide={setIsDecide} />}
    </Modal>
  );
};

export default DecideStyleModal;
