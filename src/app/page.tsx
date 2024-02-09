import Image from "next/image";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <div className="bg-white">
      <Navbar />
      <div className="hero min-h-screen">
        <div className=" text-center text-neutral-content lg:text-right lg:mr-[700px] lg:mt-[100px]">
          <div className="w-full">
            <h1 className="text-white text-lg font-playfair mb-1 lg:text-2xl">KKN-PPM UGM 2024</h1>
            <h3 className="text-white text-3xl font-montserrat font-bold lg:text-7xl ">Siruntu Silayar</h3>
          </div>
        </div>
      </div>
      <div className="bg-white w-full my-5">
        <h1 className="text-[#76BFC2] font-qwitcher text-center text-3xl">Mengenal</h1>
        <h3 className="font-montserrat text-center text-3xl text-[#0D1E32] font-bold my-2">SIRUNTU SILAYAR</h3>
      </div>
      <div className="flex flex-col p-[10px] md:flex-row md:justify-center md:gap-10 md:items-center">
        <div className="items-center flex justify-center overflow-hidden md:w-[600px] md:h-[300px]">
          {/* <iframe className="w-full aspect-auto " src="https://youtu.be/e6gPcEA9oYI?si=qYbNvKwakFFsduRW"></iframe> */}
          <img src="./mengenal-sil.png" className="w-[100%] max-w-[500px] p-5 "></img>
        </div>
        <div className="items-center flex justify-center flex-col m-3 p-[10px] md:w-[600px] md:h-[300px]">
          <h1 className="text-[#E5BC7F] font-montserrat font-bold mb-8">Siruntu Silayar</h1>
          <p className="font-montserrat text-center px-2">
            merupakan tim KKN-PPM UGM 2024 yang berlokasi di Kecamatan Bontosikuyu, Kabupaten Kepulauan Selayar, Provinsi Sulawesi Selatan. Kecamatan ini memiliki beberapa desa. Desa Appatanah dan Desa Lowa merupakan beberapa desa yang
            dijadikan sebagai lokasi KKN oleh Tim Siruntu Selayar pada tahun 2024
          </p>
        </div>
      </div>
      <div className="bg-white w-full my-1">
        <h1 className="text-[#76BFC2] font-qwitcher text-center text-3xl">Mengulik</h1>
        <h3 className="font-montserrat text-center text-3xl text-[#0D1E32] font-bold my-1">TEMA</h3>
      </div>
      <div className="flex flex-col-reverse p-[10px] md:flex-row md:justify-center md:gap-10 md:items-center">
        <div className="items-center flex justify-center flex-col m-3 p-[10px] md:w-[600px] md:h-[300px]">
          <p className="font-montserrat text-center px-2">“Pengembangan Eco-Marine Tourism Berbasis Local Community Developtment melalui Optimalisasi Kapabilitas Desa sebagai Upaya Peningkatan Kualitas Hidup Masyakarat”</p>
        </div>
        <div className="items-center flex justify-center overflow-hidden md:w-[600px] md:h-[300px]">
          <img src="./Tema.png" className="w-[100%] max-w-[500px] p-5 "></img>
        </div>
      </div>
      <div className="bg-white w-full my-1">
        <h1 className="text-[#76BFC2] font-qwitcher text-center text-3xl">Makna</h1>
        <h3 className="font-montserrat text-center text-3xl text-[#0D1E32] font-bold my-1">LOGO KAMI</h3>
      </div>
      <div className="w-full flex justify-center py-[10px] items-center">
        <div className="flex justify-center overflow-hidden md:w-[600px] md:h-[300px]">
          <img src="./LOGO-BUN.png" className="w-[100%] max-w-[300px]  p-5 "></img>
        </div>
      </div>
      <div className="flex justify-center px-5 items-center">
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  ">
          <div className="w-[300px] h-[373px] border-solid border-2 rounded-[50px] shadow-lg p-[10px]  ">
            <div className="w-[280px] h-[350px] flex justify-center items-center flex-col pb-5">
              <img src="./Makna-ikan.png" className="w-[150px] h-[150px] mb-5"></img>
              <div className="w-[280px] h-[127px] flex justify-center items-center flex-col pb-5">
                <h5 className="text-xl font-montserrat font-bold mt-3">IKAN</h5>
                <p className="text-sm font-montserrat mt-2 text-center">Ikan melambangkan salah satu kekayaan alam sekaligus salah satu mata pencaharian utama masyarakat Kepulauan Selayar</p>
              </div>
            </div>
          </div>
          <div className="w-[300px] h-[373px] border-solid border-2 rounded-[50px] shadow-lg p-[10px]">
            <div className="w-[280px] h-[350px] flex justify-center items-center flex-col pb-5">
              <img src="./terumbu.png" className="w-[150px] h-[150px] mb-5"></img>
              <div className="w-[280px] h-[127px] flex justify-center items-center flex-col pb-5">
                <h5 className="text-xl font-montserrat font-bold mt-3">TERUMBU KARANG</h5>
                <p className="text-sm font-montserrat mt-2 text-center">Terumbu karang melambangkan salah satu kekayaan alam Kepulauan Selayar yang memiliki potensi pariwisata tinggi</p>
              </div>
            </div>
          </div>
          <div className="w-[300px] h-[373px] border-solid border-2 rounded-[50px] shadow-lg p-[10px]">
            <div className="w-[280px] h-[350px] flex justify-center items-center flex-col pb-5">
              <img src="./ombak.png" className="w-[150px] h-[150px] mb-5"></img>
              <div className="w-[280px] h-[127px] flex justify-center items-center flex-col pb-5">
                <h5 className="text-xl font-montserrat font-bold mt-3">OMBAK</h5>
                <p className="text-sm font-montserrat mt-2 text-center">Ombak melambangkan adanya sinergi dalam dinamika tim serta usaha kolaboratif dalam menghadapi berbagai tantyangan dan permasalahan yang ada</p>
              </div>
            </div>
          </div>
          <div className="w-[300px] h-[373px] border-solid border-2 rounded-[50px] shadow-lg p-[10px]">
            <div className="w-[280px] h-[350px] flex justify-center items-center flex-col pb-5">
              <img src="./Lingkaran-new.png" className="w-[150px] h-[150px] mb-5"></img>
              <div className="w-[280px] h-[127px] flex justify-center items-center flex-col pb-5">
                <h5 className="text-xl font-montserrat font-bold mt-3">LINGKARAN</h5>
                <p className="text-sm font-montserrat mt-2 text-center">Bentuk lingkaran sebagai perlambangan matahari memiliki makna yakni sinar harapan yang cerah serta kekuatan untuk melakukan perubahan</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
