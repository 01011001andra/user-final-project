import React from "react";

const InfakCard = ({ bg }) => {
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
      <h1>E-INFAK ANAK YATIM</h1>
      <span>No rek. 7231965558</span>
      <span>A.N Yandra Muslim</span>
      <p>
        Uang infak akan dibagikan setiap tahun kepada anak-anak yatim yang
        berada dikawasan masjid Al-Ihsan.
      </p>
    </div>
  );
};

export default InfakCard;
