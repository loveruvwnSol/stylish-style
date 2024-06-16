import { Text } from '@chakra-ui/react';
import React from 'react';

type TitleProps = {
  text: string;
};

const Title: React.FC<TitleProps> = ({ text }) => {
  return (
    <Text
      fontSize={56}
      fontWeight={'bold'}
      mt={'2rem'}
    >
      {text}
    </Text>
  );
};

export default Title;
