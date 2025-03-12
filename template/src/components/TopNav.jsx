import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { HiMagnifyingGlass } from "react-icons/hi2";


const TopNav = () => {
  return (
    <div className="flex-1">
        <div className="flex items-center w-full p-5">
          {/* Left Section - Logo & Sidebar Toggle */}
          <div className="flex flex-col items-start space-y-2 block md:hidden">
            <RxHamburgerMenu className="text-2xl cursor-pointer" />
          </div>

          {/* Search Input - Takes Remaining Space */}
          <div className="flex-1 relative">
            <HiMagnifyingGlass className="absolute top-2.5 left-3 text-black" />
            <input
              type="text"
              className="w-full outline-none border rounded-full py-1.5 pl-8"
              placeholder="Search creators or topics"
            />
          </div>
        </div>
    </div>
  )
}

export default TopNav