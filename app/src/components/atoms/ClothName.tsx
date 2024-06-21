import { Text } from "@chakra-ui/react";

type ClothNameProps = {
  name: string;
};

const ClothName: React.FC<ClothNameProps> = ({ name }) => {
  return (
    <Text mt={2} textAlign={"center"} pb={"0.3rem"}>
      {name}
    </Text>
  );
};

export default ClothName;
