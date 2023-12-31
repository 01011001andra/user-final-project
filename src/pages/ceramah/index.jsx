import React from "react";
import { Layout, MainLayout } from "../../layouts";
import { useGetCeramah } from "../../lib";
import CardVideo from "./components/CardVideo";

const Ceramah = () => {
  const {
    data: ceramahData,
    isError: ceramahIsErr,
    error: ceramahErr,
  } = useGetCeramah();

  return (
    <MainLayout title="Ceramah">
      <Layout className="py-28">
        <div className="flex flex-col gap-10">
          <h1 className={`text-2xl font-bold `}>
            Ceramah & Khotbah Masjid AL-IHSAN
          </h1>
          {ceramahData?.data?.map((item) => {
            return (
              <CardVideo
                key={item.id}
                penceramah={item.penceramah}
                judul={item.judul}
                embed={item.embed}
                tanggal={item.tanggal}
              />
            );
          })}
        </div>
      </Layout>
    </MainLayout>
  );
};

export default Ceramah;
