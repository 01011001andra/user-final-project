import React from "react";
import { Layout, MainLayout } from "../../layouts";
import useGetKas from "../../lib/keuangan/useGetKas";
import { headSubText } from "../../utils/styles";
import { TabelKas } from "./components";
import Iframe from "react-iframe";
import { Link } from "react-router-dom";
import ReactPdf from "./components/ReactPdf";
const Beranda = () => {
  const { data: kasData, isError: kasIsErr, error: kasErr } = useGetKas();

  return (
    <MainLayout title="Beranda">
      {/* Section 1 */}
      <Layout className="z-0">
        <div className="min-h-screen pt-24 hero lg:pt-10 2xl:pt-5 bg-main">
          <div className="hero-content  flex-col gap-16 lg:gap-[52px] lg:flex-row-reverse ">
            <img
              src="./beranda-hero.png"
              className="max-w-xs border-4 rounded-lg shadow-2xl lg:max-w-md border-stroke"
            />
            <div className="flex flex-col max-w-lg gap-5">
              <h1 className={`${headSubText}`}>Masjid AL-IHSAN</h1>
              <p className="py-6 text-xl">
                ٱلسَّلَامُ عَلَيْكُمْ وَرَحْمَةُ ٱللَّٰهِ وَبَرَكَاتُهُ <br />{" "}
                Masjid AL-IHSAN adalah masjid yang berada dilingkungan Kavling
                Senjulung Rt 02 Rw 10
              </p>
              <div>
                <button className="btn bg-highlight">Lihat Acara</button>
              </div>
            </div>
          </div>
        </div>
      </Layout>
      {/* Section 2 */}
      <Layout bg={true} className="py-[48px] flex flex-col gap-10">
        <h1 className={`${headSubText} text-center `}>Acara</h1>
        <div className="flex flex-col justify-between h-screen gap-5 lg:flex-row">
          <div className="flex flex-col gap-[36px] lg:gap-[96px] w-full  lg:w-1/2 justify-center">
            <div className="flex flex-col gap-6 text-lg lg:text-2xl">
              <p>Assalamualaikum wr.wb</p>
              <p>
                Dengan ini kami mengundang seluruh masyarakat yang berada di
                lingkungan masjid AL-IHSAN agar menghadiri kegiatan yang akan
                diadakan pada:
              </p>
              <table className="w-full">
                <tbody>
                  <tr>
                    <td>Hari, Tanggal</td>
                    <td>: Kamis, 23 Mei 2002</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Waktu</td>
                    <td>: Ba’da isya s/d Selesai</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Tempat</td>
                    <td>: Masjid AL-IHSAN</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mx-auto">
              <button className="text-white border-none btn bg-stroke">
                UNDUH SURAT UNDANGAN
              </button>
            </div>
          </div>
          <div className="hidden h-full bg-black border border-black lg:flex"></div>
          <div className="w-full h-full bg-slate-600 lg:w-1/2">
            <ReactPdf />
          </div>
        </div>
      </Layout>
      {/* Section 3 */}
      <Layout className="py-[48px] flex flex-col  gap-16">
        <h1 className={`${headSubText} text-center `}>KAS MASJID</h1>
        <TabelKas getData={kasData} />
      </Layout>
      <Layout
        bg={true}
        className="py-[48px] flex flex-col h-screen gap-6 lg:gap-16"
      >
        <h1 className={`${headSubText} text-center`}>Ceramah</h1>

        <Iframe
          url="https://www.youtube.com/embed/bmH4rmkvnEI"
          className="w-full h-full rounded-2xl"
          display="block"
          position="relative"
        />
        <Link to="/ceramah" className="text-xl font-bold text-end">
          Selengkapnya...
        </Link>
      </Layout>
    </MainLayout>
  );
};

export default Beranda;
