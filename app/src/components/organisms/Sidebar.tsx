import { Box } from "@chakra-ui/react";
import { Logo } from "../molecules/Logo";
import UserIcon from "../atoms/UserIcon";
import UserName from "../atoms/UserName";
import SideBarItem from "./SidebarItem";
import { FiHome } from "react-icons/fi";
import { TfiMenuAlt } from "react-icons/tfi";
import { RiShareForwardLine } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import LogoutButton from "../molecules/LogoutButton";
import { useUser } from "../../hooks/useUser";

const Sidebar = () => {
  const user = useUser();
  return (
    <Box
      width={250}
      height={700}
      backgroundColor={"#F2EAE0"}
      borderTopLeftRadius={50}
      borderBottomLeftRadius={50}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"space-between"}
      alignItems={"center"}
      padding={4}
    >
      <Box width="100%" textAlign="center">
        <Box mb={10} mt={8}>
          <Logo />
        </Box>
        <UserIcon />
        <UserName username={user?.name} />
      </Box>
      <Box
        flex={1}
        width="100%"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Box
          width="100%"
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Box>
            <SideBarItem SidebarIcon={FiHome} Title={"Dashboard"} />
            <SideBarItem SidebarIcon={TfiMenuAlt} Title={"Clothes"} />
            <SideBarItem SidebarIcon={RiShareForwardLine} Title={"Share"} />
            <SideBarItem SidebarIcon={IoSettingsOutline} Title={"Setting"} />
            <Box>
              <LogoutButton />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
