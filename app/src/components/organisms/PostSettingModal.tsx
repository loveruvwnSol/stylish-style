import {
  AspectRatio,
  Box,
  Image,
  Input,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Textarea,
} from "@chakra-ui/react";
import { Dispatch, SetStateAction, useState } from "react";
import { supabase } from "../../libs/supabaseClient";
import SubmitBtn from "../molecules/SubmitBtn";
import { usePosts } from "../../hooks/usePosts";

type PostSettingModal = {
  onClose: () => void;
  isUploaded: boolean;
  setIsUploaded: Dispatch<SetStateAction<boolean>>;
  preview: string | undefined;
  file: File;
};

export const PostSettingModal: React.FC<PostSettingModal> = ({
  onClose,
  isUploaded,
  setIsUploaded,
  preview,
  file,
}) => {
  const [{ uploadPost }] = usePosts();
  const [brandName, setBrandName] = useState<string>("");
  const [text, setText] = useState<string>("");

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
        <ModalCloseButton mt={"8px"} mr={"10px"} />
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
            <Box mb={"40px"}>
              <Input
                placeholder="brand name"
                w={72}
                variant="flushed"
                value={brandName}
                onChange={(e) => setBrandName(e.target.value)}
                required
              />
            </Box>
            <Box>
              <Textarea
                placeholder="text"
                w={72}
                value={text}
                onChange={(e) => setText(e.target.value)}
                height={64}
              ></Textarea>
            </Box>
          </Box>
        </ModalBody>
        <Box
          display={"flex"}
          justifyContent={"end"}
          mr={10}
          onClick={async () => {
            const { data: currentUser } = await supabase.auth.getUser();
            onClose();
            setIsUploaded(!isUploaded);
            uploadPost(currentUser.user?.id, brandName, text, file);
          }}
        >
          <SubmitBtn text="Post" />
        </Box>
      </ModalContent>
    </>
  );
};
