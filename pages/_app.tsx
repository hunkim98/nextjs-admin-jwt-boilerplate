import "../styles/globals.css";
import type { AppProps } from "next/app";
import {
  AppShell,
  Burger,
  Header,
  MediaQuery,
  Navbar,
  Text,
} from "@mantine/core";
import Link from "next/link";
import { useState } from "react";
import axios from "axios";

function MyApp({ Component, pageProps }: AppProps) {
  const [opened, setOpened] = useState<boolean>(false);
  axios.defaults.withCredentials = true; // even for get requests if
  return (
    <>
      <AppShell
        styles={{ main: {} }}
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
              <Link href="/">글 목록</Link>
            </Navbar.Section>
            <Navbar.Section mt="md">
              <Link href="/post">글 작성</Link>
            </Navbar.Section>
            <Navbar.Section mt="md">
              <Link href="/book">책 등록</Link>
            </Navbar.Section>
            <Navbar.Section mt="md">
              <Link href="/books">책 목록</Link>
            </Navbar.Section>
            <Navbar.Section mt="md">
              <Link href="/carousels">배너 목록</Link>
            </Navbar.Section>
            <Navbar.Section mt="md">
              <Link href="/carousel">배너 추가</Link>
            </Navbar.Section>
            <Navbar.Section mt="md">
              <Link href="/clubs">클럽 목록</Link>
            </Navbar.Section>
            <Navbar.Section mt="md">
              <Link href="/club">클럽 추가</Link>
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
                  <h1>Pickgeul</h1>
                </Text>
              </Link>
            </div>
          </Header>
        }
      >
        <Component {...pageProps} />
      </AppShell>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
