import { Box } from '@chakra-ui/react';
import Sidbar from '../components/organisms/Sidbar';

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
      >
        <Sidbar />
      </Box>
    </Box>
  );
};
