import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../Assets/logo.png.png";
import { AiOutlineClose } from "react-icons/ai";

export const RegisterSection = () => {
  return (
    <div>
      <body class="bg-red-800 flex items-center justify-center min-h-screen">
        <div class="bg-yellow-50 rounded-lg shadow-lg p-8 w-auto relative">
          
          {/* Close Button */}
          <Link className="absolute top-4 left-4" type="button" to="/">
            <AiOutlineClose className="w-6 h-6 text-black" />
          </Link>

          <div className="flex justify-center mb-4">
            <img src={logo} alt="Logo" className="w-12 h-12" />
          </div>
          <h2 class="text-center text-2xl font-semibold mb-6">Sign Up</h2>
          <form>
            <label class="block mb-2" for="email">
              Email:
            </label>
            <input
              type="email"
              id="email"
              placeholder="admin@gmail.com"
              class="border border-gray-300 rounded-lg w-full p-2 mb-4"
            />

            <label class="block mb-2" for="password">
              Password:
            </label>
            <input
              type="password"
              id="password"
              placeholder=".........."
              class="border border-gray-300 rounded-lg w-full p-2 mb-4"
            />

            <label class="block mb-2" for="confirm-password">
              Confirm Password:
            </label>
            <input
              type="password"
              id="confirm-password"
              placeholder=".........."
              class="border border-gray-300 rounded-lg w-full p-2 mb-4"
            />

            <button
              type="submit"
              class="bg-red-600 text-white rounded-lg w-full p-2 hover:bg-red-700"
            >
              Daftar
            </button>
          </form>
          <p class="text-center mt-4">
            Sudah Punya Akun?{" "}
            <Link to="/login" class="text-red-600 font-semibold">
              Klik Disini!
            </Link>
          </p>
        </div>
      </body>
    </div>
  );
};
