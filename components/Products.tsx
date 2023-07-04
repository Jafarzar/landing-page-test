import React from "react";

function Products() {
  return (
    <div className="flex flex-col w-full max-w-[1440px] items-center">
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
      <div></div>
      <button className="text-lg font-bold rounded-full text-blue-500 border border-blue-500 py-3 px-10">
        Learn more
      </button>
    </div>
  );
}

export default Products;
