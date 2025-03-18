import React from 'react'

const CreatePost = () => {
  return (
    <div className='flex-wrap px-10 py-10'>
        <h1 className='text-xl md:text-3xl font-semibold'>
            Create Post
        </h1>

        <div className='flex flex-row pt-5'>
            <div>
                <h1 className="text-2xl font-semibold">Tags</h1>
                <textarea name="" id="" className='border'></textarea>
                <h1 className="text-2xl font-semibold">Descriptions</h1>
                <textarea name="" id="" className='border'></textarea>
                <h1 className="text-2xl font-semibold">Subscription Contents</h1>
                <select name="" id="">
                    <option default>default</option>
                    <option value="">1</option>
                </select>
            </div>
            <div>
                s
            </div>
        </div>
    </div>
  )
}

export default CreatePost