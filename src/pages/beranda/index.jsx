import React from "react";
import { Layout, MainLayout } from "../../layouts";
import { headSubText } from "../../utils/styles";
import { TabelKas, Undangan } from "./components";
import Iframe from "react-iframe";
import { Link } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";
import ReactPdf from "./components/ReactPdf";
import { useGetCeramah, useGetKas, useGetUndangan } from "../../lib";

const Beranda = () => {
  const { data: kasData, isError: kasIsErr, error: kasErr } = useGetKas();
  const {
    data: undanganData,
    isError: undanganIsErr,
    error: undanganErr,
  } = useGetUndangan();
  const {
    data: ceramahData,
    isError: ceramahIsErr,
    error: ceramahErr,
  } = useGetCeramah();

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
                <LinkScroll
                  activeClass="active"
                  to="acara"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="btn bg-highlight"
                >
                  Lihat Acara
                </LinkScroll>
              </div>
            </div>
          </div>
        </div>
      </Layout>
      {/* Section 2 */}
      {!undanganData?.data?.length == 0 && (
        <Layout
          id="acara"
          bg={true}
          className="py-[48px] flex flex-col gap-10  min-h-screen"
        >
          <h1 className={`${headSubText} text-center `}>Acara</h1>
          <div className="flex flex-col justify-between min-h-screen gap-5 lg:flex-row">
            <div className="flex flex-col gap-[36px] lg:gap-[96px] w-full  lg:w-1/2 justify-center">
              <Undangan
                getData={undanganData?.data[0]}
                isError={undanganIsErr}
                error={undanganErr}
              />
            </div>
            <div className="hidden h-full bg-black border border-black lg:flex"></div>
            <div className="w-full h-screen bg-slate-600 lg:w-1/2">
              <ReactPdf />
            </div>
          </div>
        </Layout>
      )}
      {/* Section 3 */}
      <Layout className="py-[48px] flex flex-col  gap-16">
        <h1 className={`${headSubText} text-center `}>KAS MASJID</h1>
        <TabelKas getData={kasData} />
      </Layout>
      <Layout
        bg={true}
        className="py-[48px] flex flex-col h-screen gap-6 lg:gap-16 
        "
      >
        <h1 className={`${headSubText} text-center`}>Ceramah</h1>
        <Iframe
          url={ceramahData?.data[0]?.embed}
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
