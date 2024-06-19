import { Box, Text } from "@chakra-ui/react";
import { EditUserName } from "../molecules/EditUserName";
import { EditUserIcon } from "../molecules/EditUserIcon";
import { SettingsTitle } from "../atoms/SettingsTitle";

export const UserSettings = () => {
  return (
    <Box mt={6} ml={10}>
      <SettingsTitle title="Profile" />
      <Box ml={5}>
        <EditUserIcon />
        <Box mt={1}>
          <Text opacity={0.5}>User name</Text>
          <EditUserName />
        </Box>
      </Box>
    </Box>
  );
};
