import { Text } from '@chakra-ui/react';
import React from 'react';

type PostDayProps = {
  day: string;
};

const PostDay: React.FC<PostDayProps> = ({ day }) => {
  return <Text color={'gray'}>{day}</Text>;
};

export default PostDay;
