// import React from 'react'
// import { BiLike } from "react-icons/bi";
// import { BsThreeDots } from "react-icons/bs";
// import { HiOutlineShare } from "react-icons/hi";
// import { FaPlus, FaEllipsisH, FaPen } from "react-icons/fa";

// const CardProfile = [
//     {
//         "image": "https://4kwallpapers.com/images/wallpapers/astronaut-space-suit-crescent-moon-half-moon-surface-moon-5k-1280x1280-8128.jpeg",
//         "title": "Renders starting to come for Aprils release",
//         "Desc": "This change does not bring any change in the content that we are delivering every moth or the pricing",
//     }
// ]

// const ClientDash = () => {
//   return (
//     <div className="flex justify-center bg-gray-100 min-h-screen p-6">
//       {/* Main Card */}
//       <div className="bg-white w-full max-w-4xl rounded-xl shadow-lg">
//         {/* Cover Section */}
//         <div className="relative">
//           <div className="bg-blue-300 h-32 w-full rounded-t-xl"></div>
//           <button className="absolute top-2 left-4 bg-white px-3 py-1 text-sm rounded-md shadow-md">
//             Add Cover
//           </button>
//           <button className="absolute top-2 right-4 bg-white p-2 rounded-full shadow-md">
//             <FaEllipsisH />
//           </button>
//           {/* Profile Image */}
//           <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2">
//             <div className="w-20 h-20 rounded-full border-4 border-white bg-gray-300 flex items-center justify-center text-xl">
//               🧑‍🎨
//             </div>
//             <button className="absolute bottom-1 right-1 bg-white p-1 rounded-full shadow">
//               <FaPlus />
//             </button>
//           </div>
//         </div>

//         {/* Profile Info */}
//         <div className="text-center mt-12">
//           <h2 className="text-xl font-semibold">Mage Hand Press ✅</h2>
//           <p className="text-gray-500 text-sm flex justify-center items-center gap-1">
//             High-quality digital assets <FaPen className="text-gray-400 text-xs" />
//           </p>
//           <p className="text-blue-500 text-sm">callibri.com/YourURL</p>
//         </div>

//         {/* Tabs Section */}
//         <div className="flex justify-center space-x-4 mt-4 border-b border-gray-300 pb-2">
//           {["Home", "Collections", "Shop", "About", "Memberships", "Tips"].map(
//             (tab, index) => (
//               <button key={index} className="text-gray-600 hover:text-black px-3 py-1">
//                 {tab}
//               </button>
//             )
//           )}
//         </div>

//         {/* Description Section */}
//         <div className="text-center px-6 py-4">
//           <h3 className="text-lg font-semibold">Let’s Get Started</h3>
//           <p className="text-gray-500 text-sm">
//             Start your blogging journey today by sharing passions with the world and 
//             begin building a community that supports your creativity.
//           </p>
//           <button className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg">
//             Create Post
//           </button>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default ClientDash

// import React from 'react'
// import { FaPlus, FaEllipsisH, FaPen } from "react-icons/fa";

// const ClientDash = () => {
//   return (
//     <div className="flex justify-center bg-gray-100 min-h-screen p-4 md:p-6">
//       {/* Main Card */}
//       <div className="bg-white w-full max-w-5xl xl:max-w-7xl rounded-xl shadow-lg">
//         {/* Cover Section */}
//         <div className="relative">
//           <div className="bg-blue-300 h-28 md:h-40 xl:h-56 w-full rounded-t-xl z-0 relative"></div>
//           <button className="absolute top-2 left-4 bg-white px-3 py-1 text-sm rounded-md shadow-md">
//             Add Cover
//           </button>
//           <button className="absolute top-2 right-4 bg-white p-2 rounded-full shadow-md">
//             <FaEllipsisH />
//           </button>
//           {/* Profile Image */}
//           <div className="absolute -bottom-14 left-1/2 transform -translate-x-1/2 z-0">
//             <div className="w-20 h-20 md:w-28 md:h-28 xl:w-36 xl:h-36 rounded-full border-4 border-white bg-gray-300 flex items-center justify-center text-3xl">
//               🧑‍🎨
//             </div>
//             <button className="absolute bottom-1 right-1 bg-white p-2 rounded-full shadow">
//               <FaPlus className="text-sm" />
//             </button>
//           </div>
//         </div>

