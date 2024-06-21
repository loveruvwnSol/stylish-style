import React from "react";
import {
  Box,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import SelectOptionsBody from "./SelectOptionsBody";
import SubmitBtn from "./SubmitBtn";
import { supabase } from "../../libs/supabaseClient";

type SelectOptionsModalProps = {
  isDecide: boolean;
  setIsDecide: React.Dispatch<React.SetStateAction<boolean>>;
  decideStyle: (user_id: string | undefined) => void;
};

const SelectOptionsModal: React.FC<SelectOptionsModalProps> = ({
  isDecide,
  setIsDecide,
  decideStyle,
}) => {
  const clickHandler = () => {
    setIsDecide(!isDecide);
  };

  return (
    <>
      <ModalOverlay />
      <ModalContent maxWidth={"860px"} width={"90%"} borderRadius={20}>
        <Box ml={"60px"} display={"flex"} justifyContent={"start"}>
          <Box>
            <ModalHeader fontSize={35} mt={"35px"} mb={"20px"}>
              Select Options
            </ModalHeader>
            <Box mt={"4px"} mr={"4px"}>
              <ModalCloseButton mt={"8px"} mr={"10px"} />
            </Box>
            <ModalBody>
              <SelectOptionsBody />
            </ModalBody>
          </Box>
        </Box>
        <ModalFooter>
          <Box
            mb={"8px"}
            mr={"3px"}
            onClick={async () => {
              const { data: currentUser } = await supabase.auth.getUser();
              clickHandler();
              decideStyle(currentUser.user?.id);
            }}
          >
            <SubmitBtn text={"Decide style"} />
          </Box>
        </ModalFooter>
      </ModalContent>
    </>
  );
};

export default SelectOptionsModal;
