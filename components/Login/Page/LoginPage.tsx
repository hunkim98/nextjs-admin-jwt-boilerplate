import { Box, Button, Group, TextInput, Text } from "@mantine/core";
import { useForm } from "@mantine/form";
import { openContextModal } from "@mantine/modals";
import axios from "axios";
import React, { useContext, useState } from "react";
import { VerifiedUserResDto } from "../../../dto/User/user.res.dto";
import { AuthContext } from "../../AuthProvider/AuthProvider";

interface Props {}

const LoginPage: React.FC<Props> = () => {
  const { onLogin, onTokenReceived, onTokenFailure } = useContext(AuthContext);

  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });

  const onClickLogin = (email: string, password: string) => {
    onLogin({ email, password })
      .then((response) => {
        onTokenReceived(response);
        return response;
      })
      .catch((error) => {
        onTokenFailure(error);
        openContextModal({
          modal: "alert",
          title: "Wrong login information",
          innerProps: {
            modalBody: "You are not an admin user",
          },
        });
      });
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text>Login</Text>
      <Box sx={{ width: "100%", maxWidth: 400 }}>
        {/* <Text>Login</Text> */}
        <form
          onSubmit={form.onSubmit((values) =>
            onClickLogin(values.email, values.password)
          )}
        >
          <TextInput
            withAsterisk
            label="Email"
            placeholder="your@email.com"
            {...form.getInputProps("email")}
          />
          <TextInput
            type="password"
            withAsterisk
            label="Password"
            placeholder="password"
            {...form.getInputProps("password")}
          />

          <Group position="right" mt="md">
            <Button type="submit">Submit</Button>
          </Group>
        </form>
      </Box>
    </div>
  );
};

export default LoginPage;
