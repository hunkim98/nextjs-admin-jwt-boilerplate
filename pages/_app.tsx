import "../styles/globals.css";
import type { AppProps } from "next/app";
import {
  AppShell,
  Burger,
  Button,
  Header,
  MantineProvider,
  MediaQuery,
  Navbar,
  Text,
} from "@mantine/core";
import Link from "next/link";
import { useState } from "react";
import axios from "axios";
import { AuthContextProvider } from "../components/AuthProvider/AuthProvider";
import AuthWrapper from "../components/AuthWrapper/AuthWrapper";
import wrapper from "../store/configureStore";
import { ContextModalProps, ModalsProvider } from "@mantine/modals";

const AlertModal = ({
  context,
  id,
  innerProps,
}: ContextModalProps<{ modalBody: string }>) => (
  <>
    <Text size="sm">{innerProps.modalBody}</Text>
    <Button fullWidth mt="md" onClick={() => context.closeModal(id)}>
      Close modal
    </Button>
  </>
);

function MyApp({ Component, pageProps }: AppProps) {
  const [opened, setOpened] = useState<boolean>(false);
  axios.defaults.withCredentials = true; // even for get requests if
  return (
    <>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: "dark",
        }}
      >
        <ModalsProvider modals={{ alert: AlertModal }}>
          <AuthContextProvider>
            <AuthWrapper>
              <AppShell
                styles={(theme) => ({
                  main: {
                    backgroundColor:
                      theme.colorScheme === "dark"
                        ? theme.colors.dark[8]
                        : theme.colors.gray[0],
                  },
                })}
                navbarOffsetBreakpoint="sm"
                fixed
                navbar={
                  <Navbar
                    hiddenBreakpoint="sm"
                    hidden={!opened}
                    style={{ padding: "0 20px", zIndex: 50 }}
                    width={{ sm: 200, lg: 300 }}
                  >
                    <Navbar.Section>
                      <h3>
                        <Link href="/">Home</Link>
                      </h3>
                    </Navbar.Section>
                    <Navbar.Section mt="md">
                      <Link href="/users">List Users</Link>
                    </Navbar.Section>
                  </Navbar>
                }
                header={
                  <Header height={70}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        height: "100%",
                        padding: "0 20px",
                      }}
                    >
                      <MediaQuery largerThan="sm" styles={{ display: "none" }}>
                        <Burger
                          opened={opened}
                          onClick={() => setOpened((o) => !o)}
                          size="sm"
                          mr="xl"
                        />
                      </MediaQuery>
                      <Link href="/">
                        <Text>
                          <h1>Admin</h1>
                        </Text>
                      </Link>
                    </div>
                  </Header>
                }
              >
                <Component {...pageProps} />
              </AppShell>
            </AuthWrapper>
          </AuthContextProvider>
        </ModalsProvider>
      </MantineProvider>
    </>
  );
}

export default wrapper.withRedux(MyApp);
