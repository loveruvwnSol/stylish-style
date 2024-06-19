import { Box, Radio, RadioGroup, Stack, Text } from "@chakra-ui/react";
import { supabase } from "../../libs/supabaseClient";

type SelectThemeProps = {
  color: string;
  updateUserColor: (id: string | undefined, color: string) => void;
};

export const SelectTheme: React.FC<SelectThemeProps> = ({
  color,
  updateUserColor,
}) => {
  return (
    <Box mt={5} display={"flex"} alignItems={"center"} gap={16}>
      <Text fontWeight={"semibold"} fontSize={18}>
        Theme
      </Text>
      <RadioGroup defaultValue={color}>
        <Stack direction="row">
          <Radio
            value="#E8A286"
            onChange={async (e: any) => {
              const { data: currentUser } = await supabase.auth.getUser();
              updateUserColor(currentUser.user?.id, e.target.value);
            }}
          >
            orange
          </Radio>
          <Radio
            value="#8EDEF8"
            onChange={async (e: any) => {
              const { data: currentUser } = await supabase.auth.getUser();
              updateUserColor(currentUser.user?.id, e.target.value);
            }}
          >
            skyblue
          </Radio>
          <Radio
            value="#EEE19F"
            onChange={async (e: any) => {
              const { data: currentUser } = await supabase.auth.getUser();
              updateUserColor(currentUser.user?.id, e.target.value);
            }}
          >
            yellow
          </Radio>
        </Stack>
      </RadioGroup>
    </Box>
  );
};
