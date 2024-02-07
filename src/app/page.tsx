import Image from "next/image";
import Navbar from "../components/Navbar/Navbar";

export default function Home() {
  return (
    <div className="bg-white">
      <Navbar />
      <div className="hero min-h-screen">
        <div className=" text-center text-neutral-content lg:text-right lg:mr-[700px] lg:mt-[100px]">
          <div className="w-full">
            <h1 className="text-white text-xl font-playfair mb-1 lg:text-2xl">KKN-PPM UGM 2024</h1>
            <h3 className="text-white text-5xl font-montserrat font-bold lg:text-7xl ">Siruntu Silayar</h3>
          </div>
        </div>
      </div>
      <div className="bg-white w-full my-2">
        <h1 className="text-[#76BFC2] font-qwitcher text-center text-5xl">Mengenal</h1>
        <h3 className="font-montserrat text-center text-3xl text-[#0D1E32] font-bold">SIRUNTU SILAYAR</h3>
      </div>
      <div className="border border-red-500 flex flex-col">
        <div className="border border-green-500 place-content-center">
          <img src="./mengenal-sil.png" className="w-[100%] max-w-[400px] p-5"></img>
        </div>
        <div className="border border-yellow-500"></div>
      </div>
    </div>
  );
}
