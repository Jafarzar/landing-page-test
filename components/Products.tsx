import Image from "next/image";
import React from "react";

function Products() {
  return (
    <div className="flex flex-col gap-24 w-full max-w-[1440px] items-center">
      <div className="flex flex-col text-center gap-8 items-center max-w-5xl">
        <text className="text-[36px] font-bold">Our services</text>
        <div className="bg-black w-32 h-0.5"></div>
        <text className="text-lg text-gray-500">
          We provide to you the best choiches for you. Adjust it to your health
          needs and make sure your undergo treatment with our highly qualified
          doctors you can consult with us which type of service is suitable for
          your health
        </text>
      </div>
      <div className="grid gap-8 grid-cols-3 grid-rows-2">
        <div className="flex flex-col gap-4 p-10 w-[350px] h-[350px] shadow-md rounded-2xl">
          <Image src={"/img/Frame.svg"} alt="product" width={90} height={90} />
          <text className="mt-8 text-xl font-bold">Search doctor</text>
          <text className="text-gray-500">
            Choose your doctor from thousands of specialist, general, and
            trusted hospitals
          </text>
        </div>
        <div className="flex flex-col gap-4 p-10 w-[350px] h-[350px] shadow-md rounded-2xl">
          <Image src={"/img/Frame2.svg"} alt="product" width={70} height={90} />
          <text className="mt-6 text-xl font-bold">Online pharmacy</text>
          <text className="text-gray-500">
            Buy your medicines with our mobile application with a simple
            delivery system
          </text>
        </div>
        <div className="flex flex-col gap-4 p-10 w-[350px] h-[350px] shadow-md rounded-2xl">
          <Image src={"/img/Frame3.svg"} alt="product" width={70} height={90} />
          <text className="mt-6 text-xl font-bold">Consultation</text>
          <text className="text-gray-500">
            Free consultation with our trusted doctors and get the best
            recomendations
          </text>
        </div>
        <div className="flex flex-col gap-4 p-10 w-[350px] h-[350px] shadow-md rounded-2xl">
          <Image src={"/img/Frame4.svg"} alt="product" width={70} height={90} />
          <text className="mt-6 text-xl font-bold">Details info</text>
          <text className="text-gray-500">
            Free consultation with our trusted doctors and get the best
            recomendations
          </text>
        </div>
        <div className="flex flex-col gap-4 p-10 w-[350px] h-[350px] shadow-md rounded-2xl">
          <Image src={"/img/Frame5.svg"} alt="product" width={90} height={90} />
          <text className="mt-8 text-xl font-bold">Emergency care</text>
          <text className="text-gray-500">
            You can get 24/7 urgent care for yourself or your children and your
            lovely family
          </text>
        </div>
        <div className="flex flex-col gap-4 p-10 w-[350px] h-[350px] shadow-md rounded-2xl">
          <Image src={"/img/Group.svg"} alt="product" width={70} height={90} />
          <text className="mt-6 text-xl font-bold">Tracking</text>
          <text className="text-gray-500">
            Track and save your medical history and health data
          </text>
        </div>
      </div>
      <button className="text-lg font-bold rounded-full text-blue-500 border border-blue-500 py-3 px-10">
        Learn more
      </button>
    </div>
  );
}

export default Products;
