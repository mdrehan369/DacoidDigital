import React from 'react'
import { twMerge } from "tailwind-merge"

function Button({
    children,
    type='button',
    className='',
    ...props
}) {
  return (
    <button
    type={type}
    className={twMerge('text-white text-[16px] font-medium from-[#95BEFF] to-[#7B91FF] bg-gradient-to-r', className)}
    {...props}
    >
        {children}
    </button>
  )
}

export default Button