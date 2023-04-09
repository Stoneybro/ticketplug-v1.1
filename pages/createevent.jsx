import React, { useEffect, useState } from 'react'
import Layout from '@/components/layout'
import { getSession } from 'next-auth/react'
import Sidebar from '@/components/sidebar'
import {BsCloudArrowUpFill} from 'react-icons/bs'
import { useRouter } from 'next/router'
import { useFormik } from 'formik'
import { useDispatch } from 'react-redux'
import { createEvent } from '@/store/slices/eventslice'
import { eventStatus } from '@/store/slices/eventslice'
import { useSelector } from 'react-redux'




const createevent = () => {

  const dispatch=useDispatch()
  const onSubmit=(values)=>{
    dispatch(createEvent(values))
  }
  const [image,setImage]=useState()

    const formik=useFormik({
      initialValues:{
        name:'',
        category:'',
        state:'',
        address:'',
        image:'',
        description:'',
        start_date:'',
        end_date:'',
       
    
      },
      onSubmit
    })

  return (
    <Layout>
      <Sidebar>
      <form className=' ' onSubmit={formik.handleSubmit}>
      <div className="max-w-2xl py-2 px-8 mr-auto my-20 flex flex-col gap-8">


      <div className=' flex flex-col gap-1 pb-4'>
        <span className='font-bold text-xl'>Create Event</span>
        <span className=' text-secondary-text font-semibold'>Event Details </span>
      </div>


      {/*  event title */}
        <label htmlFor="" className='font-medium '>
          Event Title:
          <div className="border-border-color border py-3 px-6 rounded mt-3">
          <input type="text"
          name='title'
          id='title'
           className='block outline-none w-full  text-sm'
            placeholder='Type in your event title'
            {...formik.getFieldProps('name')}
            value={formik.values.name}
            />
          </div>
        </label>

    {/* Categories */}
        <label htmlFor="type" className='font-medium '>
          Type:
          <div className="border-border-color border py-3 px-6 rounded mt-3 w-1/2">
            <select name="type" id="type" className='block outline-none w-full  text-sm' value={formik.values.category} {...formik.getFieldProps('category')}>
              <option>Select type of Event</option>
              <option>party</option>
              <option>formal</option>
            </select>
          </div>
        </label>

            {/* State(loacation) */}
            <div className='flex gap-4'>
        <label htmlFor="state" className='font-medium w-full'>
          State:
          <div className="border-border-color border py-3 px-6 rounded mt-3 w-full">
       
          <input type="text"
          name='state'
          id='state'
          className='block outline-none w-full  text-sm'
          placeholder='Type in your event title'
          value={formik.values.state}
            {...formik.getFieldProps('state')}
            />
          </div>
        </label>
          
              {/* Address (location) */}
        <label htmlFor="address" className='font-medium w-full'>
          Address:
          <div className="border-border-color border py-3 px-6 rounded mt-3 w-full">

          <input type="text"
          name='address'
          id='address'
           className='block outline-none w-full  text-sm'
            placeholder='Type in your event title' 
            value={formik.values.address}
            {...formik.getFieldProps('address')}
            />
          </div>
        </label>
        </div>

            {/*date  */}
        <div className='flex gap-4'>
        <label htmlFor="date" className='font-medium w-full'>
          Date:
          <div className="border-border-color border py-3 px-6 rounded mt-3 w-full">
          <input type="date"
           name="date" id="date"
            className='block outline-none w-full  text-sm'
            value={formik.values.start_date}
            {...formik.getFieldProps('start_date')}
            />

          </div>
        </label>
          
              {/*Time  */}
        <label htmlFor="time" className='font-medium w-full'>
          Time:
          <div className="border-border-color border py-3 px-6 rounded mt-3 w-full">
            <input type="date" name="time" id="time" className='block outline-none w-full  text-sm'
              value={formik.values.end_date}
              {...formik.getFieldProps('end_date')}
            />
          
            {/* <select name="" id="" >
              <option>Select type of Event</option>
            </select> */}
          {/* <input type="text" className='block outline-none w-full  text-sm' placeholder='Type in your event title' /> */}
          </div>
        </label>
        </div>


            
              {/*upload image */}
        <label htmlFor="image" className='font-medium w-full'>
          Upload image cover
          <div className=" border-dashed border-[#E4E4E4] border-[1.5px] bg-[#F9F9F9] h-48 w-3/5 relative">
            
           <input type='file' name='image' id='image' className='w-full h-full opacity-0 z-50 absolute top-0 left-0' value={image} onChange={(e)=>setImage(e.currentTarget.files)}   />
           <div className='flex flex-col  h-full w-full top-[50%] justify-center items-center  text-[#9E9FA8] text-sm  '><BsCloudArrowUpFill size={50} color='#9C9C9C' /><span> click or drag to upload image</span></div>
          </div>
        </label>

              {/*Event description */}
        <label htmlFor="" className='font-medium  '>
          Event Description:
          <div className="  mt-3 ">
          <textarea name="" id="" cols="45" rows="5"  className='border border-[#E4E4E4] p-2 outline-0 pointer-events-auto user-select-none'    value={formik.values.time}
            {...formik.getFieldProps('description')}></textarea>
          </div>
        </label>

        <div className='text-sm flex justify-between w-4/6'>
          <button className=' px-4 py-2 rounded-full border border-black'>Cancel</button>
          <button className='px-4 py-2 rounded-full bg-black text-white' type='submit' >Create Event</button>
        </div>
      </div>
      </form>
      </Sidebar>
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