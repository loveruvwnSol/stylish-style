import { Box, Icon } from '@chakra-ui/react';
import ClothName from '../atoms/ClothName';
import { LuPencil } from 'react-icons/lu';

type ClothPhotoProps = {
  w: string;
  h: string;
};

const ClothPhoto: React.FC<ClothPhotoProps> = ({ w, h }) => {
  return (
    <Box
      // w={'160px'}
      // h={'208px'}
      // w={'140px'}
      // h={'140px'}
      w={w}
      h={h}
      border={'solid 1px'}
      borderRadius={20}
      display={'flex'}
      justifyContent={'center'}
      alignItems={'end'}
      position={'relative'}
    >
      <ClothName />
      <Box
        w={'30px'}
        h={'30px'}
        position={'absolute'}
        top={0.5}
        right={0.5}
        _hover={{
          bgColor: 'gray.200',
          borderRadius: '50px',
        }}
      >
        <Icon
          as={LuPencil}
          position={'absolute'}
          top={1}
          right={1}
          cursor={'pointer'}
          boxSize={5}
        />
      </Box>
    </Box>
  );
};

export default ClothPhoto;
