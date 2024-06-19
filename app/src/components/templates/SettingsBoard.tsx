import { Box } from "@chakra-ui/react";
import HeaderTitle from "../atoms/HeaderTitle";
import { UserSettings } from "../organisms/UserSettings";
import { ColorSettings } from "../organisms/ColorSettings";

export const SettingsBoard = () => {
  return (
    <Box w={1080} h={700} pl={"4rem"} pr={"4rem"}>
      <HeaderTitle text={"Settings"} />
      <UserSettings />
      <ColorSettings />
    </Box>
  );
};
