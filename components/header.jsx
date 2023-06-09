import React from 'react'
import Image from 'next/image'
import bgimage from '../public/images/Heropage.png'
import headertext from '../public/images/Header-main.svg'
import { signOut } from 'next-auth/react'

const Header = () => {
  const handleSignout= async (e)=>{
    e.preventDefault()
    signOut({redirect:false})
  }
  return (
    <div className='h-screen overflow-hidden flex justify-center items-center relative'>
      <Image src={bgimage} fill priority alt='header background image' className=' object-cover absolute top-0 left-0 -z-10 w-auto h-auto ' />
      <div className='bg-black text-white px-4 py-2 absolute top-0 right-7 cursor-pointer' onClick={handleSignout}>Sign Out</div>
      <div className=' flex flex-col h-full items-center justify-center gap-16 -translate-y-4' >
        <Image src={headertext} width={700} height={700} alt='Get access to the best events' />
        
        <div className='text-center relative inline w-4/5 z-10'>
            <input type="text" placeholder='Search for an event or a party' className='w-full px-8 py-4 outline-none rounded-[91px]  ' />
            <button className='absolute text-white bg-accent rounded-[41px] py-2 px-6 right-2 top-[0.5rem] flex items-center font-Gilroybold  gap-2 '><img src="./images/search-icon.svg" className='w-3' alt="" />Search</button>
        </div>
      </div>
    </div>
  )
}

export default Header