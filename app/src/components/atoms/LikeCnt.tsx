import { Text } from '@chakra-ui/react';
import React from 'react';

type LikeCntProps = {
  cnt: String;
};

const LikeCnt: React.FC<LikeCntProps> = ({ cnt }) => {
  return <Text textColor={'gray'}>{cnt}</Text>;
};

export default LikeCnt;
