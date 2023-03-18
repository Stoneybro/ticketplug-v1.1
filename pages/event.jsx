import React from 'react'
import Layout from '@/components/layout'
import Buyticket from '@/components/buyticket'
import Image from 'next/image'
import Link from 'next/link'
import Card from '@/components/Card'


const event = () => {
  return (
    <Layout>
        <main className='grid grid-cols-[61.5%,38.5%]'>
            {/* information */}
            <div className=' py-28 flex ml-[6%] mr-[23%] justify-end '>
              
            
              <div className="flex flex-col gap-10 w-[30rem]">
              {/* title */}
              <div className="">
                <h1 className=' font-bold text-4xl'>Enchanted Party</h1>
                <span className='text-base text-gray-600 mt-2'>Friday,Oct 7, 8:00 PM</span>
                <div className='flex gap-6 items-center mt-6'>
                  <span><div className='flex  gap-2 font-bold text-[0.9rem]'><Image src="/images/ticket-icon.svg" alt="" width={15} height={15} />Free</div></span>
                  <Buyticket />
                </div>
                </div>
                {/* location */}

                <div>
                <h3 className='text-2xl font-bold'>Location</h3>
                <p className='text-sm text-secondary-text mt-2'>Landmark Centre Water Corporation<br/> Drive #Plot 2 & 3 Annex, LA 106104</p>


                <div className='mt-4 text-[#FE4848] font-semibold text-sm'><span>Hide Map</span><span></span></div>
                  {/* Map api */}
                  </div>

                  {/* About */}
                  <div>
                    <h3 className='text-2xl font-bold'>About</h3>
                    <p className='text-sm text-secondary-text mt-2'>Lagos Tech Fest is a high caliber Nigeria tech-focused conference, exhibitions and networking platform. The event focuses on addressing key developments in the African tech ecosystem while uncovering the countless opportunities within the Nigerian and African tech market.</p>
                  </div>
                  {/* tags */}
                  <div>
                  <h3 className='text-2xl font-bold '>Tags</h3>
                    <div className='flex flex-wrap gap-4 mt-2'>
                      <div className="bg-gray-100 text-gray-600 inline text-sm px-4 py-2 rounded-full">Lagos event</div>
                      <div className="bg-gray-100 text-gray-600 inline text-sm px-4 py-2 rounded-full">Lagos event</div>
                      <div className="bg-gray-100 text-gray-600 inline text-sm px-4 py-2 rounded-full">Lagos event</div>
                      <div className="bg-gray-100 text-gray-600 inline text-sm px-4 py-2 rounded-full">Lagos event</div>
                      <div className="bg-gray-100 text-gray-600 inline text-sm px-4 py-2 rounded-full">Lagos event</div>

                    </div>
                    </div>
                  
                 {/* Organizer */}
                 <div >
                  <h3 className='text-2xl font-bold '>Organizer</h3>
                  <div className=' shadow-xl px-6 py-4 w-4/5 rounded-md flex gap-4 flex-col items-start ; '>
                    <span className='text-[#3B84F1] text-xl font-semibold'>Partyboyz</span>
                    <span className='text-sm text-secondary-text'>View other events by this organizer</span>
                    <Link href='/' ><button className='btnprimary'>View events</button></Link>

                  </div>
                 </div>
                 </div>
                 </div>

            {/* picture */}

            <div className='bg-black '>
              <div className="sticky top-56 bottom-56 w-full px-4 py-4"><Image src={'/images/eventimg.png'} width={550} height={150} className='mx-auto' /></div>
            </div>
        </main>
        {/* more events */}
        <div className=' mx-auto max-w-[1040.64px] py-[6.5rem] flex flex-col justify-center'>
        <div>
          <div className="font-bold text-xl mb-4">Other events you may like</div>
            <div className='flex justify-between'>
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
        <div className='flex justify-center mt-16'><button className='bg-black hover:bg-accent text-white px-24 py-2 rounded-[41px]'>View more</button></div>

        </div>
    </Layout>
  )
}

export default event