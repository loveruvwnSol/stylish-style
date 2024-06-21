import { Box, Button, Text } from "@chakra-ui/react";
import { BiLogOut } from "react-icons/bi";
import { useRegister } from "../../hooks/useRegister";

const LogoutButton = () => {
  const [{ logout }] = useRegister();
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      fontSize={16}
      _hover={{ opacity: 0.5 }}
    >
      <Button
        p={0}
        background={"unset"}
        fontWeight={"normal"}
        onClick={() => logout()}
        _hover={{ opacity: 1 }}
      >
        <BiLogOut />
        <Text ml={2}>Logout</Text>
      </Button>
    </Box>
  );
};

export default LogoutButton;
