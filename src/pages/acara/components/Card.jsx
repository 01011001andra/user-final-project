import React from "react";

const Card = () => {
  return (
    <div className="w-full border-8 rounded-md border-stroke bg-slate-100 p-[26px] flex flex-col gap-5 shadow-xl">
      <h1 className="text-2xl">PENGAJIAN BERSAMA</h1>
      <div className="flex flex-col gap-1">
        <span>Kegiatan : Maulid Nabi</span>
        <span>Waktu : Rabu, 23 Mei 2002</span>
        <span>Tempat : Masjid Al-Ihsan</span>
      </div>
      <button className="flex items-center justify-center py-5 text-white rounded-md bg-stroke">
        LIHAT DOKUMENTASI ACARA
      </button>
    </div>
  );
};

export default Card;
