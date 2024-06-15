import { Text } from "@chakra-ui/react";
import React from "react";

type UserNameProps = {
  username: string;
};

const UserName: React.FC<UserNameProps> = ({ username }) => {
  return (
    <Text fontSize={20} fontWeight={"bold"} mt={6} mb={10}>
      {username}
    </Text>
  );
};

export default UserName;
