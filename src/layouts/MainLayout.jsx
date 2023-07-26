import React from "react";
import { Helmet } from "react-helmet";
import { Footer, Navbar } from "../components";

const MainLayout = ({ children, title }) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
