"use client";
import React from "react";
import { useEffect, useState } from "react";
import Image from "next/image";
interface Employee {
  no: number;
  nama: string;
  id: string;
  group: string;
  email: string;
  phone: string;
}
interface AttendanceRecord {
  tanggal: string;
  jamMasuk: string;
  jamKeluar: string;
  status: string;
  lokasi: string;
}

const attendanceRecords: AttendanceRecord[] = [
  {
    tanggal: "1",
    jamMasuk: "07:00",
    jamKeluar: "17:00",
    status: "Hadir",
    lokasi: "Proyek RUR",
  },
  {
    tanggal: "2",
    jamMasuk: "08:00",
    jamKeluar: "17:00",
    status: "Telat",
    lokasi: "Proyek RUR",
  },
  {
    tanggal: "3",
    jamMasuk: "07:00",
    jamKeluar: "17:00",
    status: "Hadir",
    lokasi: "Proyek RUR",
  },
  {
    tanggal: "4",
    jamMasuk: "--:--",
    jamKeluar: "--:--",
    status: "Sakit",
    lokasi: "Proyek RUR",
  },
  {
    tanggal: "5",
    jamMasuk: "--:--",
    jamKeluar: "--:--",
    status: "Alfa",
    lokasi: "Proyek RUR",
  },
  // Add more records as needed
];
const employees: Employee[] = [
  {
    no: 1,
    nama: "Jane Cooper",
    id: "7793641837",
    group: "Group 01",
    email: "email@email.com",
    phone: "081234567888",
  },
  {
    no: 2,
    nama: "Floyd Miles",
    id: "7741550886",
    group: "Group 01",
    email: "email@email.com",
    phone: "081234567888",
  },
  {
    no: 3,
    nama: "Ronald Richards",
    id: "1066786647",
    group: "Group 01",
    email: "email@email.com",
    phone: "081234567888",
  },
  {
    no: 4,
    nama: "Marvin McKinney",
    id: "8548296809",
    group: "Group 01",
    email: "email@email.com",
    phone: "081234567888",
  },
  {
    no: 5,
    nama: "Jerome Bell",
    id: "5170179009",
    group: "Group 02",
    email: "email@email.com",
    phone: "081234567888",
  },
  {
    no: 6,
    nama: "Kathryn Murphy",
    id: "7198222205",
    group: "Group 02",
    email: "email@email.com",
    phone: "081234567888",
  },
  {
    no: 7,
    nama: "Jacob Jones",
    id: "1271477212",
    group: "Group 02",
    email: "email@email.com",
    phone: "081234567888",
  },
  {
    no: 8,
    nama: "Kristin Watson",
    id: "2383508746",
    group: "Group 02",
    email: "email@email.com",
    phone: "081234567888",
  },
  {
    no: 9,
    nama: "Jacob Jones",
    id: "1271477212",
    group: "Group 03",
    email: "email@email.com",
    phone: "081234567888",
  },
  {
    no: 10,
    nama: "Kristin Watson",
    id: "2383508746",
    group: "Group 02",
    email: "email@email.com",
    phone: "081234567888",
  },
];

