import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Buyticket from './buyticket'
const Card = () => {
  return (
    <div className='w-60 rounded bg-[#F9F9F9] border-[#E4E4E4] grid grid-rows-[1.5fr,2fr]   overflow-hidden relative shadow-sm border-x-[1px] border-b-[1px]'>
        <div className=' bg-[url(/images/LTF.png)] bg-no-repeat bg-contain bg-black bg-center'></div>
        <div className='px-4 pt-3 pb-6 flex flex-col gap-1 justify-start flex-1 '>
            <div className=' text-lg font-bold'>Enchanted Party</div>
            <div className='text-accent text-sm font-medium'>Friday october 8pm</div>
            <div className='flex gap-2 font-medium text-[0.9rem]'><Image src="/images/location-icon.svg" alt="" width={15} height={15} />Landmark Center,Lagos.</div>
            <div className='flex  gap-2 font-bold text-[0.9rem]'><Image src="/images/ticket-icon.svg" alt="" width={15} height={15} />Free</div>
            <Buyticket />
        </div>
        </div>
  )
}

export default Card