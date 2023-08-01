import React from "react";
import { Loading } from "../../components";
import { Layout, MainLayout } from "../../layouts";
import { useGetInfak } from "../../lib";
import useGetKas from "../../lib/keuangan/useGetKas";
import { InfakCard, TabelKas } from "./components";

const Keuangan = () => {
  const {
    data: kasData,
    isError: dataIsErr,
    error: dataErr,
    isLoading: dataIsLoad,
  } = useGetKas();
  const {
    data: infakData,
    isError: infakIsErr,
    error: infakErr,
    isLoading: infakIsLoad,
  } = useGetInfak();
  return (
    <MainLayout title="Keuangan & Infak">
      <Layout bg={true} className="flex flex-col justify-center py-28">
        <h1>Keuangan & Infak</h1>
        {dataIsLoad ? (
          <Loading loadingName="Tabel Kas" />
        ) : (
          <TabelKas getData={kasData} isError={dataIsErr} error={dataErr} />
        )}
      </Layout>
      <Layout className="flex flex-col justify-center gap-16 py-16">
        <h1 className={`text-2xl font-bold text-center`}>
          LAYANAN E-INFAK MASJID AL-IHSAN
        </h1>
        <div class="w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
          {infakIsLoad ? (
            <Loading loadingName="Layanan E-Infak" />
          ) : (
            infakData?.data?.map((item) => {
              return (
                <InfakCard
                  nama_infak={item.nama_infak}
                  no_rek={item.no_rek}
                  penerima={item.penerima}
                  deskripsi={item.deskripsi}
                  bg={item.prioritas}
                />
              );
            })
          )}
        </div>
      </Layout>
    </MainLayout>
  );
};

export default Keuangan;
