import React from "react";
import { Layout, MainLayout } from "../../layouts";
import { useGetDokumentasi, useGetUndangan } from "../../lib";
import { Card, RutinitasCard } from "./components";

const Acara = () => {
  const {
    data: dokumentasiData,
    isError: dokumentasiIsErr,
    error: dokumentasiErr,
  } = useGetDokumentasi();

  const {
    data: undanganData,
    isError: undanganIsErr,
    error: undanganErr,
  } = useGetUndangan();
  return (
    <MainLayout title="Acara">
      <Layout>
        <div className="flex flex-col-reverse w-full min-h-screen gap-5 lg:flex-row py-28 bg-main">
          <div className="flex flex-col w-full gap-5 lg:w-1/2">
            <h1 className={`text-2xl font-bold text-center`}>
              Dokumentasi Acara
            </h1>
            <div className="flex flex-col gap-5">
              {dokumentasiData?.data.map((item) => {
                return <Card key={item.id} getData={item} id={item.id} />;
              })}
            </div>
          </div>
          <div className="relative flex flex-col w-full gap-5 lg:w-1/2">
            <h1 className={`text-2xl font-bold text-center`}>
              Acara masjid Al-Ihsan
            </h1>
            <div className="sticky top-0 right-0 flex flex-col w-full gap-5">
              <Card bg={true} getData={undanganData?.data[0]} />
              <RutinitasCard />
            </div>
          </div>
        </div>
      </Layout>
    </MainLayout>
  );
};

export default Acara;
