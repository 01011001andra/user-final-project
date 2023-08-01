import React from "react";
import { HashLink } from "react-router-hash-link";

const Card = ({ bg, id, getData = [], isError, error }) => {
  return (
    <div
      className={`w-full border-8 rounded-md border-stroke  p-[26px] flex flex-col gap-5 shadow-xl ${
        bg ? "bg-stroke text-white" : "bg-slate-100 "
      }`}
    >
      <h1 className="text-2xl">{getData?.jenis_acara}</h1>
      <div className="flex flex-col gap-1">
        <span>Kegiatan : {getData?.jenis_acara}</span>
        <span>Waktu : {getData?.waktu}</span>
        <span>Tempat : {getData?.tempat}</span>
      </div>
      <HashLink
        to={`${bg ? "/#acara" : `/acara/${id}`}`}
        className={`flex items-center justify-center py-5  rounded-md ${
          bg ? "text-stroke bg-white font-bold " : "bg-stroke  text-white"
        }`}
      >
        {bg ? "LIHAT UNDANGAN" : "LIHAT DOKUMENTASI ACARA"}
      </HashLink>
    </div>
  );
};

export default Card;
