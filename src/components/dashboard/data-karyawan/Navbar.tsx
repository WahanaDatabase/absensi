import { signOut } from "@/auth";
import Image from "next/image";
import React from "react";
import NavItem from "./NavItem";
import KeySquare from "../../../../public/key-square.svg";
import UserSquare from "../../../../public/user-square.svg";
import Locate from "../../../../public/locate.svg";
import Register from "../../../../public/register.svg";
import Report from "../../../../public/report.svg";
import Out from "../../../../public/out.svg";
const navItems = [
  {
    label: "Dashboard",
    icon: <KeySquare />,
    path: "/dashboard",
    isDynamic: false,
  },
  {
    label: "Data Karyawan",
    icon: <UserSquare />,
    path: "/dashboard/data-karyawan",
    isDynamic: true,
  },
  {
    label: "Data Lokasi",
    icon: <Locate />,
    path: "/dashboard/data-lokasi",
    isDynamic: false,
  },
  {
    label: "Registrasi Karyawan",
    icon: <Register />,
    path: "/dashboard/registrasi-karyawan",
    isDynamic: false,
  },
  {
    label: "Laporan Absensi",
    icon: <Report />,
    path: "/dashboard/laporan-absensi",
    isDynamic: false,
  },
];

function Navbar(params: any) {
  return (
    <div className="text-[#9197B3] space-y-3 mt-[20px]">
      {navItems.map((item, index) => (
        <NavItem key={index} item={item} index={index} />
      ))}
      <div className="flex space-x-2 ml-[39px]">
        <div className="w-[24px] h-[24px] relative ">
          <Out />
        </div>
        <form
          action={async () => {
            "use server";
            await signOut({ redirectTo: "/" });
          }}
        >
          <button>Logout</button>
        </form>
      </div>
    </div>
  );
}

export default Navbar;
