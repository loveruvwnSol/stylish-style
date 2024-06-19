import { useState } from "react";
import { useUser } from "../../hooks/useUser";
import { Box, Divider, Input, Text } from "@chakra-ui/react";
import { BiCheck, BiPencil } from "react-icons/bi";
import { IoIosClose } from "react-icons/io";
import { EditIconButton } from "../atoms/EditIconButton";
import { supabase } from "../../libs/supabaseClient";

export const EditUserName = () => {
  const [{ user, updateUsername }] = useUser();
  const [name, setName] = useState<string>("");
  const [isEdit, setIsEdit] = useState<boolean>(false);
  return (
    <>
      {isEdit ? (
        <Box display={"flex"} alignItems={"center"} gap={3}>
          <Input
            type="text"
            w={"30%"}
            placeholder={user?.name}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <EditIconButton
            bg="#36B8FD"
            ariaLabel="Edit username"
            icon={<BiCheck fill="#fff" size={20} />}
            onClick={async () => {
              if (name) {
                console.log(name);
                const { data: currentUser } = await supabase.auth.getUser();
                updateUsername(currentUser.user?.id, name);
                setIsEdit(!isEdit);
              }
            }}
          />
          <EditIconButton
            bg="#EDF2F7"
            ariaLabel="Edit username"
            icon={<IoIosClose size={24} />}
            onClick={() => setIsEdit(!isEdit)}
          />
        </Box>
      ) : (
        <Box w={"30%"}>
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Text fontWeight={"semibold"} fontSize={20}>
              {user?.name}
            </Text>
            <EditIconButton
              bg="#EDF2F7"
              ariaLabel="Edit username"
              icon={<BiPencil />}
              onClick={() => setIsEdit(!isEdit)}
            />
          </Box>
          <Divider opacity={1} mt={2} />
        </Box>
      )}
    </>
  );
};
