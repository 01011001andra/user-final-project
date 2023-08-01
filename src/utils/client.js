import { ceramahClient, keuanganClient, undanganClient } from "./helper";

// kas
export const getKas = () => {
  return keuanganClient.get("/kas");
};

// infak
export const getInfak = () => {
  return keuanganClient.get("/layanan-infak");
};

// ceramah
export const getCeramah = () => {
  return ceramahClient.get("/ceramah");
};

// undangan
export const getUndangan = () => {
  return undanganClient.get(`/undangan`);
};

// dokumentasi Acara
export const getDokumentasi = () => {
  return undanganClient.get(`/dokumentasi_acara`);
};
// dokumentasi Acara by id
export const getDokumentasiById = (id) => {
  return undanganClient.get(`/dokumentasi_acara/${id}`);
};
