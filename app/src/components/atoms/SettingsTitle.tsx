import { Text } from "@chakra-ui/react";

type SettingsTitleProps = {
  title: string;
};

export const SettingsTitle: React.FC<SettingsTitleProps> = ({ title }) => {
  return (
    <Text fontWeight={"semibold"} fontSize={32}>
      {title}
    </Text>
  );
};
