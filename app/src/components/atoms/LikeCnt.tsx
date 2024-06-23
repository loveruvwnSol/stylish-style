import { Text } from "@chakra-ui/react";
import React from "react";

type LikeCntProps = {
  cnt: number | undefined;
  color:string
};

const LikeCnt: React.FC<LikeCntProps> = ({ cnt ,color}) => {
  return <Text textColor={color}>{cnt}</Text>;
};

export default LikeCnt;
