import React from "react";
import { Layout, MainLayout } from "../../layouts";
import { headSubText } from "../../utils/styles";
import CardVideo from "./components/CardVideo";

const Ceramah = () => {
  return (
    <MainLayout title="Ceramah">
      <Layout className="py-28">
        <div className="flex flex-col gap-10">
          <h1 className={`text-2xl font-bold `}>
            Ceramah & Khotbah Masjid AL-IHSAN
          </h1>
          <CardVideo />
          <CardVideo />
        </div>
      </Layout>
    </MainLayout>
  );
};

export default Ceramah;
