import { Box, Switch, Text } from "@chakra-ui/react";
import { supabase } from "../../libs/supabaseClient";

type ToggleDarkModeProps = {
  toggleDarkMode: (id: string | undefined, darkmode: boolean) => void;
  darkmode: boolean;
};

export const ToggleDarkMode: React.FC<ToggleDarkModeProps> = ({
  toggleDarkMode,
  darkmode,
}) => {
  return (
    <Box mt={8} display={"flex"} alignItems={"center"} gap={7}>
      <Text fontWeight={"semibold"} fontSize={18}>
        Dark mode
      </Text>
      <Switch
        size="lg"
        isChecked={darkmode}
        onChange={async () => {
          const { data: currentUser } = await supabase.auth.getUser();
          toggleDarkMode(currentUser.user?.id, !darkmode);
        }}
      />
    </Box>
  );
};
