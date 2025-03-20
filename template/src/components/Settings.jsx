import React from 'react'

const Settings = () => {
  return (
    <div className='flex flex-wrap justify-center  w-full px-5'>
        <div className='flex-col place-items-center mt-5'>
            <div>
                <h1 className='text-3xl font-medium'>Settings</h1>
            </div>

            <div className='mt-10 flex flex-wrap justify-center items-center gap-10 border-gray-300 pb-3 overflow-x-auto'>
                {
                    ["tab1","tab2","tab3","tab4","tab5","tab6"].map((tab, index) => (
                        <button key={index} className='flex-1 justify-between border px-6 py-1 rounded-md shadow-md'>
                            {tab}
                        </button>
                    ))
                }
            </div>

            <div className='mt-10 w-full shadow-md border rounded-lg h-44'>
                <img src="" alt="" />
                <p className=' font-medium pl-10 pt-10 text-2xl'>User Create Account</p>
            </div>

        </div>
    </div>
  )
}

export default Settings