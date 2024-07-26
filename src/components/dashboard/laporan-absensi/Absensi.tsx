"use client";
import Link from "next/link";
import React, { useState } from "react";
import ShowEntries from "./ShowEntries";
import { Attendance } from "@prisma/client";
import { useRouter } from "next/navigation";

function Absensi({ attendances }: any) {
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

  // Aggregate attendance data
  const aggregatedData = attendances.reduce((acc: any, attendance: any) => {
    const id = attendance.id_karyawan;

    // Initialize the data if it's not already present
    if (!acc[id]) {
      acc[id] = {
        id,
        name: attendance.Employee.name,
        group: attendance.Employee.group,
        Hadir: 0,
        Izin: 0,
        Alpha: 0,
        Telat: 0,
        Missed: 0,
      };
    }

    // Increment the count for the current status
    switch (attendance.status) {
      case "HADIR":
        acc[id].Hadir++;
        break;
      case "IZIN":
        acc[id].Izin++;
        break;
      case "ALPHA":
        acc[id].Alpha++;
        break;
      case "TELAT":
        acc[id].Telat++;
        break;
      case "MISSED":
        acc[id].Missed++;
        break;
      default:
        break;
    }

    return acc;
  }, {});

  // Convert aggregated data to an array
  const aggregatedArray = Object.values(aggregatedData);

  // Filter users based on search term
  const filteredUsers = aggregatedArray.filter((user: any) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Sort users based on sortOrder
  const sortedUsers = filteredUsers.sort((a: any, b: any) => {
    if (sortOrder === "Newest") {
      return Number(new Date(b.date)) - Number(new Date(a.date)); // Ensure 'date' exists or replace with appropriate field
    } else {
      return Number(new Date(a.date)) - Number(new Date(b.date));
    }
  });

  const totalPages = Math.ceil(sortedUsers.length / entriesToShow);
  const startIndex = (currentPage - 1) * entriesToShow;
  const endIndex = startIndex + entriesToShow;
  const paginatedUsers = sortedUsers.slice(startIndex, endIndex);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const years = [];
  for (let i = new Date().getFullYear(); i >= 2000; i--) {
    years.push(i);
  }

  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedYear, setSelectedYear] = useState("");

  return (
    <div className="mb-10 flex flex-col">
      <div className="mt-[12px] bg-white flex w-[968px] px-12 py-3 mx-auto rounded-[30px] shadow-sm justify-between">
        <div className="flex space-x-8">
          <div className="bg-white justify-center flex items-center">
            <div className="text-[#ACACAC] text-[14px] font-normal">Bulan</div>
            <select
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
              className="ml-2 border border-gray-300 rounded-md px-2 py-1"
            >
              <option value="" disabled>
                Pilih Bulan
              </option>
              {months.map((month, index) => (
                <option key={index} value={month}>
                  {month}
                </option>
              ))}
            </select>
            <div className="text-[#ACACAC] text-[14px] font-normal ml-4">
              Tahun
            </div>
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="ml-2 border border-gray-300 rounded-md px-2 py-1"
            >
              <option value="" disabled>
                Pilih Tahun
              </option>
              {years.map((year, index) => (
                <option key={index} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex space-x-8 items-center justify-center">
          <div className="ml-[71px] rounded-[4px] flex items-center justify-center bg-[#16C098]/[38%] w-[180px] h-[36px]">
            <Link
              href={`/dashboard/registrasi-karyawan`}
              className="text-[#008767] text-[14px]"
            >
              Download
            </Link>
          </div>
        </div>
      </div>
      <div className="w-[968px] mt-[15px] shadow-sm ml-[71px] rounded-[30px] bg-white p-7">
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
              <th className="border px-4 py-2">Hadir</th>
              <th className="border px-4 py-2">Izin</th>
              <th className="border px-4 py-2">Alpha</th>
              <th className="border px-4 py-2">Telat</th>
              <th className="border px-4 py-2">Missed</th>
            </tr>
          </thead>
          <tbody>
            {paginatedUsers.map((employee: any, index: any) => (
              <tr key={index}>
                <td className="border px-4 py-2">{startIndex + index + 1}</td>
                <td className="border px-4 py-2">{employee.name}</td>
                <td className="border px-4 py-2">{employee.id}</td>
                <td className="border px-4 py-2">{employee.group}</td>
                <td className="border px-4 py-2">{employee.Hadir}</td>
                <td className="border px-4 py-2">{employee.Izin}</td>
                <td className="border px-4 py-2">{employee.Alpha}</td>
                <td className="border px-4 py-2">{employee.Telat}</td>
                <td className="border px-4 py-2">{employee.Missed}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-between items-center mt-4">
          <div>
            Showing data {startIndex + 1} to{" "}
            {startIndex + paginatedUsers.length} of {aggregatedArray.length}{" "}
            entries
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
    </div>
  );
}

export default Absensi;
