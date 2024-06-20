import { Box } from '@chakra-ui/react';
import Sidebar from '../components/organisms/Sidebar';
import ClothesBoard from '../components/templates/ClothesBoard';

type ClothesProps = {
  bg: string;
};

const Clothes: React.FC<ClothesProps> = ({ bg }) => {
  return (
    <Box
      width={'100%'}
      height={'100vh'}
      backgroundColor={bg}
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
        <ClothesBoard />
      </Box>
    </Box>
  );
};

export default Clothes;
