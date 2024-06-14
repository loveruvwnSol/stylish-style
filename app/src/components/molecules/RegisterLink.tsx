import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

type RegisterLinkProps = {
  path: String;
  text: String;
};

export const RegisterLink: React.FC<RegisterLinkProps> = ({ path, text }) => {
  return (
    <Box display={"flex"} mt={5}>
      <Text opacity={0.5}>{text}</Text>
      <Link to={"/" + path}>
        <Text ml={3} textDecoration={"underline"} color={"#36B8FD"}>
          {path}
        </Text>
      </Link>
    </Box>
  );
};
