import { Text } from '@chakra-ui/react';
import React from 'react';

type PostTextProps = {
  text: string;
};

const PostText: React.FC<PostTextProps> = ({ text }) => {
  return <Text lineHeight={1.2}>{text}</Text>;
};

export default PostText;
