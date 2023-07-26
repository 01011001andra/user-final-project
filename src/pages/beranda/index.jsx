import React from "react";
import { Layout, MainLayout } from "../../layouts";

const Beranda = () => {
  return (
    <MainLayout title="Beranda">
      <Layout bg={true}>
        <h1>Beranda</h1>
      </Layout>
      <Layout>
        <h1>Acara</h1>
      </Layout>
    </MainLayout>
  );
};

export default Beranda;
