import { Box, Text } from "@chakra-ui/react";
import ClothPhoto from "./ClothPhoto";
import ViewMoreLink from "./ViewMoreLink";
import { supabase } from "../../libs/supabaseClient";

type ClothListProps = {
  clothes: any[];
  w: string;
  h: string;
  isShowLink: boolean;
};

const ClothList: React.FC<ClothListProps> = ({ clothes, w, h, isShowLink }) => {
  const clothList = clothes.slice(0, 5).map((e, idx) => {
    const { data } = supabase.storage
      .from("clothes")
      .getPublicUrl(e.user_id + "/" + e.id + "_image");
    return (
      <Box key={idx}>
        <ClothPhoto w={w} h={h} clothes={e} image={data.publicUrl} />
      </Box>
    );
  });
  return (
    <>
      <Box mt={6} display={"flex"} justifyContent={"left"} gap={10}>
        {clothes.length ? (
          <>{clothList}</>
        ) : (
          <Text textAlign={"center"} fontWeight={"semibold"} fontSize={24} m={16}>
            Not added yet
          </Text>
        )}
      </Box>
      {isShowLink ? <ViewMoreLink /> : null}
    </>
  );
};

export default ClothList;
