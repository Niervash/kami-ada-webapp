import React from "react";
import { IoMdArrowDropdownCircle } from "react-icons/io";

export const SearchInput = () => {
  return (
    <form className="flex-grow max-w-lg mx-auto">
      <div className="flex">
        <div className="relative w-full">
          <input
            type="search"
            id="search-dropdown"
            className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg border-s-gray-50 border-s-2 border border-gray-300  "
            placeholder="Search ..."
            required
          />
        </div>
      </div>
    </form>
  );
};
