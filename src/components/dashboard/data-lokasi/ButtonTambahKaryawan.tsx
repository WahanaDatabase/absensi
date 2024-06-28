import Link from "next/link";
function ButtonTambahLokasi() {
  return (
    <div className="mt-[27px] ml-[71px] rounded-[4px] flex items-center justify-center bg-[#16C098]/[38%] w-[180px] h-[36px]">
      <p className=" text-[#008767] pr-2 font-bold  text-[24px]">+</p>

      <Link
        href={`/dashboard/registrasi-karyawan`}
        className=" text-[#008767]   text-[14px]"
      >
        {" "}
        Tambah Lokasi
      </Link>
    </div>
  );
}

export default ButtonTambahLokasi;
