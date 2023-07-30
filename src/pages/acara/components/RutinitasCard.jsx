import React from "react";

const RutinitasCard = () => {
  return (
    <div
      className={`w-full border-8 rounded-md border-stroke  p-[26px] flex flex-col gap-5 shadow-xl bg-slate-100`}
    >
      <h1 className="text-2xl font-bold text-center">Rutinitas</h1>
      <div>
        <ol className="px-5 list-decimal">
          <li className="text-lg font-bold">
            Masjid Al-Ikhsan menggelar pengajian rutin Ceramah Subuh setiap hari
            minggu selepas ba’da subuh s/d selesai.
          </li>
          <li className="text-lg font-bold">
            Masjid Al-ikhsan melakukan pembacaan surah yasin bersama setiap
            malam jumat selepas ba’da maghrib s/d selesai
          </li>
        </ol>
      </div>
    </div>
  );
};

export default RutinitasCard;
