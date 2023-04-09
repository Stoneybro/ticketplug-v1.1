import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import home from '../public/images/home.svg'
import {HiOutlineHome} from 'react-icons/hi'
import {BiCalendar,BiCalendarPlus,BiHelpCircle} from 'react-icons/bi'
import {FiSettings} from 'react-icons/fi'
import { useRouter } from 'next/router'
const Navitem=({name,path,img,route})=>{

    return(
      <Link href={path} className='text-[#9E9FA8]'><div className={` ${route==path?'text-black':""} hover:bg-[#F0F0F0] hover:border hover:border-[#D6D6D6] hover:text-black rounded flex gap-4 py-2 px-4 border border-transparent items-center `}> <span className='text-xl'>{img}</span> {name}</div></Link>
    )
}
const sidebar = ({children}) => {
  const router=useRouter()
  return (

    <main className='grid grid-cols-[1fr,4.5fr] grid-rows-1 '>
        <div className='border border-[#E4E4E4] bg-[#F9F9F9] flex flex-col py-8 px-4 gap-2'>
        <Navitem name='Dashboard' path='/dashboard' img={<HiOutlineHome />} route={router.pathname} />
        <Navitem name='Events' path='/events' img={<BiCalendar />}route={router.pathname}/>
        <Navitem name='Create Event' path='/createevent' img={<BiCalendarPlus />}route={router.pathname}/>
        <Navitem name='Settings' path='/settings' img={<FiSettings />} route={router.pathname}/>
        <Navitem name='Help Center' path='/settings' img={<BiHelpCircle />} route={router.pathname}/>
        </div>
        <div>{children}</div>
    </main>

  )
}



export default sidebar