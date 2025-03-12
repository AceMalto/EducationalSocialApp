// Navbar.jsx
import React from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { TbActivityHeartbeat } from "react-icons/tb";
import { FaRegBell } from "react-icons/fa";
import { LiaCogSolid } from "react-icons/lia";
import friend from "../assets/friend1.png"

const Navbar = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="hidden md:block w-72 h-screen bg-[#EEF1FB] text-white p-4 relative pt-12"> {/* Added relative here */}
        <h1 className=" text-center text-xl text-black font-bold">EduBridge</h1>
        <ul className="text-center text-gray-400 mt-4">
          <li className="flex items-center  pl-12 font-medium space-x-4 py-2 hover:bg-gray-700 rounded">
            <TbActivityHeartbeat />
            <a href="#home">Recent</a>
          </li>
          <li className="flex items-center pl-12 font-medium space-x-4 py-2 text-black hover:bg-gray-700 rounded">
            <HiMagnifyingGlass />
            <a href="#about"> Suggest Creators</a>
          </li>
          <li className="flex items-center pl-12 font-medium space-x-4 py-2 hover:bg-gray-700 rounded">
            <FaRegBell />
            <a href="#services">Notification</a>
          </li>
          <li className="flex items-center pl-12 font-medium space-x-4 py-2 hover:bg-gray-700 rounded">
            <LiaCogSolid />
            <a href="#contact">Settings</a>
          </li>
        </ul>

        <div className='absolute bottom-10 left-1/2 transform -translate-x-1/2'>
          <div className='flex flex-wrap justify-center bg-white text-black border w-56 h-52 rounded-3xl'>
            <img src={friend} alt="" className='w-36 h-36'/>
            <div className=' text-center'>
              <h1 className='text-sm font-medium'>Kitten Whiskekrs</h1>
              <span className='text-xs text-gray-400'>Level 3</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;