import {
  AspectRatio,
  Box,
  Checkbox,
  Image,
  Input,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Select,
} from "@chakra-ui/react";
import { Dispatch, SetStateAction, useState } from "react";
import SubmitBtn from "./SubmitBtn";
import { useClothes } from "../../hooks/useClothes";
import { supabase } from "../../libs/supabaseClient";

type ClothSettingModal = {
  onClose: () => void;
  isUploaded: boolean;
  setIsUploaded: Dispatch<SetStateAction<boolean>>;
  preview: string | undefined;
  file: any;
};

export const ClothSettingModal: React.FC<ClothSettingModal> = ({
  onClose,
  isUploaded,
  setIsUploaded,
  preview,
  file,
}) => {
  const [{ uploadClothes }] = useClothes();
  const [name, setName] = useState<string>("");
  const [type, setType] = useState<string>("");
  const [fav, setFav] = useState<boolean>(false);
  const [color, setColor] = useState<string>("");

  return (
    <>
      <ModalOverlay />
      <ModalContent
        maxWidth={"860px"}
        width={"100%"}
        pt={30}
        pb={30}
        borderRadius={20}
      >
        <ModalCloseButton
          mt={"8px"}
          mr={"10px"}
          onClick={() => {
            file = undefined;
            preview = "";
            setIsUploaded(!isUploaded);
          }}
        />
        <ModalBody
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-around"}
        >
          <AspectRatio w={360} h={550} maxW="400px" ratio={4 / 3}>
            <Image
              w={"100%"}
              height={"100%"}
              border={"1px solid"}
              borderRadius={50}
              src={preview}
            />
          </AspectRatio>
          <Box display={"flex"} flexDirection={"column"}>
            <Input
              placeholder="name"
              w={72}
              variant="flushed"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Select
              mt={10}
              variant="flushed"
              w={"100%"}
              value={type}
              onChange={(e) => setType(e.target.value)}
              opacity={type ? "1" : "0.5"}
            >
              <option value="" hidden>
                type
              </option>
              <option value={"tops"}>tops</option>
              <option value={"bottoms"}>bottoms</option>
            </Select>
            <Select
              mt={10}
              variant="flushed"
              w={72}
              value={color}
              onChange={(e) => setColor(e.target.value)}
              opacity={color ? "1" : "0.5"}
            >
              <option value="" hidden>
                color
              </option>
              <option value={"black"}>black</option>
              <option value={"blue"}>blue</option>
              <option value={"red"}>red</option>
              <option value={"yellow"}>yellow</option>
            </Select>
            <Checkbox onChange={() => setFav(!fav)} mt={10}>
              favorite
            </Checkbox>
          </Box>
        </ModalBody>
        <Box
          display={"flex"}
          justifyContent={"end"}
          mr={10}
          onClick={async () => {
            if (name && type && color) {
              const { data: currentUser } = await supabase.auth.getUser();
              onClose();
              setIsUploaded(!isUploaded);
              uploadClothes(currentUser.user?.id, name, type, fav, color, file);
            } else {
              alert("input any options");
            }
          }}
        >
          <SubmitBtn text="Add Clothes" />
        </Box>
      </ModalContent>
    </>
  );
};
