import React from "react";

const InfakCard = ({ bg, nama_infak, no_rek, penerima, deskripsi }) => {
  return (
    <div
      className={` rounded-2xl ${
        bg
          ? "bg-stroke text-white"
          : "border-4 border-stroke bg-white text-stroke"
      } flex flex-col gap-5 p-[50px]`}
    >
      <div>
        <img
          src="./bsi.png"
          alt="bsi"
          className={`${!bg && "border-2 border-stroke rounded-xl"}`}
        />
      </div>
      <h1 className="uppercase">{nama_infak}</h1>
      <span>No rek. {no_rek}</span>
      <span>A.N {penerima}</span>
      <p>{deskripsi}</p>
    </div>
  );
};

export default InfakCard;
