import React from 'react'
import Link from 'next/link'
const Card = () => {
  return (
    <div className='w-60 rounded bg-[#F9F9F9] border-[#E4E4E4]   overflow-hidden relative shadow-sm border-x-[1px] border-b-[1px]'>
        <img src="./images/LTF.png" alt="" />
        <div className='pl-4 pt-3 pb-6 flex flex-col gap-1 justify-start '>
            <div className=' text-lg font-bold'>Enchanted Party</div>
            <div className='text-accent text-sm font-medium'>Friday october 8pm</div>
            <div className='flex gap-2 font-medium text-[0.9rem]'><img src="./images/location-icon.svg" alt="" />Landmark Center,Lagos.</div>
            <div className='flex  gap-2 font-bold text-[0.9rem]'><img src="./images/ticket-icon.svg" alt="" />Free</div>
            <Link href='' className='flex justify-center'><button className='text-accent hover:text-white hover:bg-accent  py-[0.4rem] px-7 mt-3 text-sm rounded-3xl border-accent border-[1.5px] font-Gilroybold'>Buy Ticket</button></Link>
        </div>
        </div>
  )
}

export default Card