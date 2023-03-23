import React, { useEffect, useState } from 'react'
import Card from './Card'
import axios from '@/lib/axios'
import { useSession } from 'next-auth/react'
const Cardcontainer = () => {
  const [trending,setTrending]=useState('')
  const {data:session}=useSession()
  useEffect(()=>{
    console.log(session);
    const fetch= async()=>{
      if (session) {
        try {
          const response=axios.get('trending-events/')
          setTrending(response)
        } catch (error) {
          console.log(error);
        }
        
        
      }else{
        console.log('user isnt authenticated');
      }
    }
    fetch()
  },[])
  return (
    <div className=' mx-auto max-w-[1040.64px] py-[6.5rem] flex flex-col justify-center'>
        <div>
            <div className='font-bold mb-4 text-2xl font-BebasNeue text-[2.1rem]'>Upcoming Events</div>
            <div className='flex justify-between font-Gilroy'>
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
        <div className='font-bold mb-4 text-2xl font-BebasNeue text-[2.1rem] mt-[6.5rem]'>Trending</div>
        <div className='flex justify-between font-Gilroy flex-wrap gap-y-6'>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>

            <div className='flex justify-center mt-10'><button className='bg-black hover:bg-accent text-white px-24 py-2 rounded-[41px]'>View All</button></div>
    </div>
  )
}

export default Cardcontainer