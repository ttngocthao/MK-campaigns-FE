import React from "react";
import Seo from "./Seo";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import GlobalStyle from "./GlobalStyle.css";
import styled from "styled-components";

const LayoutWrap = styled.section`
  max-width: 1920px;
  margin: 0 auto;
`;

const Layout = ({ title, children }) => {
  return (
    <>
      <GlobalStyle />
      <LayoutWrap>
        <Seo title={title} />

        <Header />
        <main>{children}</main>
        <Footer />
      </LayoutWrap>
    </>
  );
};

export default Layout;
