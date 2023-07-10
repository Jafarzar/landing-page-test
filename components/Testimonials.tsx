import Image from "next/image";
import React from "react";

function Testimonials() {
  return (
    <div className="flex flex-col justify-center items-center gap-8 w-[1200px] h-[440px] rounded-3xl bg-gradient-to-t from-blue-500 to-cyan-500 text-white">
      <text className="text-3xl font-bold">What our customer are saying</text>
      <div className="bg-white w-24 h-0.5"></div>
      <div className="flex gap-24 justify-center items-center px-32 pt-12">
        <div className="flex gap-4 justify-center items-center">
          <Image src={"/img/ava.png"} alt="avatar" width={140} height={140} />
          <div className="flex flex-col gap-2">
            <text className="text-lg font-bold">Edwards Newgate</text>
            <text className="">Founder Circle</text>
          </div>
        </div>
        <text className="w-[420px]">
          “Our dedicated patient engagement app and web portal allow you to
          access information instantaneously (no tedeous form, long calls, or
          administrative hassle) and securely”
        </text>
      </div>
    </div>
  );
}

export default Testimonials;
