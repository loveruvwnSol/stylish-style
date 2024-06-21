import {
  Box,
  Icon,
  Input,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import React, { Dispatch, SetStateAction, useRef } from "react";
import { BiUpload } from "react-icons/bi";

type UploadImageModalProps = {
  file: any;
  isUploaded: boolean;
  setIsUploaded: Dispatch<SetStateAction<boolean>>;
  handleChangeFile: (newFile: any) => void;
};

export const UploadImageModal: React.FC<UploadImageModalProps> = ({
  file,
  isUploaded,
  setIsUploaded,
  handleChangeFile,
}) => {
  const fileInputRef = useRef<any>(null);

  const handleIconClick = () => {
    fileInputRef.current.click();
  };
  return (
    <>
      <ModalOverlay />
      <ModalContent
        maxWidth={"860px"}
        width={"100%"}
        pt={60}
        pb={60}
        borderRadius={20}
      >
        <ModalCloseButton mt={"8px"} mr={"10px"} />
        <ModalBody
          _hover={{ opacity: 0.5 }}
          cursor={"pointer"}
          onClick={() => handleIconClick()}
        >
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            gap={5}
            height={"100%"}
          >
            <Icon boxSize={12} as={BiUpload} />
            <Text textAlign={"center"} fontSize={44} fontWeight={"semibold"}>
              Upload your file
            </Text>
          </Box>
          <Text textAlign={"center"} opacity={0.5}>
            stylish cloth photo
          </Text>
          <Input
            type="file"
            ref={fileInputRef}
            display={"none"}
            onChange={(e) => {
              if (e.currentTarget.files !== null) {
                handleChangeFile(e.currentTarget.files[0]);
                setIsUploaded(!isUploaded);
              }
            }}
          />
        </ModalBody>
      </ModalContent>
    </>
  );
};
