import React from "react";
import { SearchInput } from "../../bases/SearchInput/SearchInput";
import logo from "../../Assets/logo.png.png";
import { Link } from "react-router-dom";

export const NavbarUser = () => {
  return (
    <div>
      <nav className="bg-red-900 fixed w-full z-20 top-0 start-0 pb-2 shadow-2xl">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={logo} className="h-12 -mr-2" alt="Flowbite Logo" />
            <span className="self-center text-white text-2xl font-semibold whitespace-nowrap md:block hidden">
              Kami Ada
            </span>
          </Link>
          {/* Search Form */}
          <div className="flex-grow md:max-w-lg mx-4">
            <SearchInput />
          </div>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <Link
              type="button"
              to="/login"
              className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-4 py-2 text-center"
            >
              Log In
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};
