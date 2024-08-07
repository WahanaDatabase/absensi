"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

function NavItem({ item, index }: any) {
  const pathname = usePathname();
  const router = useRouter();
  console.log(pathname);
  console.log(item.path);
  const isActive = item.isDynamic
    ? pathname.startsWith(item.path)
    : pathname === item.path;
  return (
    <div
      className={`flex space-x-2 ml-[39px] cursor-pointer hover:bg-[#5932EA] hover:p-2 w-[250px] hover:rounded-lg transition-all duration-300 hover:text-white hover:  ${
        isActive ? "text-white w-[250px] p-2 rounded-lg  bg-[#5932EA]" : ""
      }`}
      onClick={() => router.push(item.path)}
    >
      <div
        className={`w-[24px] h-[24px] relative ${
          pathname === item.path ? "text-white" : ""
        } `}
      >
        {item.icon}
      </div>
      <div>{item.label}</div>
    </div>
  );
}

export default NavItem;
