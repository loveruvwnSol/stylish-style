import { Text } from '@chakra-ui/react';

type ModalTextProps = {
  text: string;
};

const ModalText: React.FC<ModalTextProps> = ({ text }) => {
  return (
    <Text
      fontSize={40}
      fontWeight={'semibold'}
    >
      {text}
    </Text>
  );
};

export default ModalText;
