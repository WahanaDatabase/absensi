import Charts from "@/components/dashboard/data-karyawan/Chart";
import Navbar from "@/components/dashboard/data-karyawan/Navbar";
import Image from "next/image";

function page() {
  return (
    <div className="flex-1 bg-[#FAFBFF]">
      <div className="text-[24px] p-8 pt-[41px] pl-[71px]">Main Dashboard</div>
      <div className="mt-[37px] bg-white flex w-[968px] px-12 py-8 mx-auto rounded-[30px] shadow-sm justify-between">
        <div className="flex space-x-8">
          <div className="w-[84px] h-[84px] relative ">
            <Image src="/group.png" fill alt="karyawan" />
          </div>
          <div className=" bg-white  justify-center flex flex-col ">
            <div className="text-[#ACACAC] text-[14px] font-normal">
              Jumlah Karyawan
            </div>
            <div className="flex items-start text-[32px] font-semibold">30</div>
          </div>
          <div className=" border-l border-[#F0F0F0] pl-10"></div>
        </div>
        <div className="flex space-x-8">
          <div className="w-[84px] h-[84px] relative ">
            <Image src="/group.png" fill alt="karyawan" />
          </div>
          <div className=" bg-white  justify-center flex flex-col ">
            <div className="text-[#ACACAC] text-[14px] font-normal">
              Jumlah Lokasi
            </div>
            <div className="flex items-start text-[32px] font-semibold">02</div>
          </div>
          <div className=" border-l border-[#F0F0F0] pl-10"></div>
        </div>
        <div className="flex space-x-8">
          <div className="w-[84px] h-[84px] relative ">
            <Image src="/group.png" fill alt="karyawan" />
          </div>
          <div className=" bg-white justify-center flex flex-col ">
            <div className="text-[#ACACAC] text-[14px] font-normal">
              Jumlah Group
            </div>
            <div className="flex items-start text-[32px] font-semibold">03</div>
          </div>
        </div>
      </div>
      <Charts />
    </div>
  );
}

export default page;
