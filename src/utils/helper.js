import axios from "axios";
import moment from "moment";

// undangan
export const undanganClient = axios.create({
  baseURL: import.meta.env.VITE_UNDANGAN_API,
});
// ceramah
export const ceramahClient = axios.create({
  baseURL: import.meta.env.VITE_CERAMAH_API,
});
// keuangan
export const keuanganClient = axios.create({
  baseURL: import.meta.env.VITE_LAYANAN_API,
});

// format date

export const formatTanggal = (tanggal) => {
  return moment.unix(tanggal).format("DD MMM YYYY");
};

export const formatUnixToTanggal = (tanggal) => {
  return moment.unix(tanggal).format("YYYY-MM-DD");
};

export const formatTanggalToUnix = (tanggal) => {
  return moment(tanggal).unix();
};
