import { Modal } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import TodaysStyleModal from "../molecules/TodaysStyleModal";
import SelectColorModal from "../molecules/SelectOptionsModal";
import { useClothes } from "../../hooks/useClothes";

type DecideStyleModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const DecideStyleModal: React.FC<DecideStyleModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [isDecide, setIsDecide] = useState<boolean>(false);
  const [{ top, bottom, decideStyle, getStyle }] = useClothes();

  useEffect(() => {
    getStyle();
  }, [top, bottom]);

  return (
    <Modal isCentered isOpen={isOpen} onClose={onClose}>
      {isDecide && top ? (
        <TodaysStyleModal
          top={top}
          bottom={bottom}
          isDecide={isDecide}
          setIsDecide={setIsDecide}
        />
      ) : (
        <SelectColorModal
          isDecide={isDecide}
          setIsDecide={setIsDecide}
          decideStyle={decideStyle}
        />
      )}
    </Modal>
  );
};

export default DecideStyleModal;
