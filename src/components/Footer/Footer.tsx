import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#0D1E32] flex justify-center items-center mt-10">
      <div className=" w-[90%] mt-5 p-5">
        <div className="flex justify-center flex-col-reverse md:flex-row md:justify-between">
          <div className=" font-montserrat  p-2">
            <h1 className="text-[#E5BC7F] text-center pt-2 md:pt-0 pb-5  md:text-left font-bold font-2xl">SIRUNTU SILAYAR</h1>
            <h3 className="text-[#FFFFFF] text-center md:text-left font-xl">KKN PPM UNIVERSITAS GADJAH MADA</h3>
          </div>
          <div className="">
            <div className="font-montserrat  p-2">
              <h3 className="text-[#E5BC7F] text-center md:text-right font-bold font-2xl md:pb-0">DISELENGGARAKAN OLEH</h3>
            </div>
            <div className="flex justify-center items-center flex-row gap-5 p-2 mb:p-0">
              <div className="relative h-20 w-20 md:h-28 md:w-28">
                <img src="./Footer/ugm.png"></img>
              </div>
              <div className="relative h-20 w-20 md:h-28 md:w-28">
                <img src="./Footer/dpkm.png"></img>
              </div>
              <div className="relative h-20 w-20 md:h-28 md:w-28">
                <img src="./Footer/sirun-foot.png"></img>
              </div>
            </div>
          </div>
        </div>
        <div className="h-10 w-full"></div>
      </div>
    </div>
  );
};

export default Footer;
