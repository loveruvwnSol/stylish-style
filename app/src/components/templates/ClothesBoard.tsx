import { Box, useDisclosure } from "@chakra-ui/react";
import HeaderTitle from "../atoms/HeaderTitle";
import MyFavoriteClothes from "../organisms/MyFavoriteClothes";
import MyClothes from "../organisms/MyClothes";
import SubmitBtn from "../molecules/SubmitBtn";
import { AddClothModal } from "../organisms/AddClothModal";

const ClothesBoard = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box w={1080} h={700} pl={"4rem"} pr={"4rem"}>
      <Box display={"flex"} justifyContent={"space-between"} alignItems={"end"}>
        <HeaderTitle text={"Clothes"} />
        <Box onClick={onOpen}>
          <SubmitBtn text={"Add Clothes"} />
        </Box>
      </Box>
      <Box mt={"28px"}>
        <MyFavoriteClothes />
      </Box>
      <MyClothes />
      <AddClothModal isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};

export default ClothesBoard;
