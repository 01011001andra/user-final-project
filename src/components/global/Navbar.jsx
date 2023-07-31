import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const LinkTo = [
    { name: "Beranda", path: "/" },
    { name: "Acara", path: "/acara" },
    { name: "ceramah", path: "/Ceramah" },
    { name: "Keuangan & Infak", path: "/keuangan" },
  ];

  return (
    <div className="absolute top-0 left-0 z-10 w-full h-24">
      <div className="container h-full mx-auto bg-transparent navbar">
        <div className="w-full navbar-start lg:w-1/2">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {LinkTo.map((item, index) => {
                return (
                  <li key={index}>
                    <Link className="font-semibold " to={item.path}>
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <a className="font-semibold text-[20px] select-none">
            Masjid Al-Ihsan
          </a>
        </div>
        <div className="hidden navbar-end lg:flex">
          <ul className="px-1 menu menu-horizontal">
            {LinkTo.map((item, index) => {
              return (
                <li key={index}>
                  <Link className="font-semibold text-[20px]" to={item.path}>
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
