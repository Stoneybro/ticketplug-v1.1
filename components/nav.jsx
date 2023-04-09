import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import {RxCaretDown} from 'react-icons/rx'
import Image from 'next/image'
import { useSession } from 'next-auth/react'
import { useSelector } from 'react-redux'
import { selectSession } from '@/store/slices/authslice'


const Nav = () => {
  
  const session=useSelector(selectSession)


  const [dropdown,setDropdown]=useState(false)
  return (
    <nav className={`w-full sticky top-0 bg-black  z-50 font-Gilroy`}>
    <div className='flex bg-inherit text-white items-center max-w-[1040.64px] mx-auto py-5 gap-x-8 leading-none top-0'>
    <Link href='/' className='mr-auto flex items-center gap-2 '>
    <Image src="./images/ticket-logo.svg" width={150} height={150} placeholder='blur' blurDataURL='./images/ticket-logo.svg'  />
    </Link>
      <Link href='/help' className='hover:text-accent transition ease-in-out duration-300 '>Help</Link>
      <Link href='/about' className='hover:text-accent transition ease-in-out duration-300'>About</Link>
      <Link href='/merch' className='hover:text-accent transition ease-in-out duration-300'>Mesh</Link>
      <Link href='/createevent' className='hover:text-accent transition ease-in-out duration-300 '>Create Event</Link> 
     {session?<><div className='bg-white flex items-center text-xs px-2 py-1 text-black rounded-2xl gap-2'><span className=' bg-accent rounded-full w-6 h-6 flex justify-center items-center text-white'>ZL</span><span>{session?.user?.name}</span><span onClick={()=>setDropdown(!dropdown)}><RxCaretDown size={'20px'}  /></span> </div>
</>
        :<Link href='/login' ><button className='btnprimary'>Login</button></Link>
    }  </div>
  </nav>

  )
}

export default Nav