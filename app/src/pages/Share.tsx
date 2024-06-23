import { Box } from '@chakra-ui/react';
import Sidebar from '../components/organisms/Sidebar';
import ShareYourClothes from '../components/molecules/ShareYourClothes';
import ShareBoard from '../components/templates/ShareBoard';

type ShareProps = {
  bg: string;
};

const Share: React.FC<ShareProps> = ({ bg }) => {
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
        <ShareBoard />
      </Box>
    </Box>
  );
};

export default Share;
