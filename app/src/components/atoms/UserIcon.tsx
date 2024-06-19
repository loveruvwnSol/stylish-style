import { AspectRatio, Box, Image } from "@chakra-ui/react";
import { useUserIcon } from "../../hooks/useUser";

type UserIconProps = {
  m: string;
  width: string;
};

const UserIcon: React.FC<UserIconProps> = ({ m, width }) => {
  const [{ userIcon }] = useUserIcon();
  return (
    <Box
      border={"solid 1px lightgray"}
      borderRadius={"50%"}
      w={width}
      h={width}
      m={m}
    >
      <AspectRatio width={width} maxW="500px" ratio={1}>
        <Image borderRadius={"50%"} src={userIcon} />
      </AspectRatio>
    </Box>
  );
};

export default UserIcon;
