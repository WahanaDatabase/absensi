import ButtonTambahKaryawan from "@/components/dashboard/data-karyawan/ButtonTambahKaryawan";
import Navbar from "@/components/dashboard/data-karyawan/Navbar";
import Image from "next/image";

function page() {
  return (
    <div className="flex-1 bg-[#FAFBFF]">
      <div className="text-[24px]  pt-[41px] pl-[71px]">Data Karyawan</div>
      <ButtonTambahKaryawan />
    </div>
  );
}

export default page;
