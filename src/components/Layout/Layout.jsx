import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import { NavBar } from "components/NavBar/NavBar";
import { GlobalStyle } from "components/GlobalStyle";

import { Container } from "./Layout.styled";

export const Layout = () => {
  return (
    <>
      <NavBar />
      <Container>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </Container>

      <GlobalStyle />
    </>
  );
};
