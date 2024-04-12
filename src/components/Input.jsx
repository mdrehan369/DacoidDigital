import React from 'react'
import { twMerge } from "tailwind-merge"

function Input({
    name,
    type='text',
    placeHolder='',
    className='',
    ...props
}) {
  return <input 
    name={name}
    type={type}
    className={twMerge('bg-[#F1F1F1] p-4 rounded-[12px] w-[90%] h-[50px] placeholder:text-[#7F7F7F]', className)}
    placeholder={placeHolder}
    {...props}
  />
}

export default Input