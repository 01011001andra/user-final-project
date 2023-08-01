import { useQuery } from "@tanstack/react-query";
import { getDokumentasiById } from "../../utils/client";

const useGetDokumentasiById = (id) => {
  const query = useQuery(["dokumentasi", id], async () => {
    return getDokumentasiById(id);
  });
  return query;
};

export default useGetDokumentasiById;
