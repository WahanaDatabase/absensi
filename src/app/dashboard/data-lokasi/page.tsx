import ButtonTambahLokasi from "@/components/dashboard/data-lokasi/ButtonTambahKaryawan";
import React from "react";

function page() {
  return (
    <div className="flex-1 bg-[#FAFBFF]">
      <div className="text-[24px]  pt-[41px] pl-[71px]">Data Karyawan</div>
      <ButtonTambahLokasi />
      <div className=" w-[968px] mt-[21px] shadow-sm h-[583px] ml-[71px] rounded-[30px] bg-white p-7">
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
          <div>
            <input
              type="text"
              placeholder="Search"
              className="border border-gray-300 rounded-md px-3 py-1"
            />
            <select className="ml-2 border border-gray-300 rounded-md px-2 py-1">
              <option>Newest</option>
              <option>Oldest</option>
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
            {[
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
            ].map((employee, index) => (
              <tr key={index}>
                <td className="border px-4 py-2">{employee.no}</td>
                <td className="border px-4 py-2">{employee.nama}</td>
                <td className="border px-4 py-2">{employee.id}</td>
                <td className="border px-4 py-2">{employee.group}</td>
                <td className="border px-4 py-2">{employee.email}</td>
                <td className="border px-4 py-2">{employee.phone}</td>
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
  );
}

export default page;
