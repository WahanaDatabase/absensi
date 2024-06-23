import { SignIn } from "@/components/sign-in";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-login bg-cover h-screen max-w-full text-white flex flex-col justify-center items-center">
      <div className="w-[247px] h-[229px] relative">
        <Image src="/img/logo-sm.png" fill alt="" />
      </div>
      <div className="text-center text-[33px] font-semibold mb-2">
        PT. WAHANAKARSA SWANDIRI
      </div>
      <div className="border-b border-2 w-[484px]" />
      <div className="text-center text-[29px] font-semibold mt-2 mb-8">
        CONSTRUCTION COMPANY
      </div>

      <SignIn />
    </main>
  );
}
