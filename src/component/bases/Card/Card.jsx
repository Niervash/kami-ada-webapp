import React from "react";
import { FaLocationDot } from "react-icons/fa6";

export const Card = ({ source }) => {
  // Check if source is a valid string
  if (typeof source !== "string") {
    console.error("Invalid source:", source); // Log if source is not a string
    return null; // Render nothing if source is invalid
  }

  return (
    <div className="max-w-sm bg-transparent rounded-lg shadow-lg">
      <a href="#">
        <img
          className="rounded-t-lg h-56 w-96 object-cover"
          src={source}
          alt="Card"
        />
      </a>
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
          Noteworthy technology acquisitions 2021
        </h5>
        <p className="flex items-center mb-5 mt-5 font-normal text-gray-700">
          <FaLocationDot className="mr-2" />
          Gowa, Makkasar, Indonesia
        </p>
        <a
          href="#"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-700"
        >
          Selengkapnya
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};
