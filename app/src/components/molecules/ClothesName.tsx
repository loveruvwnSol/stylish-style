// MyClothes.tsx
import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { IoIosStar } from "react-icons/io";
import ClothList from "./ClothList";
import { useClothes } from "../../hooks/useClothes";

type ClothesNameProps = {
  isShow: boolean;
  text: string;
  w: string;
  h: string;
};

const ClothesName: React.FC<ClothesNameProps> = ({ isShow, text, w, h }) => {
  const [{ clothes, favClothes }] = useClothes();
  return (
    <Box>
      {isShow ? (
        <>
          <Box display={"flex"} position={"relative"}>
            <Box position={"absolute"} top={-2} left={-3.5}>
              <IoIosStar
                size={22}
                color={"#FFF500"}
                stroke={"#000"}
                strokeWidth={"35px"}
              />
            </Box>
            <Text fontSize={28} fontWeight={"semibold"} pl={2}>
              {text}
            </Text>
          </Box>
          <ClothList clothes={favClothes} w={w} h={h} isShowLink={false} />
        </>
      ) : (
        <>
          <Box display={"flex"}>
            <Text fontSize={28} fontWeight={"semibold"} pl={2}>
              {text}
            </Text>
          </Box>
          <ClothList clothes={clothes} w={w} h={h} isShowLink={false} />
        </>
      )}
    </Box>
  );
};

export default ClothesName;
