import { Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { useState } from "react";
import { useRegister } from "../../hooks/useRegister";

export const CreateAccountForm = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [{ createAccount }] = useRegister();

  return (
    <FormControl mt={16}>
      <FormLabel opacity={0.5} mt={10}>
        Email
      </FormLabel>
      <Input
        type="email"
        id="email"
        placeholder="example@email.com"
        height={16}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <FormLabel opacity={0.5} mt={10}>
        Password
      </FormLabel>
      <Input
        type="password"
        id="password"
        placeholder="Enter your password"
        height={16}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button
        mt={10}
        background={"#36B8FD"}
        border={"1px"}
        color={"white"}
        width={"100%"}
        height={16}
        _hover={{ opacity: 0.7 }}
        onClick={() => createAccount(email, password)}
      >
        Create Account
      </Button>
    </FormControl>
  );
};
