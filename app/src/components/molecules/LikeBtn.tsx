import { Box, Icon } from '@chakra-ui/react';
import { CiHeart } from 'react-icons/ci';
const LikeBtn = () => {
  return (
    <Box>
      <Icon
        as={CiHeart}
        boxSize={7}
        verticalAlign={'middle'}
      />
    </Box>
  );
};

export default LikeBtn;
