import { Modal, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { UploadImageModal } from "../molecules/UploadImageModal";
import { ClothSettingModal } from "../molecules/ClothSettingModal";

type AddClothModal = {
  isOpen: boolean;
  onClose: () => void;
};

export const AddClothModal: React.FC<AddClothModal> = ({ isOpen, onClose }) => {
  const [isUploaded, setIsUploaded] = useState(false);
  const [file, setFile] = useState<any>();
  const [preview, setPreview] = useState<string>("");

  const handleChangeFile = (newFile: any) => {
    setFile(newFile);
  };

  useEffect(() => {
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  }, [file]);

  return (
    <Modal isCentered isOpen={isOpen} onClose={onClose}>
      <Text>Modal</Text>
      {isUploaded ? (
        <ClothSettingModal
          file={file}
          preview={preview}
          onClose={onClose}
          isUploaded={isUploaded}
          setIsUploaded={setIsUploaded}
        />
      ) : (
        <UploadImageModal
          file={file}
          isUploaded={isUploaded}
          setIsUploaded={setIsUploaded}
          handleChangeFile={handleChangeFile}
        />
      )}
    </Modal>
  );
};
