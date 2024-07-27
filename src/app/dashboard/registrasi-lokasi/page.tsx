"use client";
import { useState } from "react";
import Image from "next/image";
import QRCode from "qrcode.react";

function Page() {
  const [locationName, setLocationName] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  const handleLocationNameChange = (e: any) => {
    setLocationName(e.target.value);
  };

  const handleLatitudeChange = (e: any) => {
    setLatitude(e.target.value);
  };

  const handleLongitudeChange = (e: any) => {
    setLongitude(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Add your submit logic here
  };

  return (
    <div className="flex-1 bg-[#FAFBFF] p-10">
      <div className="text-[24px] font-semibold mb-5">Tambahkan Lokasi</div>
      <div className="w-full max-w-4xl mx-auto shadow-sm rounded-[30px] bg-white p-10">
        <div className="flex">
          <div className="flex-1">
            <h2 className="text-xl font-bold mb-5">Data Lokasi</h2>
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  placeholder="Nama Lokasi"
                  className="w-full border-b border-gray-300 px-3 py-2 mt-1"
                  value={locationName}
                  onChange={handleLocationNameChange}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Latitude"
                  className="w-full border-b border-gray-300 px-3 py-2 mt-1"
                  value={latitude}
                  onChange={handleLatitudeChange}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Longitude"
                  className="w-full border-b border-gray-300 px-3 py-2 mt-1"
                  value={longitude}
                  onChange={handleLongitudeChange}
                />
              </div>
              <div>
                <p>QR Code :</p>
                {locationName && (
                  <QRCode value={locationName} size={128} level="H" />
                )}
              </div>
              <button
                type="submit"
                className="bg-green-500 text-white px-5 py-2 rounded-md"
              >
                Tambah
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
