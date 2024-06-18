import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const ViewMoreLink = () => {
  return (
    <Box
      display={'flex'}
      justifyContent={'end'}
    >
      <Link to={'clothes'}>
        <Text
          pl={'rem'}
          pt={'1rem'}
          color={'#36B8FD'}
          textDecoration={'underline'}
          cursor={'pointer'}
        >
          view more
        </Text>
      </Link>
    </Box>
  );
};

export default ViewMoreLink;
