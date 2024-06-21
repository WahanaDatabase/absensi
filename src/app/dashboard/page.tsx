import Navbar from "@/components/dashboard/data-karyawan/Navbar";
import Image from "next/image";

function page() {
  return (
    <div className=" h-screen max-w-full bg-white text-black flex">
      <div className="flex-col">
        <div className="relative mt-[36px] ml-[24px] w-[279px] h-[78px]">
          <Image src="/logo.png" fill alt="" />
        </div>
        <Navbar />
      </div>
      <div className="flex-1 bg-[#FAFBFF]">
        <div className="text-[24px] p-8 pt-[41px] pl-[71px]">
          Main Dashboard
        </div>
        <div className="mt-[37px]">
          <div>
            <div></div>
            <div>
              <div>Jumlah karyawan</div>
              <div>30</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
