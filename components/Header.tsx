import React from "react";

function Header() {
  return (
    <div className="flex justify-between items-center py-10 max-w-[1440px] w-full">
      <div className="flex gap-2 text-xl font-bold items-center">
        <div className="w-10 h-10 bg-blue-400  rounded-full flex justify-center items-center">
          <text className="text-white ">T</text>
        </div>
        <text>Trafalgar</text>
      </div>
      <div className="flex gap-12 text-gray-500 text-lg ">
        <button className="navButton">Home</button>
        <button className="navButton">Find a doctor</button>
        <button className="navButton">Apps</button>
        <button className="navButton">Testimonials</button>
        <button className="navButton">About us</button>
      </div>
    </div>
  );
}

export default Header;
