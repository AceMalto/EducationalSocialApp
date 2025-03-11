import React, { useState } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import { HiMagnifyingGlass } from "react-icons/hi2";

const Navbar = () => {
  return (
    <div className="flex items-center w-screen p-5 border">
      {/* Left Section - Logo & Sidebar */}
      <div className="flex flex-col items-start space-y-2">
        <RxHamburgerMenu className="text-2xl cursor-pointer" />
        <div className="hidden md:block"> {/* Removed h-screen */}
          asds
        </div>
      </div>

      {/* Search Input - Takes Remaining Space */}
      <div className="flex-1 relative">
        <HiMagnifyingGlass className="absolute top-2 left-3 text-gray-500" />
        <input
          type="text"
          className="w-full outline-none border rounded-full py-1.5 pl-8"
          placeholder="Search creators or topics"
        />
      </div>
    </div>
  );
};

export default Navbar;
