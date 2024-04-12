import React from 'react'
import { Button, Container, Input } from '../components'
import google from "../assets/google.png"
import facebook from "../assets/facebook.png"
import { NavLink } from 'react-router-dom'

function Signup() {
  return (
    <Container className='flex flex-col items-center justify-start gap-4'>
      <h1 className='font-bold text-2xl text-[#2C2B2B] mt-4 self-start ml-6'>Create an account</h1>
      <form className='flex flex-col items-center justify-center h-[45%] gap-6 w-full'>
        <Input name='firstName' placeHolder='First Name' />
        <Input name='lastName' placeHolder='Last Name' />
        <Input name='email' placeHolder='Email' />
        <Input name='password' placeHolder='Password' />
        <div className='flex items-center justify-center'>
          <input type='checkbox' id='cb' className='mr-2 checked:bg-sky-500 cursor-pointer appearance-none size-[20px] border-[1px] border-black rounded' />
          <label htmlFor="cb" className='text-[12px] text-[#7F7F7F] cursor-pointer'>By proceeding, I agree to all <span className='text-[#9FB2FF] underline'>T&C</span> and  <span className='text-[#9FB2FF] underline'>Privacy Policy</span></label>
        </div>
      </form>
      <NavLink to='/android6' className='w-full flex items-center justify-center'><Button className='w-[90%] h-[50px] rounded-lg'>
        Create an Account
      </Button></NavLink>
      <div className='flex items-center justify-center gap-2'>
        <div className='w-[40vw] h-[2px] bg-gray-200'></div>
        <p>Or</p>
        <div className='w-[40vw] h-[2px] bg-gray-200'></div>
      </div>
      <div className='flex items-center justify-center gap-6'>
        <div className='size-[44px] border-[2px] flex items-center justify-center cursor-pointer border-[#7F7F7F] rounded-[8px]'><img src={google} /></div>
        <div className='size-[44px] border-[2px] flex items-center justify-center cursor-pointer rounded-[8px] border-[#7F7F7F]'><img src={facebook} /></div>
      </div>
      <p className='text-[12px] font-medium hover:underline'>Already have an account? <NavLink to='/android5' className='text-[#9FB2FF] underline'>Login</NavLink></p>
    </Container>
  )
}

export default Signup