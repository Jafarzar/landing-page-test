import Image from "next/image";
import React from "react";

function Hero() {
  return (
    <div className="flex items-center justify-between w-full max-w-[1440px]">
      <div className="flex flex-col gap-4 max-w-md">
        <text className="text-[48px] font-bold">
          Virtual healthcare for you
        </text>
        <text className="text-lg text-gray-500 pb-4">
          Trafalgar provides progressive, and affordable healthcare, accessible
          on mobile and online for everyone
        </text>
        <button className="w-fit bg-blue-500 py-3 px-10 rounded-full text-white text-sm">
          Consult today
        </button>
      </div>
      <div className="w-[800px] h-[700px] relative">
        <Image src="/img/illustration.svg" alt="hero" fill />
      </div>
    </div>
  );
}

export default Hero;
