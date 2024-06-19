import { Box, Input } from "@chakra-ui/react";
import UserIcon from "../atoms/UserIcon";
import { useUserIcon } from "../../hooks/useUser";
import { useRef } from "react";
import { supabase } from "../../libs/supabaseClient";

export const EditUserIcon = () => {
  const [{ uploadUserIcon }] = useUserIcon();
  const fileInputRef = useRef<any>(null);

  const handleIconClick = () => {
    fileInputRef.current.click();
  };
  return (
    <Box w={"10%"} _hover={{ opacity: 0.5 }} onClick={() => handleIconClick()}>
      <UserIcon width={"150px"} m={"3"} />
      <Input
        type="file"
        ref={fileInputRef}
        display={"none"}
        onChange={async (e) => {
          if (e.currentTarget.files !== null) {
            const new_icon = e.currentTarget.files[0];
            if (new_icon) {
              const { data: currentUser } = await supabase.auth.getUser();
              await uploadUserIcon(currentUser.user?.id, new_icon);
              await window.location.reload();
            }
          }
        }}
      />
    </Box>
  );
};
