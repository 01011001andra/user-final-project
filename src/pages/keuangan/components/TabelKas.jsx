import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Error } from "../../../components";
import { formatTanggal } from "../../../utils/helper";

const TabelKas = (props) => {
  const { getData = [], isError, error } = props;
  const [pageItem, setPageItem] = useState(5);

  const itemsPerPage = pageItem;
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1);
  };

  const filteredData = getData?.data?.filter((item) =>
    item?.keterangan?.toLowerCase().includes(searchQuery?.toLowerCase())
  );

  // Reverse the filteredData array to display from the end
  const reversedData = filteredData?.slice().reverse();
  const totalPages = Math.ceil(reversedData?.length / itemsPerPage);
  const currentData = reversedData?.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  // Menghitung nomor awal pada setiap halaman
  const calculateStartNumber = () => {
    return (currentPage - 1) * itemsPerPage + 1;
  };

  const handleSetPageItem = () => {
    if (window.innerWidth <= 768) {
      setPageItem(2);
    } else {
      setPageItem(5); // Tetap gunakan 5 untuk lebar layar lebih besar dari 768 piksel
    }
  };

  // Memanggil handleSetPageItem ketika komponen pertama kali di-render dan ketika ukuran layar berubah
  React.useEffect(() => {
    handleSetPageItem();
    window.addEventListener("resize", handleSetPageItem);
    return () => window.removeEventListener("resize", handleSetPageItem);
  }, []);
  if (isError) {
    return <Error message={error.message} />;
  }
  return (
    <div className="flex flex-col gap-10">
      {/* TABEL DOKUMENTASI */}
      <div className="flex flex-col justify-between gap-2 lg:flex-row lg:gap-4 ">
        <div className="flex flex-col gap-2">
          <h1 className="text-[18px] font-semibold">
            Laporan Keuangan Masjid Al-Ihsan
          </h1>
          <span>Ini adalah Laporan Keuangan Masjid Al-Ihsan</span>
        </div>
        <div className="flex flex-col gap-2 lg:flex-row lg:gap-4">
          <input
            type="text"
            placeholder="Cari keterangan"
            className="w-full input input-bordered lg:max-w-xs"
            value={searchQuery}
            onChange={handleSearch}
          />
        </div>
      </div>
      <table class="min-w-full border-collapse block md:table">
        <thead class="block md:table-header-group">
          <tr class="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative ">
            <th class="bg-stroke p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
              NO
            </th>
            <th class="bg-stroke p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
              TANGGAL
            </th>
            <th class="bg-stroke p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
              KETERANGAN
            </th>
            <th class="bg-stroke p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
              MASUK
            </th>
            <th class="bg-stroke p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
              KELUAR
            </th>
            <th class="bg-stroke p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
              SALDO
            </th>
          </tr>
        </thead>
        <tbody className="flex-col-reverse block md:table-row-group">
          {currentData?.map((item, index) => {
            // Menghitung nomor asli berdasarkan halaman dan indeks data pada halaman tersebut
            const actualIndex = calculateStartNumber() + index;

            return (
              <tr
                key={item.id}
                className="block bg-white border border-grey-500 md:border-none md:table-row"
              >
                <td className="hidden p-2 text-left md:border md:border-grey-500 md:table-cell">
                  <span className="inline-block w-1/3 font-bold md:hidden">
                    NO
                  </span>
                  {actualIndex}
                </td>

                <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                  <span class="inline-block w-1/3 md:hidden font-bold">
                    TANGGAL
                  </span>
                  {formatTanggal(item?.tanggal)}
                </td>
                <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                  <span class="inline-block w-1/3 md:hidden font-bold">
                    KETERANGAN
                  </span>
                  {item.keterangan}
                </td>
                <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                  <span class="inline-block w-1/3 md:hidden font-bold">
                    MASUK
                  </span>
                  {item.masuk}
                </td>
                <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                  <span class="inline-block w-1/3 md:hidden font-bold">
                    KELUAR
                  </span>
                  {item.keluar}
                </td>
                <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                  <span class="inline-block w-1/3 md:hidden font-bold">
                    SALDO
                  </span>
                  {item.saldo}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col justify-between w-full gap-4 md:flex-row-reverse">
          <div className="grid grid-cols-2 join ">
            <button
              className="join-item btn btn-outline hover:bg-stroke"
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              Previous page
            </button>
            <button
              className="join-item btn btn-outline hover:bg-stroke"
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
            >
              Next page
            </button>
          </div>
          <div className="flex items-end justify-end mt-5">
            <div className="relative flex flex-col items-center justify-center w-full max-w-xs gap-4">
              <span>
                Kavling baru, 23 Mei 2002 <br /> Bendahara,
              </span>
              <img src="./signature.png" className="w-full " alt="ttd" />
              <span>Yandra Muslim</span>
              <p className="absolute z-0 font-bold text-blue-600 rotate-12 opacity-60">
                MASJID AL-IHSAN
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabelKas;
