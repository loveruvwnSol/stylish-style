import {
  Box,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
} from "@chakra-ui/react";
import ModalPhoto from "../atoms/ModalPhoto";
import ModalTextWithIcon from "./ModalTextWithIcon";
import { Dispatch, SetStateAction } from "react";

type TodaysStyleModalProps = {
  top: number | undefined;
  bottom: number | undefined;
  isDecide: boolean;
  setIsDecide: Dispatch<SetStateAction<boolean>>;
};

const TodaysStyleModal: React.FC<TodaysStyleModalProps> = ({
  top,
  bottom,
  isDecide,
  setIsDecide,
}) => {
  return (
    <>
      <ModalOverlay />
      <ModalContent maxWidth={"860px"} width={"90%"} borderRadius={20}>
        <Box ml={"60px"}>
          <Box>
            <Box>
              <ModalCloseButton
                mt={"8px"}
                mr={"10px"}
                onClick={() => setIsDecide(!isDecide)}
              />
            </Box>
            <ModalBody>
              <Box
                display={"flex"}
                alignItems={"center"}
                justifyContent={"space-around"}
              >
                <ModalTextWithIcon />
                <Box>
                  <ModalPhoto id={top} />
                  <ModalPhoto id={bottom} />
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
