import React from 'react'
import { Button, Container, Input } from '../components'
import google from "../assets/google.png"
import facebook from "../assets/facebook.png"
import { NavLink } from 'react-router-dom'

function Login() {
  return (
    <Container className='flex flex-col items-center justify-start gap-4'>
      <h1 className='font-bold text-2xl text-[#2C2B2B] mt-4 self-start ml-6'>Welcome Back</h1>
      <form className='flex flex-col items-center justify-start gap-6 w-full h-[45%]'>
        <Input name='email' placeHolder='Email' />
        <Input name='password' placeHolder='Password' />
        <p className='text-[12px] text-[#7F7F7F] hover:underline font-medium self-start ml-6'>Forgot your password?</p>
      </form>
      <NavLink to='/android6' className='w-full flex items-center justify-center'>
        <Button className='w-[90%] h-[50px] rounded-lg'>
          Sign In
        </Button>
      </NavLink>
      <div className='flex items-center justify-center gap-2'>
        <div className='w-[40vw] h-[2px] bg-gray-200'></div>
        <p>Or</p>
        <div className='w-[40vw] h-[2px] bg-gray-200'></div>
      </div>
      <div className='flex items-center justify-center gap-6'>
        <div className='size-[44px] border-[2px] flex items-center justify-center cursor-pointer border-[#7F7F7F] rounded-[8px]'><img src={google} /></div>
        <div className='size-[44px] border-[2px] flex items-center justify-center cursor-pointer rounded-[8px] border-[#7F7F7F]'><img src={facebook} /></div>
      </div>
      <p className='text-[12px] font-medium hover:underline'>Don’t have an account yet?<NavLink to='/android4' className='text-[#9FB2FF] underline'> Create an account</NavLink></p>
    </Container>
  )
}

export default Login