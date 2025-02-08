import React from "react";
import detail from "../../../Assets/jastip_jpn.jpg";

export const MenuDetailView = () => {
  return (
    <div>
      <div className="min-h-screen">
        <section className="max-w-screen-xl mx-auto py-30">
          <div className="grid grid-cols-1">
            <div className="container mx-auto p-4">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex">
                  <div className="w-1/2 pr-4">
                    <img
                      src={detail}
                      alt="Produk"
                      className="rounded-t-lg h-56 w-96 object-cover"
                    />
                  </div>
                  <div className="w-1/2">
                    <h1 className="text-2xl font-bold mb-2">
                      Pompa Angin Mini Portable
                    </h1>
                    <p className="text-gray-700 mb-4">Rp5.174</p>
                    <p className="text-red-600 font-semibold mb-4">
                      FLASH SALE
                    </p>
                    <div className="flex items-center mb-4">
                      <span className="text-gray-600">Voucher:</span>
                      <span className="text-red-600 ml-2">HITAM100</span>
                    </div>
                    <div className="flex mb-4">
                      <label className="mr-2">Jumlah:</label>
                      <input
                        type="number"
                        value="1"
                        className="border border-gray-300 rounded-lg w-16 p-1"
                      />
                    </div>
                    <button className="bg-red-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-red-700">
                      Beli Sekarang
                    </button>
                    {/* Deskripsi ditambahkan di bawah tombol */}
                    <div className="mt-6 border-t pt-4">
                      <h2 className="text-lg font-bold">Deskripsi</h2>
                      <p className="text-gray-600 mt-2">
                        Pompa angin mini ini cocok untuk sepeda, bola, dan
                        kasur. Ringan dan mudah dibawa.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
