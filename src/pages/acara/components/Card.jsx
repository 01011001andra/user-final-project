import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Card = ({ bg, id = 1 }) => {
  return (
    <div
      className={`w-full border-8 rounded-md border-stroke  p-[26px] flex flex-col gap-5 shadow-xl ${
        bg ? "bg-stroke text-white" : "bg-slate-100 "
      }`}
    >
      <h1 className="text-2xl">PENGAJIAN BERSAMA</h1>
      <div className="flex flex-col gap-1">
        <span>Kegiatan : Maulid Nabi</span>
        <span>Waktu : Rabu, 23 Mei 2002</span>
        <span>Tempat : Masjid Al-Ihsan</span>
      </div>
      <HashLink
        to={`${bg ? "/#acara" : `/acara/${id}`}`}
        className={`flex items-center justify-center py-5 text-white rounded-md ${
          bg ? "bg-white font-bold text-black" : "bg-stroke"
        }`}
      >
        {bg ? "LIHAT UNDANGAN" : "LIHAT DOKUMENTASI ACARA"}
      </HashLink>
    </div>
  );
};

export default Card;
