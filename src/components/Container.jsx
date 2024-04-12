import React from 'react'
import { twMerge } from "tailwind-merge"

function Container({
    children,
    className='',
    ...props
}) {
  return (
    <div
    className={twMerge('w-[100%] h-[100vh] m-0 p-0', className)}
    {...props}
    >
        {children}
        </div>
  )
}

export default Container