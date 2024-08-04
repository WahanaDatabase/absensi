import Link from "next/link";
function ButtonTambahKaryawan() {
  return (
    <div className="mt-[27px] rounded-[4px] self-start flex items-center ml-[71px] sm:ml-[71px] md:ml-[71px] lg:ml-[71px] xl:ml-[71px] 2xl:ml-[250px] justify-center bg-[#16C098]/[38%] w-[180px] h-[36px]">
      <p className=" text-[#008767] pr-2 font-bold  text-[24px]">+</p>

      <Link
        href={`/dashboard/registrasi-karyawan`}
        className=" text-[#008767]   text-[14px]"
      >
        {" "}
        Tambah Karyawan
      </Link>
    </div>
  );
}

export default ButtonTambahKaryawan;
