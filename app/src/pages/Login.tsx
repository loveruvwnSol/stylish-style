import { Box, Text } from "@chakra-ui/react";
import { RegisterTitle } from "../components/atoms/RegisterTitle";
import { Logo } from "../components/molecules/Logo";
import { RegisterLink } from "../components/molecules/RegisterLink";
import { LoginForm } from "../components/organisms/LoginForm";

export const Login = () => {
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
          <RegisterTitle title="Welcome Back!" />
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
            Login
          </Text>
          <LoginForm />
          <RegisterLink path="createAccount" text="New user?" />
        </Box>
      </Box>
    </Box>
  );
};
