import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Flex,
  Box,
  Heading,
  AspectRatio,
  Image,
} from "@chakra-ui/react";
import PostDay from "../atoms/PostDay";
import BrandName from "../atoms/BrandName";
import LikeBtn from "./LikeBtn";
import LikeCnt from "../atoms/LikeCnt";
import PostText from "../atoms/PostText";
import { useEffect, useState } from "react";
import { supabase } from "../../libs/supabaseClient";
import { usePosts } from "../../hooks/usePosts";
import { BiHeart, BiSolidHeart } from "react-icons/bi";

type PostProps = {
  data: any;
  user_icon: string;
  post_image: string;
};

const Post: React.FC<PostProps> = ({ data, user_icon, post_image }) => {
  const [{ toggleLike }] = usePosts();
  const [like, setLike] = useState<number>();
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [name, setName] = useState<string>();

  useEffect(() => {
    getLike();
    getUserName();
  }, [like, name]);

  const getLike = async () => {
    const { data: like, error } = await supabase
      .from("likes")
      .select()
      .eq("post_id", data.id);
    if (!error) setLike(like.length);
    const { data: isLiked } = await supabase
      .from("likes")
      .select()
      .eq("post_id", data.id)
      .eq("user_id", data.user_id)
    if (isLiked?.length) {
      setIsLiked(true);
    }
  };

  const getUserName = async () => {
    const { data: name, error } = await supabase
      .from("users")
      .select("name")
      .eq("id", data.user_id);
    if (!error) setName(name[0].name);
  };

  return (
    <Box display={"flex"} justifyContent={"center"} mt={5} mb={5}>
      <Card w={600}>
        <Box>
          <CardHeader>
            <Flex>
              <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                <Box
                  border={"solid 1px lightgray"}
                  borderRadius={"50%"}
                  w={"10"}
                  h={"10"}
                  m={0}
                >
                  <AspectRatio width={"10"} maxW="500px" ratio={1}>
                    <Image borderRadius={"50%"} src={user_icon} />
                  </AspectRatio>
                </Box>
                <Heading size="sm">{name}</Heading>
              </Flex>
              <PostDay day="2024/06/21" />
            </Flex>
          </CardHeader>
          <CardBody display={"flex"} justifyContent={"center"}>
            <Box
              border={"1px solid lightgray"}
              background={"#1F1F1F"}
              maxW={550}
              maxH={450}
              display={"flex"}
              justifyContent={"center"}
            >
              <AspectRatio width={550} maxW="550px" ratio={1}>
                <Image src={post_image} />
              </AspectRatio>
            </Box>
          </CardBody>
          <CardFooter flexWrap="wrap" pt={-20}>
            <Box display={"flex"} gap={8}>
              <Box display={"flex"} flexDirection={"column"}>
                <Box mb={4}>
                  <BrandName name={data.brand_name} />
                </Box>
                <Box
                  display={"flex"}
                  alignItems={"center"}
                  onClick={() => {
                    toggleLike(data.id, data.user_id);
                    console.log("push");
                  }}
                >
                  {isLiked ? (
                    <>
                      <LikeBtn icon={BiSolidHeart} fill="red" />
                      <LikeCnt cnt={like} color="red" />
                    </>
                  ) : (
                    <>
                      <LikeBtn icon={BiHeart} fill="gray" />
                      <LikeCnt cnt={like} color="gray" />
                    </>
                  )}
                </Box>
              </Box>
              <PostText text={data.text} />
            </Box>
          </CardFooter>
        </Box>
      </Card>
    </Box>
  );
};

export default Post;
