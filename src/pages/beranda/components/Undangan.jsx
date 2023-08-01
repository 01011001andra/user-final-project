import React from "react";
import { formatTanggal } from "../../../utils/helper";

const Undangan = (props) => {
  const { getData = [], isError, error } = props;
  return (
    <>
      <div className="flex flex-col gap-6 text-lg lg:text-2xl">
        <p>Assalamualaikum wr.wb</p>
        <p>
          Dengan ini kami mengundang seluruh masyarakat yang berada di
          lingkungan masjid AL-IHSAN agar menghadiri kegiatan{" "}
          {getData?.jenis_acara} yang akan diadakan pada:
        </p>
        <table className="w-full">
          <tbody>
            <tr>
              <td>Hari, Tanggal</td>
              <td>: {formatTanggal(getData?.tanggal)}</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Waktu</td>
              <td>: {getData?.waktu}</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Tempat</td>
              <td>: {getData?.tempat}</td>
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
    </>
  );
};

export default Undangan;
