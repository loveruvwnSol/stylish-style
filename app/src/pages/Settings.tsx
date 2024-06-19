import { Box } from "@chakra-ui/react";
import Sidebar from "../components/organisms/Sidebar";
import { SettingsBoard } from "../components/templates/SettingsBoard";
import { useUserSettings } from "../hooks/useUserSettings";

type SettingsProps = {
  bg: string;
};

export const Settings: React.FC<SettingsProps> = ({ bg }) => {
  return (
    <Box
      width={"100%"}
      height={"100vh"}
      backgroundColor={bg}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Box
        width={1330}
        height={700}
        backgroundColor={"#FFFFFF"}
        borderRadius={50}
        display={"flex"}
      >
        <Sidebar />
        <SettingsBoard />
      </Box>
    </Box>
  );
};
