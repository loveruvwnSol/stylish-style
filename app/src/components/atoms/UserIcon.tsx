import { AspectRatio, Box, Image } from "@chakra-ui/react";
import { useUserIcon } from "../../hooks/useUser";

const UserIcon = () => {
  const [{ userIcon }] = useUserIcon();
  return (
    <Box
      border={"solid 1px lightgray"}
      borderRadius={"50%"}
      w={100}
      h={100}
      m={"0 auto"}
    >
      <AspectRatio maxW="500px" ratio={1}>
        <Image borderRadius={"50%"} src={userIcon} />
      </AspectRatio>
    </Box>
  );
};

export default UserIcon;
