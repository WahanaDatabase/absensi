import ButtonTambahLokasi from "@/components/dashboard/data-lokasi/ButtonTambahKaryawan";
import Table from "@/components/dashboard/data-lokasi/Table";
import { getLocationsFromDb } from "@/lib/getLocationsFromDb";
import React from "react";

async function page() {
  const locations = await getLocationsFromDb();
  return (
    <div className="flex-1 bg-[#FAFBFF]">
      <div className="text-[24px]  pt-[41px] pl-[71px]">Data Karyawan</div>
      <ButtonTambahLokasi />
      <Table locations={locations} />
    </div>
  );
}

export default page;
