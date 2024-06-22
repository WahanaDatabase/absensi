import { signOut } from "@/auth";
import Image from "next/image";
import React from "react";

function Navbar() {
  return (
    <div className="text-[#9197B3] space-y-3 mt-[20px]">
      <div className="flex space-x-2 ml-[39px]">
        <div className="w-[24px] h-[24px] relative">
          <Image src="/key-square.svg" fill alt="" />
        </div>
        <div>Dashboard</div>
      </div>
      <div className="flex space-x-2 ml-[39px]">
        <div className="w-[24px] h-[24px] relative">
          <Image src="/key-square.svg" fill alt="" />
        </div>
        <div>Data Karyawan</div>
      </div>
      <div className="flex space-x-2 ml-[39px]">
        <div className="w-[24px] h-[24px] relative">
          <Image src="/key-square.svg" fill alt="" />
        </div>
        <div>Data Lokasi</div>
      </div>
      <div className="flex space-x-2 ml-[39px]">
        <div className="w-[24px] h-[24px] relative">
          <Image src="/key-square.svg" fill alt="" />
        </div>
        <div>Registrasi Karyawan</div>
      </div>
      <div className="flex space-x-2 ml-[39px]">
        <div className="w-[24px] h-[24px] relative">
          <Image src="/key-square.svg" fill alt="" />
        </div>
        <div>Laporan Absensi</div>
      </div>
      <div className="flex space-x-2 ml-[39px]">
        <div className="w-[24px] h-[24px] relative">
          <Image src="/key-square.svg" fill alt="" />
        </div>
        <form
          action={async () => {
            "use server";
            await signOut({ redirectTo: "/" });
          }}
        >
          <button>Log Out</button>
        </form>
      </div>
    </div>
  );
}

export default Navbar;
