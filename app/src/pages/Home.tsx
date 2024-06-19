import { Box } from "@chakra-ui/react";
import Sidebar from "../components/organisms/Sidebar";
import Dashboard from "../components/templates/Dashboard";

type HomeProps = {
  bg: string;
};

export const Home: React.FC<HomeProps> = ({ bg }) => {
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
        <Dashboard />
      </Box>
    </Box>
  );
};
