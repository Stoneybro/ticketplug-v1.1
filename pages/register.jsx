import React from 'react'
import Link from 'next/link'
import Layout from '@/components/layout'
import { useFormik } from 'formik'
import { signIn } from 'next-auth/react'
import { validateSignup } from '@/lib/validate'
import axios from '@/lib/axios'

const register = () => {

  const onSubmit= async (values)=>{
    try {
      const response=axios.post('signup/',values)
    } catch (error) {
      console.log(error);
    }
  }
  const formik=useFormik({
    initialValues:{
     // username:'',
      email:'',
      password1:'',
      password2:''
    },
    onSubmit,
    validate:validateSignup,
    
    
  })

  return (
    <Layout>
      <div className='flex justify-center items-center   text-black  mt-10 mb-16'>

<form className='flex flex-col w-96 gap-4' onSubmit={formik.handleSubmit}>

  <h1 className='text-4xl text-center  mb-4'>REGISTER</h1>


  {/* <div className='flex flex-col gap-1 relative' >
        <label htmlFor="username" className=' font-Gilroysemibold'>Username</label>
        {formik.errors.username&&formik.touched.username? <div>{formik.errors.username}</div> : null}
              
            <input
            id='username'
            name='username'
            type="username"
            className={`border ${formik.errors.username&&formik.touched.username?'border-accent': 'border-[#E4E4E4]'} py-[0.7rem] rounded px-4`}
            {...formik.getFieldProps('username')}
            value={formik.values.username}
            />
  </div> */}

      
  <div className='flex flex-col gap-1 relative' >
  <label htmlFor="email" className=' font-Gilroysemibold'>Email</label>
  {formik.errors.email&&formik.touched.email ? <div>{formik.errors.email}</div> : null}
      <input
      id='email'
      name='email'
      type="email"
      className={`border ${formik.errors.email&&formik.touched.email?'border-accent': 'border-[#E4E4E4]'} py-[0.7rem] rounded px-4`}
      {...formik.getFieldProps('email')}
      value={formik.values.email}
      />
      </div>



      <div className='flex flex-col gap-1'>
      <label htmlFor="password" className=' font-Gilroysemibold'>Password</label>
      {formik.errors.password1&&formik.touched.password1 ? <div>{formik.errors.password1}</div> : null}
      <input
      id='password'
      name='password'
      type="password"      
      aria-describedby="password"
      className={`border ${formik.errors.password1&&formik.touched.password1?'border-accent': 'border-[#E4E4E4]'} py-[0.7rem] rounded px-4`}
      value={formik.values.password1}
     {...formik.getFieldProps('password1')}
      />
  </div>

  <div className='flex flex-col gap-1'>
      <label htmlFor="password2" className=' font-Gilroysemibold'>confirm Password</label>
      {formik.errors.password2&&formik.touched.password2 ? <div>{formik.errors.password2}</div> : null}
      <input
      id='password2'
      name='password2'
      type="password"      
      aria-describedby="confirm password"
      className={`border ${formik.errors.password2&&formik.touched.password2?'border-accent': 'border-[#E4E4E4]'} py-[0.7rem] rounded px-4`}
      value={formik.values.password2}
     {...formik.getFieldProps('password2')}
      />
  </div>

      <div>
      <div className='text-[#949494] text-sm font-Gilroymedium mt-2'>Forgot password</div>
   </div>
      <button type="submit" className='bg-black text-white rounded py-2'>Register</button>

      <div className='text-center font-Gilroysemibold'>Don't have an account? <Link href='/register' ><span className='text-accent'>Sign up</span></Link></div>
</form>

</div>
    </Layout>
  )
}

export default register