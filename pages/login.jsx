import React from 'react'
import Layout from '@/components/layout'
import validate from '@/lib/validate'
import { useFormik } from 'formik'
import Link from 'next/link'
import { useSession,signIn,signOut } from 'next-auth/react'


const login = () => {

   const handleSignin= async (e)=>{
      e.preventDefault()
      signIn('google',{callbackUrl:'http://localhost:3000'})
   }

   const onSubmit= (values) =>{

       signIn('django',{
         email:values.email,
         password:values.password
       })
   }
   const formik=useFormik({
      initialValues:{
         email:'',
         password:''
      },
      onSubmit,
      validate
   })


  return (
   <>
  <Layout>
   <div className='flex justify-center items-center  text-black  h-screen'>

 <form className='flex flex-col w-96 gap-8 mt-18' onSubmit={formik.handleSubmit}>

   <h1 className='text-4xl text-center font-BebasNeuebold mb-4'>LOGIN</h1>
   <div className='flex flex-col gap-1 relative' >

   <label htmlFor="email" className=' font-Gilroysemibold'>Email</label>
   {formik.errors.email ? <div>{formik.errors.email}</div> : null}
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
       {formik.errors.password ? <div>{formik.errors.password}</div> : null}
       <input
       id='password'
       name='password'
       type="password"      
       aria-describedby="password"
       className={`border ${formik.errors.password&&formik.touched.password?'border-accent': 'border-[#E4E4E4]'} py-[0.7rem] rounded px-4`}
       value={formik.values.password}
      {...formik.getFieldProps('password')}
       />
       
       <div className='text-[#949494] text-sm font-Gilroymedium mt-2'>Forgot password</div>
    </div>
       <button type="submit" className='bg-black text-white rounded py-2'>Login</button>
       <button className='border p-4 rounded hover:bg-black hover:text-white' onClick={handleSignin}>SIGN IN WITH GOOGLE</button>

       <div className='text-center font-Gilroysemibold'>Don't have an account? <Link href='/register' ><span className='text-accent'>Sign up</span></Link></div>
 </form>

</div>
</Layout>
   </>
  )
}

export default login