import { Box, Modal, useDisclosure } from "@chakra-ui/react";
import HeaderTitle from "../atoms/HeaderTitle";
import SubmitBtn from "../molecules/SubmitBtn";
import Post from "../molecules/Post";
import { PostModal } from "../organisms/PostModal";
import { usePosts } from "../../hooks/usePosts";
import { supabase } from "../../libs/supabaseClient";

const ShareBoard = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [{ posts }] = usePosts();

  return (
    <>
      <Box
        w={1080}
        h={700}
        pl={"4rem"}
        pr={"4rem"}
        position={"relative"}
        overflowY={"scroll"}
      >
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"end"}
          pb={"0.5rem"}
        >
          <HeaderTitle text={"Share"} />
        </Box>
        <Box>
          {posts.map((e, idx) => {
            const { data: user_icon } = supabase.storage
              .from("user_icons")
              .getPublicUrl(e.user_id + "/icon");
            const { data: post_image } = supabase.storage
              .from("posts")
              .getPublicUrl(e.id + "/image");
            const { data: a } = supabase.storage
              .from("posts")
              .getPublicUrl(e.id + "/image");
            return (
              <Post
                data={e}
                key={idx}
                user_icon={user_icon.publicUrl}
                post_image={post_image.publicUrl}
              />
            );
          })}
        </Box>
        <Box position={"fixed"} bottom={"10%"} right={"6%"} onClick={onOpen}>
          <SubmitBtn text="Post" />
        </Box>
      </Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <PostModal onClose={onClose} isOpen={isOpen} />
      </Modal>
    </>
  );
};

export default ShareBoard;
