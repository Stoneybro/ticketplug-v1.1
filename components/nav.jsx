import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const Nav = () => {

  return (
    <nav className={`w-full sticky top-0 bg-black  z-50 font-Gilroy`}>
    <div className='flex bg-inherit text-white items-center max-w-[1040.64px] mx-auto py-5 gap-x-8 leading-none   top-0'>

    
    <Link href='/' className='mr-auto flex items-center gap-2 '>
    <Image src="./images/ticket-logo.svg" width={150} height={150} placeholder='blur' blurDataURL='./images/ticket-logo.svg'  />
    </Link>
      <Link href='/help' className='hover:text-accent transition ease-in-out duration-300 '>Help</Link>
      <Link href='/about' className='hover:text-accent transition ease-in-out duration-300'>About</Link>
      <Link href='/merch' className='hover:text-accent transition ease-in-out duration-300'>Mesh</Link>
      <Link href='/events' className='hover:text-accent transition ease-in-out duration-300 '>Create Event</Link> 
      <Link href='/login' ><button className='border border-[#FE4848] text-[#FE4848] py-[0.6rem] px-[1.85rem] rounded-3xl font-Gilroybold text-[0.875rem]  ml-[13px] hover:bg-accent hover:text-white transition-all duration-300 ease-in-out'>Login</button></Link>
      </div>
  </nav>

  )
}

export default Nav