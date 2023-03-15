import React from 'react'
import Image from 'next/image'
const Footer = () => {
  return (
    <footer>
        <div className='bg-black text-sm'>
    <div className=' flex mx-auto pt-[4.5rem] pb-12 text-white items-start gap-36 max-w-[1040.64px] '>
    <Image src="./images/ticket-logo.svg" width={150} height={150} placeholder='blur' blurDataURL='./images/ticket-logo.svg'  />
      <div className='flex flex-col gap-3'>
        <div>Help</div>
        <div>About</div>
        <div>Merch</div>
        <div>Create Event</div>
      </div>

      <div className='flex flex-col gap-3'>
        <div>Instagram</div>
        <div>Facebook</div>
        <div>Twitter</div>
       
      </div>

    
      </div>
      <div className=' py-4 px-28 flex justify-center bg-accent font-Gilroybold '><div >&#169; 2023 TicketPlug. All Rights Reserved.</div></div>
    </div>
    </footer>
  )
}

export default Footer