import { Box } from '@chakra-ui/react';
import Header from '../molecules/Header';
import Myfavorite from '../molecules/ClothesName';
import Footer from '../organisms/Footer';

const Dashboard = () => {
  return (
    <Box
      w={1080}
      h={700}
      pl={'4rem'}
      pr={'4rem'}
    >
      <Header />
      <Myfavorite
        text={'My favorite'}
        w={'160px'}
        h={'208px'}
        isShow={true}
      />
      <Footer />
    </Box>
  );
};

export default Dashboard;
