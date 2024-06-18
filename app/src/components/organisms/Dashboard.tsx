import { Box } from '@chakra-ui/react';
import Header from '../molecules/Header';
import Myfavorite from '../molecules/Myfavorite';
import Footer from '../molecules/Footer';

const Dashboard = () => {
  return (
    <Box
      w={1080}
      h={700}
      pl={'4rem'}
      pr={'4rem'}
    >
      <Header />
      <Myfavorite />
      <Footer />
    </Box>
  );
};

export default Dashboard;