import { Box, Icon, Text } from "@chakra-ui/react";
import { IconType } from "react-icons";

import React from "react";

type SideBarItemProps = {
  SidebarIcon: IconType;
  Title: string;
};

const SideBarItem: React.FC<SideBarItemProps> = ({ Title, SidebarIcon }) => {
  return (
    <>
      <Box
        display={"flex"}
        alignItems={"center"}
        mb={10}
        _hover={{ opacity: 0.5 }}
      >
        <Icon as={SidebarIcon} mr={2}></Icon>
        <Text fontSize={16}>{Title}</Text>
      </Box>
    </>
  );
};

export default SideBarItem;
