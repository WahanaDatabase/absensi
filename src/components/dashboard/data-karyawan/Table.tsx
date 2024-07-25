"use client";
import { useRouter } from "next/navigation";
import React, { useState, ChangeEvent } from "react";
import ShowEntries from "./ShowEntries";
import { User } from "@prisma/client";

function Table({ users }: any) {
  const router = useRouter();
  const [entriesToShow, setEntriesToShow] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("Newest");

  const handleRowClick = (id: any) => {
    router.push(`/dashboard/data-karyawan/${id}`);
  };

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
  const filteredUsers = users.filter((user: any) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Sort users based on sortOrder
  const sortedUsers = filteredUsers.sort((a: User, b: User) => {
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
            <th className="border px-4 py-2">Nama</th>
            <th className="border px-4 py-2">ID Karyawan</th>
            <th className="border px-4 py-2">Group</th>
            <th className="border px-4 py-2">Email</th>
            <th className="border px-4 py-2">No Handphone</th>
          </tr>
        </thead>
        <tbody>
          {paginatedUsers.map((employee: User, index: any) => (
            <tr
              className="cursor-pointer hover:bg-gray-100"
              key={employee.id}
              onClick={() => handleRowClick(employee.id)}
            >
              <td className="border px-4 py-2">{startIndex + index + 1}</td>
              <td className="border px-4 py-2">{employee.name}</td>
              <td className="border px-4 py-2">{employee.id}</td>
              <td className="border px-4 py-2">{employee.group}</td>
              <td className="border px-4 py-2">{employee.email}</td>
              <td className="border px-4 py-2">{employee.no_hp}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-between items-center mt-4">
        <div>
          Showing data {startIndex + 1} to {Math.min(endIndex, users.length)} of{" "}
          {users.length} entries
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
