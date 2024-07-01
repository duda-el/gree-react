import React from "react";

export default function News() {
  return (
    <div className="w-full mt-10 px-8">
      <h2 className="text-4xl font-bold text-center text-blue-800 mb-4" style={{fontFamily: "tkt"}}>ბლოგი</h2>
      <div className="w-100 h-1 bg-blue-800 mb-4"></div>
      <div className="gap-2 grid grid-cols-12">
        <div className="relative col-span-12 sm:col-span-4 h-[300px] bg-cover bg-center" style={{ backgroundImage: "url('https://gree-bulgaria.com/wp-content/uploads/2022/02/smetki-klimatici-1.jpg')" }}>
          <div className="absolute z-10 bottom-0 flex-col items-start p-4 bg-black bg-opacity-50 backdrop-blur-md transition-all duration-300 hover:py-6 cursor-pointer">
            <p className="text-sm text-white/60 uppercase font-bold">Blog, Advice</p>
            <h4 className="text-white font-medium text-lg">MORE FAVORABLE ELECTRICITY BILL WITH GREE AIR CONDITIONERS</h4>
          </div>
        </div>
        <div className="relative col-span-12 sm:col-span-4 h-[300px] bg-cover bg-center" style={{ backgroundImage: "url('https://gree-bulgaria.com/wp-content/uploads/2021/12/thumb_850x480_5678.jpg')" }}>
          <div className="absolute z-10 bottom-0 flex-col items-start p-4 bg-black bg-opacity-50 backdrop-blur-md transition-all duration-300 hover:py-6 cursor-pointer">
            <p className="text-sm text-white/60 uppercase font-bold">Blog, News</p>
            <h4 className="text-white font-medium text-lg">GREE won the entrepreneur Richard Branson award for super-efficient residential climate solutions</h4>
          </div>
        </div>
        <div className="relative col-span-12 sm:col-span-4 h-[300px] bg-cover bg-center" style={{ backgroundImage: "url('https://gree-bulgaria.com/wp-content/uploads/2023/12/gree-plus-instrukcii.jpg')" }}>
          <div className="absolute z-10 bottom-0 flex-col items-start p-4 w-full bg-black bg-opacity-50 backdrop-blur-md transition-all duration-300 hover:py-6 cursor-pointer">
            <p className="text-sm text-white/60 uppercase font-bold">Blog, Advice</p>
            <h4 className="text-white font-medium text-lg">Instructions for working with GREE+</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
