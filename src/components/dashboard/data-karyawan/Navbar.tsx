import { signOut } from "@/auth";
import Image from "next/image";
import React from "react";
import NavItem from "./NavItem";
import KeySquare from "../../../../public/key-square.svg";
const navItems = [
  { label: "Dashboard", icon: <KeySquare />, path: "/dashboard" },
  {
    label: "Data Karyawan",
    icon: <KeySquare />,
    path: "/dashboard/data-karyawan",
  },
  {
    label: "Data Lokasi",
    icon: <KeySquare />,
    path: "/dashboard/data-lokasi",
  },
  {
    label: "Registrasi Karyawan",
    icon: <KeySquare />,
    path: "/dashboard/registrasi-karyawan",
  },
  {
    label: "Laporan Absensi",
    icon: <KeySquare />,
    path: "/dashboard/laporan-absensi",
  },
];
function Navbar() {
  return (
    <div className="text-[#9197B3] space-y-3 mt-[20px]">
      {navItems.map((item, index) => (
        <NavItem key={index} item={item} index={index} />
      ))}
      <div className="flex space-x-2 ml-[39px]">
        <div className="w-[24px] h-[24px] relative ">
          <KeySquare />
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
