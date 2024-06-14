import { Box, Text } from "@chakra-ui/react";
import { RegisterTitle } from "../components/atoms/RegisterTitle";
import { Logo } from "../components/molecules/Logo";
import { CreateAccountForm } from "../components/organisms/CreateAccountForm";
import { RegisterLink } from "../components/molecules/RegisterLink";

export const CreateAccount = () => {

  return (
    <Box
      width={"100%"}
      height={"100vh"}
      display={"flex"}
      justifyContent={"space-between"}
    >
      <Box background={"#F2EAE0"} width={"45%"} height={"100%"}>
        <Logo />
        <Box
          height={"90%"}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <RegisterTitle title="Create Account" />
        </Box>
      </Box>
      <Box
        width={"55%"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box>
          <Text fontSize={36} fontWeight={"bold"}>
            Create Account
          </Text>
          <CreateAccountForm />
          <RegisterLink path="login" text="Already have an account?" />
        </Box>
      </Box>
    </Box>
  );
};
