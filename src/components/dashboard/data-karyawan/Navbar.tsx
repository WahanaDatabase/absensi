import { signOut } from "@/auth";
import Image from "next/image";
import React from "react";
import NavItem from "./NavItem";
const navItems = [
  { label: "Dashboard", icon: "/key-square.svg", path: "/dashboard" },
  {
    label: "Data Karyawan",
    icon: "/key-square.svg",
    path: "/dashboard/data-karyawan",
  },
  { label: "Data Lokasi", icon: "/key-square.svg", path: "/data-lokasi" },
  {
    label: "Registrasi Karyawan",
    icon: "/key-square.svg",
    path: "/registrasi-karyawan",
  },
  {
    label: "Laporan Absensi",
    icon: "/key-square.svg",
    path: "/laporan-absensi",
  },
];
function Navbar() {
  return (
    <div className="text-[#9197B3] space-y-3 mt-[20px]">
      {navItems.map((item, index) => (
        <NavItem key={index} item={item} index={index} />
      ))}
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
