import React from 'react'
import Layout from '@/components/layout'
import { getSession } from 'next-auth/react'



const createevent = () => {
  return (
    <Layout>
      <div className=' '>
      <div className="max-w-3xl p-2 mx-auto my-20 flex flex-col gap-8">


      <div className=' flex flex-col gap-1 border-b border-border-color pb-4'>
        <span className='font-bold text-xl'>Event Info</span>
        <span className=' text-secondary-text text-sm'>Name your event and add details that makes it unique </span>
      </div>


        <label htmlFor="" className='font-medium '>
          Event Title:
          <div className="border-border-color border py-3 px-6 rounded mt-3">
          <input type="text" className='block outline-none w-full  text-sm' placeholder='Type in your event title' />
          </div>
        </label>



        <label htmlFor="" className='font-medium '>
          Organizer:
          <div className="border-border-color border py-3 px-6 rounded mt-3">
          <input type="text" className='block outline-none w-full  text-sm' placeholder='Type in your event title' />
          </div>
        </label>


        <label htmlFor="" className='font-medium '>
          Type:
          <div className="border-border-color border py-3 px-6 rounded mt-3 w-1/2">
            <select name="" id="" className='block outline-none w-full  text-sm'>
              <option>Select type of Event</option>
            </select>
          {/* <input type="text" className='block outline-none w-full  text-sm' placeholder='Type in your event title' /> */}
          </div>
        </label>

        <label htmlFor="" className='font-medium '>
          Organizer:
          <div className="border-border-color border py-3 px-6 rounded mt-3">
          <input type="text" className='block outline-none w-full  text-sm' placeholder='Type in your event title' />
          </div>
        </label>


      <div>
        <label htmlFor="">

        </label>
      </div>


      <div>
        <label htmlFor="">
          <input type="text" />
        </label>
      </div>


      <div>
        <label htmlFor="">
          <input type="text" />
        </label>
      </div>

      </div>
      </div>
    </Layout>
  )
}

export default createevent


export async function getServerSideProps({req}) {
    const session=await getSession({req})
    if (!session) {
      return{
        redirect:{
          destination:'/login',
          permanent:false
        }
      }
    }
    return{
      props:{session}
    }
}