// MyClothes.tsx
import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import { IoIosStar } from 'react-icons/io';
import Clothes from './Clothes'; // Clothesコンポーネントのパスを正しく設定してください

type MyClothesProps = {
  isShow: boolean;
  text: string;
  w: string;
  h: string;
};

const MyClothes: React.FC<MyClothesProps> = ({ isShow, text, w, h }) => {
  return (
    <Box>
      {isShow ? (
        <>
          <Box
            display={'flex'}
            position={'relative'}
          >
            <Box
              position={'absolute'}
              top={-2}
              left={-3.5}
            >
              <IoIosStar
                size={22}
                color={'#FFF500'}
                stroke={'#000'}
                strokeWidth={'35px'}
              />
            </Box>
            <Text
              fontSize={28}
              fontWeight={'semibold'}
              pl={2}
            >
              {text}
            </Text>
          </Box>
          <Clothes
            w={w}
            h={h}
            isShowLink={false}
          />
        </>
      ) : (
        <>
          <Box display={'flex'}>
            <Text
              fontSize={28}
              fontWeight={'semibold'}
              pl={2}
            >
              {text}
            </Text>
          </Box>
          <Clothes
            w={w}
            h={h}
            isShowLink={false}
          />
        </>
      )}
    </Box>
  );
};

export default MyClothes;
