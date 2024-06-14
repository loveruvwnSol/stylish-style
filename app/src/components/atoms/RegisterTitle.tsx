import React from "react";
import { Text } from "@chakra-ui/react";

type RegisterTitleProps = {
  title: String;
};

export const RegisterTitle: React.FC<RegisterTitleProps> = ({ title }) => {
  return (
    <Text ml={55} fontSize={110} fontWeight={"bold"} color={"#1F1F1F"}>
      {title}
    </Text>
  );
};
