import ButtonTambahKaryawan from "@/components/dashboard/data-karyawan/ButtonTambahKaryawan";
import Navbar from "@/components/dashboard/data-karyawan/Navbar";
import ShowEntries from "@/components/dashboard/data-karyawan/ShowEntries";
import Table from "@/components/dashboard/data-karyawan/Table";
import { getUsersFromDb } from "@/lib/getUsersFromDb";
import Image from "next/image";
import Link from "next/link";

async function Page() {
  const users = await getUsersFromDb();

  return (
    <div className="flex-1     bg-[#FAFBFF]">
      <div className="text-[24px] font-semibold  pt-[41px] pl-[71px]">
        Data Karyawan
      </div>
      <div className="flex items-center flex-col">
        <ButtonTambahKaryawan />

        <Table users={users} />
      </div>
    </div>
  );
}

export default Page;
