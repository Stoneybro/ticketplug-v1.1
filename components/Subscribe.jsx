import React from 'react'

const Subscribe = () => {
  return (
    <div className='  bg-[#FFF8F8] px-[5%] max-w-[900px] mx-auto py-8 rounded-lg border mb-[14%] border-[#E4E4E4] flex flex-col gap-8'>
       <div className='  text-7xl'> Subscribe to get update <br/> on upcoming events</div>
       <div className='text-center relative '>
            <input type="text" placeholder='Enter your email' className=' w-4/5 px-8 py-4 outline-none rounded-[91px] border border-[#E4E4E4] font-Gilroymedium' />
            <button className='absolute text-white bg-black rounded-[41px] py-2 px-6 top-2 right-[5.3rem] flex items-center font-Gilroybold  gap-2 '>Subscribe</button>
        </div>
    </div>
  )
}

export default Subscribe