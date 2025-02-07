import React from "react";
import { Card } from "../../../bases/Card/Card";
import V1 from "../../../Assets/japan.png";
import V2 from "../../../Assets/jastip_jpn.jpg";

export const UserMenuView = () => {
  return (
    <div className="min-h-screen">
      <section className="max-w-screen-xl mx-auto py-30">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10">
          <Card
            source={V1}
            className="shadow-lg rounded-lg transition-transform transform hover:scale-105"
          />
          <Card
            source={V2}
            className="shadow-lg rounded-lg transition-transform transform hover:scale-105"
          />
          <Card
            source={V2}
            className="shadow-lg rounded-lg transition-transform transform hover:scale-105"
          />
          <Card
            source={V2}
            className="shadow-lg rounded-lg transition-transform transform hover:scale-105"
          />
          <Card
            source={V2}
            className="shadow-lg rounded-lg transition-transform transform hover:scale-105"
          />
          <Card
            source={V1}
            className="shadow-lg rounded-lg transition-transform transform hover:scale-105"
          />
        </div>

        <div className="flex justify-center mt-8">
          <button className="bg-white text-red-500 font-semibold py-2 px-4 rounded shadow hover:bg-gray-200 transition">
            VIEW MORE
          </button>
        </div>
      </section>
    </div>
  );
};
