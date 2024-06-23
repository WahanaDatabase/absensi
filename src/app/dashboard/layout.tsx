import Navbar from "@/components/dashboard/data-karyawan/Navbar";
import Image from "next/image";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className=" h-screen max-w-full bg-white text-black flex">
        <div className="flex-col shadow-sm">
          <div className="relative mt-[36px] ml-[24px] w-[271px] h-[78px]">
            <Image src="/logo.png" fill alt="" />
          </div>
          <Navbar />
        </div>
        {children}
      </div>
    </>
  );
}
