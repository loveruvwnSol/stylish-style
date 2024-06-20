import { Box } from '@chakra-ui/react';
import ClothPhoto from './ClothPhoto';
import ViewMoreLink from './ViewMoreLink';

type ClothesProps = {
  w: string;
  h: string;
  isShowLink: boolean;
};

const Clothes: React.FC<ClothesProps> = ({ w, h, isShowLink }) => {
  return (
    <>
      <Box
        mt={6}
        display={'flex'}
        justifyContent={'space-between'}
      >
        <ClothPhoto
          w={w}
          h={h}
        />
        <ClothPhoto
          w={w}
          h={h}
        />
        <ClothPhoto
          w={w}
          h={h}
        />
        <ClothPhoto
          w={w}
          h={h}
        />
        <ClothPhoto
          w={w}
          h={h}
        />
      </Box>
      {isShowLink ? <ViewMoreLink /> : null}
    </>
  );
};

export default Clothes;
