import { Box } from "@chakra-ui/react";
import Header from "../molecules/Header";
import Footer from "../organisms/Footer";
import MyFavoriteClothes from "../organisms/MyFavoriteClothes";

const Dashboard = () => {
  return (
    <Box w={1080} h={700} pl={"4rem"} pr={"4rem"}>
      <Header />
      <MyFavoriteClothes />
      <Footer />
    </Box>
  );
};

export default Dashboard;
