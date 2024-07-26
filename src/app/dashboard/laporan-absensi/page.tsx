import Absensi from "@/components/dashboard/laporan-absensi/Absensi";
import { getAttendancesFromDb } from "@/lib/getAttendancesFromDb";

async function Page() {
  const attendances = await getAttendancesFromDb();
  return (
    <div className="flex-1 bg-[#FAFBFF]">
      <div className="text-[24px]  pt-[41px] pl-[71px]">Laporan Absensi</div>
      <Absensi attendances={attendances} />
    </div>
  );
}

export default Page;