//         {/* Profile Info */}
//         <div className="text-center mt-16 xl:mt-20">
//           <h2 className="text-lg md:text-2xl font-semibold">Mage Hand Press ✅</h2>
//           <p className="text-gray-500 text-sm md:text-base flex justify-center items-center gap-1">
//             High-quality digital assets <FaPen className="text-gray-400 text-xs" />
//           </p>
//           <p className="text-blue-500 text-sm md:text-base">callibri.com/YourURL</p>
//         </div>

//         {/* Tabs Section */}
//         <div className="flex justify-center space-x-4 mt-6 border-b border-gray-300 pb-3 overflow-x-auto">
//           {["Home", "Collections", "Shop", "About", "Memberships", "Tips"].map(
//             (tab, index) => (
//               <button key={index} className="text-gray-600 hover:text-black px-3 md:px-4 py-1 text-base md:text-lg">
//                 {tab}
//               </button>
//             )
//           )}
//         </div>

//         {/* Description Section */}
//         <div className="text-center px-6 md:px-12 xl:px-24 py-6">
//           <h3 className="text-lg md:text-2xl font-semibold">Let’s Get Started</h3>
//           <p className="text-gray-500 text-sm md:text-lg">
//             Start your blogging journey today by sharing passions with the world and 
//             begin building a community that supports your creativity.
//           </p>
//           <button className="mt-6 bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 text-base md:text-lg rounded-lg">
//             Create Post
//           </button>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default ClientDash;


import React from 'react';
import { FaPlus, FaEllipsisH, FaPen } from "react-icons/fa";
import { HiOutlineShare } from "react-icons/hi";
import { BsThreeDots } from "react-icons/bs";

const ClientDash = () => {
  return (
    <div className="flex justify-center bg-white min-h-screen p-4 md:p-6">
      {/* Main Card */}
      <div className="w-full max-w-5xl xl:max-w-7xl rounded-xl">
        <div className="grid place-items-center">
          <div className="flex justify-between p-3 bg-[#46D1DD] h-28 md:h-40 xl:h-48 w-full rounded-3xl">
            <button className='bg-white text-sm font-medium w-32 h-10 p-2 rounded-full'>
              Add Cover
            </button>
            <div className='flex space-x-2'>
              <BsThreeDots className='bg-white w-10 h-10 p-2 rounded-full'/>
              <HiOutlineShare className='bg-white w-10 h-10 p-2 rounded-full' />
            </div>
          </div>
        
          <div className="flex flex-col items-center -mt-10">
            <div className="w-20 h-20 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full border-4 border-white bg-gray-300 flex items-center justify-center text-3xl">
              🧑‍🎨
            </div>
            <button className="-mt-8 md:-mt-9 lg:-mt-9 xl:-mt-10 ml-12 md:ml-20 xl:ml-24 bg-white p-2 rounded-full shadow">
               <FaPlus className="text-sm" />
             </button>
          </div>
        </div>

        

        {/* Profile Info */}
        <div className="text-center mt-6">
          <h2 className="text-lg md:text-xl font-semibold">Mage Hand Press</h2>
          <p className="text-gray-500 text-sm md:text-base flex justify-center items-center gap-1">
            High-quality digital assets <FaPen className="text-gray-400 text-xs" />
          </p>
          <p className="text-blue-500 text-sm md:text-base">callibri.com/YourURL</p>
        </div>

        {/* Tabs Section */}
        <div className="flex justify-center space-x-4 mt-6 border-gray-300 pb-3 overflow-x-auto">
          {["Home", "Collections", "Shop", "About", "Memberships", "Tips"].map(
            (tab, index) => (
              <button key={index} className="text-gray-600 border rounded-full shadow-md hover:text-black px-3 md:px-4 py-1 text-base md:text-lg">
                {tab}
              </button>
            )
          )}
        </div>


        {/* Description Section */}
        <div className="text-center px-6 md:px-12 xl:px-24 py-6">
          <h3 className="text-lg md:text-xl font-semibold">Let’s Get Started</h3>
          <p className="text-gray-500 text-sm mt-3">
            Start your blogging journey today by sharing passions with the world and 
            begin building a community that supports your creativity.
          </p>
          <button className="mt-3 bg-yellow-400 hover:bg-yellow-500 text-white px-6 py-2 text-base md:text-lg rounded-full">
            Create Post
          </button>
        </div>
      </div>
    </div>
  );
}

export default ClientDash;