function Page({ params }: { params: { id: string } }) {
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

  const years: number[] = [];
  for (let i = new Date().getFullYear(); i >= 2000; i--) {
    years.push(i);
  }

  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [employee, setEmployee] = useState<Employee | null>(null);
  useEffect(() => {
    if (params.id) {
      const foundEmployee: any = employees.find((emp) => emp.id === params.id);
      setEmployee(foundEmployee);
    }
  }, [params.id]);

  if (!employee) {
    return <div>Loading...</div>;
  }
  return (
    <div className="flex-1 bg-[#FAFBFF] p-10 ">
      <div className="text-[24px] font-semibold mb-5">Detail Karyawan</div>
      <div className="w-full max-w-4xl mx-auto shadow-sm rounded-[30px] bg-white p-10">
        <div className="flex">
          <div className="flex-shrink-0 mr-10 w-20 h-20 relative">
            <Image
              src="/img/login.png" // Replace with the actual path to the image
              alt="Karyawan"
              fill
              className="w-32 h-32 object-cover rounded-full"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-bold mb-5">Data Karyawan</h2>
            <form className="space-y-5">
              <div>
                <input
                  type="text"
                  value={employee.nama}
                  readOnly
                  className="w-full border-b border-gray-300 px-3 py-2 mt-1"
                />
              </div>
              <div>
                <input
                  type="text"
                  value={employee.id}
                  readOnly
                  className="w-full border-b border-gray-300 px-3 py-2 mt-1"
                />
              </div>
              <div>
                <input
                  type="text"
                  value={employee.group}
                  readOnly
                  className="w-full border-b border-gray-300 px-3 py-2 mt-1"
                />
              </div>
              <div>
                <input
                  type="email"
                  value={employee.email}
                  readOnly
                  className="w-full border-b border-gray-300 px-3 py-2 mt-1"
                />
              </div>
              <div>
                <input
                  type="tel"
                  value={employee.phone}
                  readOnly
                  className="w-full border-b border-gray-300 px-3 py-2 mt-1"
                />
              </div>
              <div>
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full border-b border-gray-300 px-3 py-2 mt-1"
                />
              </div>
              <button
                type="submit"
                className="bg-green-500 text-white px-5 py-2 rounded-md"
              >
                Edit
              </button>
            </form>
          </div>
        </div>
        <div className="mt-10">
          <div className="text-xl font-semibold mb-5">Riwayat Absensi</div>
          <div className="flex justify-between items-center mb-5">
            <div className="flex items-center">
              <div className="text-[#ACACAC] text-[14px] font-normal">
                Bulan
              </div>
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
            <button className="bg-green-500 text-white px-5 py-2 rounded-md">
              Tampilkan Data
            </button>
          </div>
          <div className="flex justify-between items-center mb-4">
            <div>
              Show
              <select className="ml-2 border border-gray-300 rounded-md px-2 py-1">
                <option>10</option>
                <option>25</option>
                <option>50</option>
                <option>100</option>
              </select>{" "}
              entries
            </div>
          </div>
          <table className="min-w-full border border-gray-300">
            <thead>
              <tr>
                <th className="border-b p-3 text-left">Tanggal</th>
                <th className="border-b p-3 text-left">Jam Masuk</th>
                <th className="border-b p-3 text-left">Jam Keluar</th>
                <th className="border-b p-3 text-left">Status</th>
                <th className="border-b p-3 text-left">Lokasi</th>
              </tr>
            </thead>
            <tbody>
              {attendanceRecords.map((record, index) => (
                <tr key={index}>
                  <td className="border-b p-3">{record.tanggal}</td>
                  <td className="border-b p-3">{record.jamMasuk}</td>
                  <td className="border-b p-3">{record.jamKeluar}</td>
                  <td className="border-b p-3">
                    <span
                      className={`px-3 py-1 rounded-full text-white ${
                        record.status === "Hadir"
                          ? "bg-green-500"
                          : record.status === "Telat"
                          ? "bg-yellow-500"
                          : record.status === "Sakit"
                          ? "bg-blue-500"
                          : record.status === "Alfa"
                          ? "bg-red-500"
                          : ""
                      }`}
                    >
                      {record.status}
                    </span>
                  </td>
                  <td className="border-b p-3">{record.lokasi}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-between items-center mt-4">
            <div>Showing data 1 to 8 of 256K entries</div>
            <div className="flex">
              <button className="border border-gray-300 px-3 py-1 rounded-md mx-1">
                1
              </button>
              <button className="border border-gray-300 px-3 py-1 rounded-md mx-1">
                2
              </button>
              <button className="border border-gray-300 px-3 py-1 rounded-md mx-1">
                3
              </button>
              <button className="border border-gray-300 px-3 py-1 rounded-md mx-1">
                4
              </button>
              <button className="border border-gray-300 px-3 py-1 rounded-md mx-1">
                ...
              </button>
              <button className="border border-gray-300 px-3 py-1 rounded-md mx-1">
                40
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
