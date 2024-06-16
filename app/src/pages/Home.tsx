import { Box } from '@chakra-ui/react';
import Sidebar from '../components/organisms/Sidebar';
import Dashboard from '../components/organisms/Dashboard';

export const Home = () => {
  return (
    <Box
      width={'100%'}
      height={'100vh'}
      backgroundColor={'#E8A286'}
      display={'flex'}
      alignItems={'center'}
      justifyContent={'center'}
    >
      <Box
        width={1330}
        height={700}
        backgroundColor={'#FFFFFF'}
        borderRadius={50}
        display={'flex'}
      >
        <Sidebar />
        <Dashboard />
      </Box>
    </Box>
  );
};
