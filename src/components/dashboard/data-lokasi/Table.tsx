"use client";
import { useRouter } from "next/navigation";
import React, { useState, ChangeEvent } from "react";
import ShowEntries from "./ShowEntries";
import { Location } from "@prisma/client";

function Table({ locations }: any) {
  const router = useRouter();
  const [entriesToShow, setEntriesToShow] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("Newest");

  const handlePageClick = (page: any) => {
    setCurrentPage(page);
  };

  const handleSearchChange = (event: any) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1); // Reset to first page on search
  };

  const handleSortChange = (event: any) => {
    setSortOrder(event.target.value);
    setCurrentPage(1); // Reset to first page on sort change
  };

  // Filter users based on search term
  const filteredUsers = locations.filter((user: Location) =>
    user.nama_location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Sort users based on sortOrder
  const sortedUsers = filteredUsers.sort((a: Location, b: Location) => {
    if (sortOrder === "Newest") {
      return Number(new Date(b.createdAt)) - Number(new Date(a.createdAt)); // Replace 'creationDate' with your date field
    } else {
      return Number(new Date(a.createdAt)) - Number(new Date(b.createdAt));
    }
  });

  const totalPages = Math.ceil(sortedUsers.length / entriesToShow);
  const startIndex = (currentPage - 1) * entriesToShow;
  const endIndex = startIndex + entriesToShow;
  const paginatedUsers = sortedUsers.slice(startIndex, endIndex);

  return (
    <div className="w-[968px] mt-[21px] shadow-sm mb-6 ml-[71px] rounded-[30px] bg-white p-7">
      <div className="flex justify-between items-center mb-4">
        <ShowEntries
          entriesToShow={entriesToShow}
          setEntriesToShow={setEntriesToShow}
        />

        <div>
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={handleSearchChange}
            className="border border-gray-300 rounded-md px-3 py-1"
          />
          <select
            className="ml-2 border border-gray-300 rounded-md px-2 py-1"
            value={sortOrder}
            onChange={handleSortChange}
          >
            <option value="Newest">Newest</option>
            <option value="Oldest">Oldest</option>
          </select>
        </div>
      </div>
      <table className="min-w-full border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-4 py-2">NO</th>
            <th className="border px-4 py-2">Lokasi</th>
            <th className="border px-4 py-2">Latitude</th>
            <th className="border px-4 py-2">Longitude</th>
            <th className="border px-4 py-2">Ditambahkan Tanggal</th>
            <th className="border px-4 py-2">QR Code</th>
          </tr>
        </thead>
        <tbody>
          {paginatedUsers.map((employee: Location, index: any) => (
            <tr className="cursor-pointer hover:bg-gray-100" key={employee.id}>
              <td className="border px-4 py-2">{startIndex + index + 1}</td>
              <td className="border px-4 py-2">{employee.nama_location}</td>
              <td className="border px-4 py-2">{employee.latitude}</td>
              <td className="border px-4 py-2">{employee.longitude}</td>
              <td className="border px-4 py-2">
                {employee.createdAt.toDateString()}
              </td>
              <td className="border px-4 py-2">{employee.qr_code}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-between items-center mt-4">
        <div>
          Showing data {startIndex + 1} to{" "}
          {Math.min(endIndex, locations.length)} of {locations.length} entries
        </div>
        <div className="flex">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              className={`border border-gray-300 px-3 py-1 rounded-md mx-1 ${
                currentPage === index + 1 ? "bg-gray-300" : ""
              }`}
              onClick={() => handlePageClick(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Table;
