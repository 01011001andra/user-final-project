import React from "react";
import Iframe from "react-iframe";
import { formatTanggal } from "../../../utils/helper";

const CardVideo = ({ penceramah, judul, tanggal,embed }) => {
  return (
    <div className="flex flex-col h-[60vh] lg:h-[50vh]  gap-5 p-7 lg:p-12 lg:gap-20 lg:flex-row lg rounded-xl bg-stroke">
      <div className="flex flex-col gap-5">
        <div>
          <button className="hidden text-black btn btn-primary bg-highlight lg:flex">
            Masjid Al-Ihsan
          </button>
        </div>
        <span className="text-xl text-white">{penceramah}</span>
        <small className="text-white text-md">
          {judul}, {formatTanggal(tanggal)}
        </small>
      </div>
      <div className="flex-1 ">
        <Iframe
          url={embed}
          className="w-full h-full rounded-sm lg:rounded-2xl"
          display="block"
          position="relative"
        />
      </div>
    </div>
  );
};

export default CardVideo;
