import React from 'react'
import { BiLike } from "react-icons/bi";
import { BsThreeDots } from "react-icons/bs";
import { HiOutlineShare } from "react-icons/hi";

const CardProfile = [
    {
        "image": "https://4kwallpapers.com/images/wallpapers/astronaut-space-suit-crescent-moon-half-moon-surface-moon-5k-1280x1280-8128.jpeg",
        "title": "Renders starting to come for Aprils release",
        "Desc": "This change does not bring any change in the content that we are delivering every moth or the pricing",
    }
]

const ClientDash = () => {
  return (
    <div className='flex-wrap px-7 overflow-y-scroll h-screen pt-5'>
        {
            CardProfile.map((card, index) => (
                <div key={index} className=' relative border rounded-3xl w-full h-72 shadow-lg overflow-hidden'>
                    <div className='absolute z-10 flex space-x-3 p-2.5'>
                        <BiLike className='bg-white rounded-full border p-2 w-10 h-10'/>
                        <BsThreeDots className='bg-white rounded-full border p-2 w-10 h-10'/>
                    </div>
                    <div className='absolute flex-wrap right-2 z-10 flex space-x-3 p-2.5'>
                        <BsThreeDots className='bg-white rounded-full border p-2 w-10 h-10'/>
                        <HiOutlineShare className='bg-white rounded-full border p-2 w-10 h-10'/>
                    </div>
                    {/* <div className='absolute z-10 right-3 top-3 rounded-3xl bg-slate-50 border border-white w-64 h-56 px-5'>
                        <div className="flex flex-col items-center justify-center h-full space-y-2">
                            <h1 className=' font-medium text-sm text-center'>{card.title}</h1>
                            <p className=' text-xs text-center'>{card.Desc}</p>
                        </div>
                    </div> */}
                    <img src={card.image} alt="" 
                    className={`w-full h-full object-cover ${card.blur}`}/>
                </div>
            ))
        }
        <div className='absolute left-[56%] -mt-11'>
            <div className='flex flex-col space-y-2 items-center justify-center'>
                <img src="" alt="" className='border-2 border-orange-400 w-24 h-24 rounded-full'/>
                <div className='text-center'>
                    <h1 className='font-medium'>Mage Hand Press</h1>
                    <p className='text-xs'>High Quality Digital Assets</p>

                    <div className='mt-5'>
                        <button className=' bg-yellow-400 px-8 py-1.5 rounded-full'>Button</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ClientDash