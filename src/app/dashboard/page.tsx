import Charts from "@/components/dashboard/data-karyawan/Chart";
import { getAttendancesFromDb } from "@/lib/getAttendancesFromDb";
import { getLocationsFromDb } from "@/lib/getLocationsFromDb";
import { getUsersFromDb } from "@/lib/getUsersFromDb";
import Image from "next/image";

async function page() {
  const users = await getUsersFromDb();
  const locations = await getLocationsFromDb();
  const attendances = await getAttendancesFromDb();
  const jumlahKaryawan = users.length;
  const jumlahLokasi = locations.length;
  const jumlahAbsensi = attendances.length;
  return (
    <div className="flex-1 bg-[#FAFBFF]">
      <div className="text-[24px] p-8 pt-[41px] pl-[71px]">Main Dashboard</div>
      <div className="mt-[37px] bg-white flex flex-col lg:flex-row w-full lg:w-[968px] px-6 lg:px-12 py-8 mx-auto rounded-[30px] shadow-sm justify-between space-y-6 lg:space-y-0">
        <div className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-8">
          <div className="w-[84px] h-[84px] relative mx-auto sm:mx-0">
            <Image src="/group.png" fill alt="karyawan" />
          </div>
          <div className="bg-white justify-center flex flex-col text-center sm:text-left">
            <div className="text-[#ACACAC] text-[14px] font-normal">
              Jumlah Karyawan
            </div>
            <div className="flex items-start justify-center sm:justify-start text-[32px] font-semibold">
              {jumlahKaryawan}
            </div>
          </div>
          <div className="border-l border-[#F0F0F0] hidden sm:block sm:pl-10"></div>
        </div>
        <div className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-8">
          <div className="w-[84px] h-[84px] relative mx-auto sm:mx-0">
            <Image src="/group.png" fill alt="karyawan" />
          </div>
          <div className="bg-white justify-center flex flex-col text-center sm:text-left">
            <div className="text-[#ACACAC] text-[14px] font-normal">
              Jumlah Lokasi
            </div>
            <div className="flex items-start justify-center sm:justify-start text-[32px] font-semibold">
              {jumlahLokasi}
            </div>
          </div>
          <div className="border-l border-[#F0F0F0] hidden sm:block sm:pl-10"></div>
        </div>
        <div className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-8">
          <div className="w-[84px] h-[84px] relative mx-auto sm:mx-0">
            <Image src="/group.png" fill alt="karyawan" />
          </div>
          <div className="bg-white justify-center flex flex-col text-center sm:text-left">
            <div className="text-[#ACACAC] text-[14px] font-normal">
              Jumlah Absensi
            </div>
            <div className="flex items-start justify-center sm:justify-start text-[32px] font-semibold">
              {jumlahAbsensi}
            </div>
          </div>
        </div>
      </div>
      <Charts attendances={attendances} />
    </div>
  );
}

export default page;
