import ButtonTambahKaryawan from "@/components/dashboard/data-karyawan/ButtonTambahKaryawan";
import Image from "next/image";

function Page() {
  return (
    <div className="flex-1 bg-[#FAFBFF] p-10">
      <div className="text-[24px] font-semibold mb-5">Tambahkan Karyawan</div>
      <div className="w-full max-w-4xl mx-auto shadow-sm rounded-[30px] bg-white p-10">
        <div className="flex">
          <div className="flex-shrink-0 mr-10 w-20 h-20 relative">
            <Image
              src="/img/login.png" // Replace with the actual path to the image
              alt="Karyawan"
              fill
              className="w-32 h-32 object-cover rounded-full "
            />
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-bold mb-5">Data Karyawan</h2>
            <form className="space-y-5">
              <div>
                <input
                  type="text"
                  placeholder="Nama Karyawan"
                  className="w-full border-b border-gray-300 px-3 py-2 mt-1"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="ID Karyawan"
                  className="w-full border-b border-gray-300 px-3 py-2 mt-1"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Group"
                  className="w-full border-b border-gray-300 px-3 py-2 mt-1"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full border-b border-gray-300 px-3 py-2 mt-1"
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="No HP"
                  className="w-full border-b border-gray-300 px-3 py-2 mt-1"
                />
              </div>
              <div>
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full border-b border-gray-300 px-3 py-2 mt-1"
                />
              </div>
              <button
                type="submit"
                className="bg-green-500 text-white px-5 py-2 rounded-md"
              >
                Tambah
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
