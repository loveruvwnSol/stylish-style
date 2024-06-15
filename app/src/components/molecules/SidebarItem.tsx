import { Box, Icon, Text } from "@chakra-ui/react";
import { IconType } from "react-icons";
import React from "react";
import { NavLink } from "react-router-dom";

type SideBarItemProps = {
  path: string;
  SidebarIcon: IconType;
  Title: string;
};

const SideBarItem: React.FC<SideBarItemProps> = ({
  path,
  Title,
  SidebarIcon,
}) => {
  return (
    <NavLink
      to={path}
      end
      style={({ isActive }) => {
        return isActive ? { fontWeight: "bold" } : {};
      }}
    >
      <Box
        display={"flex"}
        alignItems={"center"}
        mb={10}
        _hover={{ opacity: 0.5 }}
        cursor={"pointer"}
      >
        <Icon as={SidebarIcon} mr={2}></Icon>
        <Text fontSize={16}>{Title}</Text>
      </Box>
    </NavLink>
  );
};

export default SideBarItem;
