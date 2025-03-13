import React from 'react'
import { BiLike } from "react-icons/bi";
import { BsThreeDots } from "react-icons/bs";
const Recents = () => {
  return (
    <div className='flex-wrap px-10 space-y-10 h-screen'>
        <div className='flex items-center pt-12 space-x-5'>
            <div>
                <img src="" alt="" className='border w-16 h-16 rounded-full'/>
            </div>
            <div>
                <h1 className=' font-medium'>
                    Mage Hand Press
                </h1>
                <p className=' text-xs text-gray-400'>
                    High Quality Digital Assets
                </p>
            </div>
        </div>

        <div className=' relative border rounded-3xl w-full h-64 shadow-lg overflow-hidden'>
            <div className='absolute flex space-x-3 p-2.5'>
                <BiLike className='bg-white rounded-full border p-2 w-10 h-10'/>
                <BsThreeDots className='bg-white rounded-full border p-2 w-10 h-10'/>
            </div>

            <div className='absolute right-3 top-3 rounded-3xl bg-slate-50 border border-white w-64 h-56'>
                <div className="flex flex-col items-center justify-center h-full">
                    <h1 className=' font-medium text-sm text-center'>Renders starting to come for Aprils release</h1>
                    <p className=' text-xs text-justify'>This change does not bring any change in the content that we are delivering every moth or the pricing</p>
                </div>
            </div>

            <img src="https://4kwallpapers.com/images/wallpapers/astronaut-space-suit-crescent-moon-half-moon-surface-moon-5k-1280x1280-8128.jpeg" alt="" 
            className='w-full h-full object-cover'/>
        </div>
    </div>
  )
}

export default Recents