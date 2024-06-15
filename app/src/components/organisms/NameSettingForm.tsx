import { Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { useState } from "react";
import { useRegister } from "../../hooks/useRegister";

export const NameSettingForm = () => {
  const [name, setName] = useState<string>();
  const [{ InsertUserTable }] = useRegister();

  return (
    <FormControl mt={16}>
      <FormLabel opacity={0.5} mt={10}>
        User name
      </FormLabel>
      <Input
        type="text"
        id="name"
        placeholder="Jason Susanto"
        height={16}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Button
        mt={10}
        background={"#36B8FD"}
        border={"1px"}
        color={"white"}
        width={"100%"}
        height={16}
        _hover={{ opacity: 0.7 }}
        onClick={() => {
          if (name) InsertUserTable(name);
        }}
      >
        Go to home page
      </Button>
    </FormControl>
  );
};
