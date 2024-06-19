import { Box } from "@chakra-ui/react";
import { SettingsTitle } from "../atoms/SettingsTitle";
import { ToggleDarkMode } from "../molecules/ToggleDarkMode";
import { SelectTheme } from "../molecules/SelectTheme";
import { useUserSettings } from "../../hooks/useUserSettings";

export const ColorSettings = () => {
  const [{ userSetting, toggleDarkMode, updateUserColor }] = useUserSettings();

  return (
    <Box mt={8} ml={10}>
      <SettingsTitle title="Color" />
      <Box ml={5}>
        <ToggleDarkMode
          toggleDarkMode={toggleDarkMode}
          darkmode={userSetting?.darkmode}
        />
        <SelectTheme
          color={userSetting?.color}
          updateUserColor={updateUserColor}
        />
      </Box>
    </Box>
  );
};
