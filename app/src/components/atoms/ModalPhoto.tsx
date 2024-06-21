import { AspectRatio, Box, Image, Text } from "@chakra-ui/react";
import { supabase } from "../../libs/supabaseClient";
import { useEffect, useState } from "react";

type ModalPhotoProps = {
  id: number | undefined;
};

const ModalPhoto: React.FC<ModalPhotoProps> = ({ id }) => {
  const [image, setImage] = useState<string>();
  const getDecidedCloth = async () => {
    const { data: currentUser } = await supabase.auth.getUser();
    const { data } = supabase.storage
      .from("clothes")
      .getPublicUrl(currentUser.user?.id + "/" + id + "_image");
    setImage(data.publicUrl);
  };

  useEffect(() => {
    getDecidedCloth();
  }, [image]);

  return (
    <Box w={270} border={"1px solid"} borderRadius={30} m={10}>
      {image ? (
        <AspectRatio maxW="270px" ratio={1}>
          <Image borderRadius={30} src={image} />
        </AspectRatio>
      ) : (
        <Text
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          height={270}
        >
          Loading
        </Text>
      )}
    </Box>
  );
};

export default ModalPhoto;
