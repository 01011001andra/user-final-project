import React from "react";
import { useParams } from "react-router-dom";
import { Layout, MainLayout } from "../../layouts";
import { useGetDokumentasiById } from "../../lib";
import { formatTanggal } from "../../utils/helper";
import { headSubText } from "../../utils/styles";
import { Gallery } from "./components";

const DetailAcara = () => {
  const { id } = useParams();
  const { data } = useGetDokumentasiById(id);

  return (
    <MainLayout>
      <Layout className="py-28">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col w-full gap-5">
            <h1 className={`${headSubText} text-center`}>
              {data?.data?.jenis_acara}
            </h1>
            <span className="text-center">
              {formatTanggal(data?.data?.tanggal)}
            </span>
          </div>
          <img
            src={data?.data?.gambar}
            alt={data?.data?.jenis_acara}
            className="mx-auto w-96"
          />
          <p className="text-lg leading-8">{data?.data?.deskripsi}</p>
        </div>
        <Gallery />
      </Layout>
    </MainLayout>
  );
};

export default DetailAcara;
