import Image from "next/image";
import React from "react";

function Content() {
  return (
    <div className="flex flex-col gap-24 w-full max-w-[1440px]">
      <div className="flex gap-36 justify-start items-center">
        <Image
          src={"/img/content1.svg"}
          alt="content"
          width={650}
          height={477}
        />
        <div className="w-[450px] flex flex-col gap-8">
          <text className="text-4xl font-bold">
            Leading healthcare providers
          </text>
          <div className="bg-black w-24 h-0.5"></div>
          <text className="text-gray-500 mb-8">
            Trafalgar provides progressive, and affordable healthcare,
            accessible on mobile and online for everyone. To us, it’s not just
            work. We take pride in the solutions we deliver
          </text>
          <button className="text-lg font-bold rounded-full text-blue-500 border border-blue-500 py-3 px-10 w-fit">
            Learn more
          </button>
        </div>
      </div>
      <div className="flex gap-36 justify-end items-center">
        <div className="w-[450px] flex flex-col gap-8">
          <text className="text-4xl font-bold">Download our mobile apps</text>
          <div className="bg-black w-24 h-0.5"></div>
          <text className="text-gray-500 mb-8">
            Our dedicated patient engagement app and web portal allow you to
            access information instantaneously (no tedeous form, long calls, or
            administrative hassle) and securely
          </text>
          <button className="text-lg font-bold rounded-full text-blue-500 border border-blue-500 py-3 px-10 w-fit">
            Download
          </button>
        </div>
        <Image
          src={"/img/content2.svg"}
          alt="content"
          width={650}
          height={477}
        />
      </div>
    </div>
  );
}

export default Content;
