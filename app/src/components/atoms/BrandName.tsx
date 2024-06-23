import { Text } from '@chakra-ui/react';
import React from 'react';

type BrandNameProps = {
  name: string;
};

const BrandName: React.FC<BrandNameProps> = ({ name }) => {
  return (
    <Text
      fontSize={16}
      color={'gray'}
    >
      {name}
    </Text>
  );
};

export default BrandName;
