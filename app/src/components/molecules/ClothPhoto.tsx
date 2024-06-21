import { AspectRatio, Box, Icon, Image } from "@chakra-ui/react";
import ClothName from "../atoms/ClothName";
import { LuPencil } from "react-icons/lu";

type ClothPhotoProps = {
  w: string;
  h: string;
  clothes: any;
  image: string;
};

const ClothPhoto: React.FC<ClothPhotoProps> = ({ w, h, clothes, image }) => {
  return (
    <Box
      w={w}
      h={h}
      border={"solid 1px"}
      borderRadius={20}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      position={"relative"}
    >
      <AspectRatio
        mt={5}
        ml={6}
        border={"1px solid"}
        borderColor={"gray"}
        borderRadius={"20%"}
        maxW="110px"
        ratio={1}
      >
        <Image src={image} borderRadius={"20%"} />
      </AspectRatio>
      <ClothName name={clothes.name} />
      <Box
        w={"30px"}
        h={"30px"}
        position={"absolute"}
        top={0.5}
        right={0.5}
        _hover={{
          bgColor: "gray.200",
          borderRadius: "50px",
        }}
      >
        <Icon
          as={LuPencil}
          position={"absolute"}
          top={1}
          right={1}
          cursor={"pointer"}
          boxSize={5}
        />
      </Box>
    </Box>
  );
};

export default ClothPhoto;
