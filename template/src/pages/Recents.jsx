import React from 'react'
import { BiLike } from "react-icons/bi";
import { BsThreeDots } from "react-icons/bs";


const ClientProf = [
    {
        "image": "https://4kwallpapers.com/images/wallpapers/astronaut-space-suit-crescent-moon-half-moon-surface-moon-5k-1280x1280-8128.jpeg",
        "title": "Renders starting to come for Aprils release",
        "Desc": "This change does not bring any change in the content that we are delivering every moth or the pricing",
    },
    {
        "image": "https://4kwallpapers.com/images/wallpapers/astronaut-space-suit-crescent-moon-half-moon-surface-moon-5k-1280x1280-8128.jpeg",
        "title": "Gearguts mekshop",
        "Desc": "If it works out well we could build on this idea with additional weapons from previous design",
        "blur": "blur-lg"
    },
    {
        "image": "https://images.unsplash.com/photo-1637118259230-eaa1088f8168?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA==",
        "title": "Pink foam brigade",
        "Desc": "Add a unique mix of lethal efficiency and humor to you collection with the Opc Commando Models.",
    },
]
const Recents = () => {
  return (
    <div className='flex-wrap px-10 space-y-10 h-screen overflow-y-auto'>
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

        <div className='flex flex-col gap-4 flex-wrap'>
            {
                ClientProf.map((cards, index) => (
                    <div key={index} className=' relative border rounded-3xl w-full h-64 shadow-lg overflow-hidden'>
                        <div className='absolute z-10 flex space-x-3 p-2.5'>
                            <BiLike className='bg-white rounded-full border p-2 w-10 h-10'/>
                            <BsThreeDots className='bg-white rounded-full border p-2 w-10 h-10'/>
                        </div>

                        <div className='absolute z-10 right-3 top-3 rounded-3xl bg-slate-50 border border-white w-64 h-56 px-5'>
                            <div className="flex flex-col items-center justify-center h-full space-y-2">
                                <h1 className=' font-medium text-sm text-center'>{cards.title}</h1>
                                <p className=' text-xs text-center'>{cards.Desc}</p>
                            </div>
                        </div>

                        <img src={cards.image} alt="" 
                        className={`w-full h-full object-cover ${cards.blur}`}/>
                    </div>
                ))
            }
        </div>

        <div className='flex justify-center pb-12'>
            <button className=' bg-yellow-400 px-8 py-1.5 rounded-full shadow-lg'>All Posts</button>
        </div>
    </div>
  )
}

export default Recents