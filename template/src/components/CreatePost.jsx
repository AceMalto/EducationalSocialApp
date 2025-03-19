import React from 'react'

const CreatePost = () => {
  return (
    <div className='flex-wrap px-10 py-10'>
        <h1 className='text-xl md:text-3xl font-semibold'>
            Create Post
        </h1>

        <div className='flex flex-col-reverse md:flex-row pt-5'>
            <div className='flex-wrap space-y-10 w-full md:w-6/12 lg:w-8/12'>
                <div className=' space-y-2'>
                    <h1 className="text-2xl font-semibold">Tags</h1>
                    <input type="text" className='border rounded-md w-full pl-5 pt-1 text-xl outline-none'/>
                </div>
                
                <div className=' space-y-2'>
                    <h1 className="text-2xl font-semibold">Descriptions</h1>
                    <textarea name="" id="" className='border rounded-md w-full h-32 pl-3 pt-1 text-xl outline-none'></textarea>
                </div>

                <div className=' space-y-2'>
                    <h1 className="text-2xl font-semibold">Subscription Contents</h1>
                    <select name="" id="" className='border w-full text-xl p-1 outline-none rounded-md'>
                        <option default>default</option>
                        <option value="">1</option>
                    </select>
                </div>

                <div className=' space-y-2'>
                    <button className='px-10 py-2 rounded-full bg-yellow-400 shadow-lg'>
                        Post
                    </button>
                </div>
            </div>
            <div className='flex-wrap p-5 flex-1'>
                <div className=' rounded-3xl w-full h-76 flex flex-col relative'>

                    <div className='flex justify-end space-x-2 p-2 -mb-12 z-10'>
                        <button className='bg-white px-3 py-1.5 rounded-full cursor-pointer shadow-md'>Add</button>
                        <button className='bg-white px-3 py-1.5 rounded-full cursor-pointer shadow-md'>Remove</button>
                    </div>
                    {/* backgroung */}
                    <div className='flex-grow overflow-hidden rounded-3xl z-0'>
                        <img src="https://rukminim3.flixcart.com/image/850/1000/jdxeykw0/poster/j/a/2/medium-courage-the-cowardly-dog-poster-sp004-original-imaf2g42ac2g8t84.jpeg?q=20&crop=false" 
                            alt="" 
                            className='w-full h-full object-cover rounded-3xl'/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CreatePost