import React from 'react'
import Nav from '@/components/nav'
import Footer from '@/components/Footer'
import Link from 'next/link'


const login = () => {
  return (
   <>
   <Nav />
   <div className='flex justify-center items-center font-Gilroy text-black  h-screen'>
 
 <form className='flex flex-col w-96 gap-8 mt-18'>
   <h1 className='text-4xl text-center font-BebasNeuebold mb-4'>LOGIN</h1>
   <div className='flex flex-col gap-1 relative' >

   <label htmlFor="email" className=' font-Gilroysemibold'>Email</label>
       <input
       id='email'
       name='email'
       type="email"
       required
       autoComplete='true'
       className='border border-[#E4E4E4] py-[0.7rem] rounded px-4'
       />
       </div>
       <div className='flex flex-col gap-1'>
       <label htmlFor="password" className=' font-Gilroysemibold'>Password</label>
       <input
       id='password'
       name='password'
       type="password"
       required
      
       aria-describedby="password"
       className='border border-[#E4E4E4] py-[0.7rem] rounded px-4 '
       />
       <div className='text-[#949494] text-sm font-Gilroymedium mt-2'>Forgot password</div>
    </div>
       <button type="submit" className='bg-black text-white rounded py-2'>Login</button>
       <div><input type='checkbox'
       id='persist'

       />
       <label htmlFor="persist">Trust This device</label>
       </div>
       <div className='text-center font-Gilroysemibold'>Don't have an account? <Link href='/register' ><span className='text-accent'>Sign up</span></Link></div>
 </form>

</div>
   <Footer />
   </>
  )
}

export default login